import { useState, useEffect } from "react";
import { supabaseClient } from "../config/supabase-client";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    picture: null,
  });
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const fetchProfile = async () => {
    try {
      const { data: user } = await supabaseClient.auth.getUser();
      if (user) {
        setProfile({
          name: user.user_metadata?.name || "",
          phone: user.user_metadata?.phone || "",
          picture: user.user_metadata?.picture || null,
        });
        setPreviewImage(user.user_metadata?.picture || null);
      }
    } catch (error) {
      toast.error("Failed to load profile.");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name in passwords) {
      setPasswords((prev) => ({ ...prev, [name]: value }));
    } else {
      setProfile((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile((prev) => ({ ...prev, picture: file }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const updateProfile = async () => {
    setLoading(true);
    try {
      const updates = {
        name: profile.name,
        phone: profile.phone,
        picture: null,
      };

      if (profile.picture && typeof profile.picture !== "string") {
        const { data: uploadData, error: uploadError } = await supabaseClient.storage
          .from("profile-pictures")
          .upload(`public/${profile.picture.name}`, profile.picture, {
            upsert: true,
          });

        if (uploadError) throw uploadError;

        updates.picture = uploadData.path;
      } else {
        updates.picture = profile.picture;
      }

      const { error } = await supabaseClient.auth.updateUser({
        data: {
          name: updates.name,
          phone: updates.phone,
          picture: updates.picture,
        },
      });

      if (error) throw error;

      toast.success("Profile updated successfully.");
      fetchProfile();
    } catch (error) {
      toast.error("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  const updatePassword = async () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error("New passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabaseClient.auth.updateUser({
        password: passwords.newPassword,
      });

      if (error) throw error;

      toast.success("Password updated successfully.");
      setPasswords({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error("Failed to update password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800">
      <div className="mt-32 p-6 max-w-lg w-full bg-white shadow-lg rounded-md">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          My Profile
        </h1>
        <div className="flex flex-col items-center mb-6">
          <label
            htmlFor="profilePicture"
            className="relative w-32 h-32 rounded-full bg-gray-200 overflow-hidden border-2 border-gray-400 cursor-pointer"
          >
            {previewImage ? (
              <img
                src={previewImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-600 flex items-center justify-center w-full h-full">
                Upload
              </span>
            )}
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              className="hidden"
              onChange={handlePictureChange}
            />
          </label>
          <p className="text-gray-600 text-sm mt-2">Click to upload picture</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateProfile();
          }}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-800">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-800 focus:outline-none focus:ring focus:ring-gray-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-800">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleInputChange}
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-800 focus:outline-none focus:ring focus:ring-gray-600"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 mt-4 bg-gray-800 text-white rounded-md shadow-sm ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900"
            }`}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>

      <div className="p-6 max-w-lg w-full bg-white shadow-lg rounded-md mt-9 mb-9">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Change Password
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updatePassword();
          }}
        >
          {["currentPassword", "newPassword", "confirmPassword"].map((field, index) => (
            <div className="mb-4" key={index}>
              <label className="block text-sm font-medium text-gray-800">
                {field === "currentPassword"
                  ? "Current Password"
                  : field === "newPassword"
                  ? "New Password"
                  : "Confirm Password"}
              </label>
              <div className="relative">
                <input
                  type={showPassword[field] ? "text" : "password"}
                  name={field}
                  value={passwords[field]}
                  onChange={handleInputChange}
                  className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-800 focus:outline-none focus:ring focus:ring-gray-600"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center"
                  onClick={() =>
                    setShowPassword((prev) => ({
                      ...prev,
                      [field]: !prev[field],
                    }))
                  }
                >
                  {showPassword[field] ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>
          ))}
          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 mt-4 bg-gray-800 text-white rounded-md shadow-sm ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900"
            }`}
          >
            {loading ? "Updating..." : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
