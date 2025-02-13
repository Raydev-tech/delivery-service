import { useState } from "react";
import { supabaseClient } from "../config/supabase-client";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

const Register = () => {
  const [activeTab, setActiveTab] = useState("Individual");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    businessName: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const showToast = (message, type = "success") => {
    toast.dismiss();
    if (type === "success") toast.success(message);
    if (type === "error") toast.error(message);
  };

  const togglePasswordVisibility = () => {
    setPasswordShown((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown((prev) => !prev);
  };

  const validateForm = () => {
    const newErrors = {};
    const { email, password, confirmPassword, name, businessName, address } = formData;

    if (!email.trim()) newErrors.email = "Email is required.";
    if (!password.trim()) newErrors.password = "Password is required.";
    if (!confirmPassword.trim()) newErrors.confirmPassword = "Confirm Password is required.";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match.";

    if (activeTab === "Individual" && !name.trim()) {
      newErrors.name = "Full Name is required.";
    }
    if (activeTab === "E-commerce") {
      if (!businessName.trim()) newErrors.businessName = "Business Name is required.";
      if (!address.trim()) newErrors.address = "Address is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const registerUser = async () => {
    if (!validateForm()) return;

    const { email, password } = formData;

    const { error } = await supabaseClient.auth.signUp({
      email,
      password,
    });

    if (!error) {
  showToast("Registration successful. Please check your email.");
  navigate("/verifypage");
} else {
  showToast(error.message, "error");
}
  };

  const renderFormFields = () => {
    if (activeTab === "Individual") {
      return (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-900">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className={`block w-full rounded-md bg-gray-100 px-3 py-1.5 text-gray-900 shadow-md outline outline-1 ${
              errors.name ? "outline-red-500" : "outline-gray-300"
            } focus:outline-gray-600`}
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </div>
      );
    }

    if (activeTab === "E-commerce") {
      return (
        <>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-900">
              Business Name
            </label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              required
              className={`block w-full rounded-md bg-gray-100 px-3 py-1.5 text-gray-900 shadow-md outline outline-1 ${
                errors.businessName ? "outline-red-500" : "outline-gray-300"
              } focus:outline-gray-600`}
            />
            {errors.businessName && <p className="text-sm text-red-500 mt-1">{errors.businessName}</p>}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-900">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className={`block w-full rounded-md bg-gray-100 px-3 py-1.5 text-gray-900 shadow-md outline outline-1 ${
                errors.address ? "outline-red-500" : "outline-gray-300"
              } focus:outline-gray-600`}
            />
            {errors.address && <p className="text-sm text-red-500 mt-1">{errors.address}</p>}
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center px-6 py-12">
      <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-md shadow-lg rounded-lg bg-white px-6 py-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Register Your Account
          </h2>
        </div>

        <div className="flex justify-between space-x-4">
          {["Individual", "E-commerce"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-1/2 py-2 rounded-md text-sm font-semibold ${
                activeTab === tab
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            registerUser();
          }}
          className="mt-8"
        >
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={`block w-full rounded-md bg-gray-100 px-3 py-1.5 text-gray-900 shadow-md outline outline-1 ${
                errors.email ? "outline-red-500" : "outline-gray-300"
              } focus:outline-gray-600`}
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <div className="relative">
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className={`block w-full rounded-md bg-gray-100 px-3 py-1.5 text-gray-900 shadow-md outline outline-1 ${
                  errors.password ? "outline-red-500" : "outline-gray-300"
                } focus:outline-gray-600`}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-800 hover:text-gray-900 focus:outline-none"
              >
                {passwordShown ? (
                  <EyeIcon className="h-5 w-5" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-900">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={confirmPasswordShown ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className={`block w-full rounded-md bg-gray-100 px-3 py-1.5 text-gray-900 shadow-md outline outline-1 ${
                  errors.confirmPassword ? "outline-red-500" : "outline-gray-300"
                } focus:outline-gray-600`}
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-800 hover:text-gray-900 focus:outline-none"
              >
                {confirmPasswordShown ? (
                  <EyeIcon className="h-5 w-5" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>}
          </div>

          {renderFormFields()}

          <div>
            <button
              type="submit"
              className="mt-6 flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold text-white shadow-md hover:bg-gray-900"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-semibold text-gray-800 hover:text-gray-900"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
