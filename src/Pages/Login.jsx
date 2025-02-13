import { useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { supabaseClient } from "../config/supabase-client";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordShown((prevState) => !prevState);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required.";
    if (!password.trim()) newErrors.password = "Password is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const loginUser = async () => {
    if (!validateForm()) return;
  
    setLoading(true);
    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email,
        password,
      });
  
      if (error) throw error;
      toast.success("Login Successful");
      navigate("/");
    } catch (err) {
      console.error("Supabase Login Error:", err);
      toast.error(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="h-screen w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center px-6 py-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm shadow-lg rounded-lg bg-white px-6 py-8">
        <h2 className="mt-10 mb-8 text-center text-2xl font-bold text-gray-900">
          Sign in to your account
        </h2>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className={`block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 shadow-md outline outline-1 ${
                errors.email ? "outline-red-500" : "outline-gray-300"
              } placeholder:text-gray-400 focus:outline-gray-600 sm:text-sm`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mt-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <a
              href="#"
              aria-label="Forgot password"
              className="text-sm font-semibold text-gray-800 hover:text-gray-900"
            >
              Forgot password?
            </a>
          </div>
          <div className="mt-2 relative">
            <input
              id="password"
              name="password"
              type={passwordShown ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 shadow-md outline outline-1 ${
                errors.password ? "outline-red-500" : "outline-gray-300"
              } placeholder:text-gray-400 focus:outline-gray-600 sm:text-sm`}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              aria-hidden="true"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-800 hover:text-gray-900 focus:outline-none"
            >
              {passwordShown ? (
                <EyeIcon className="h-5 w-5" />
              ) : (
                <EyeSlashIcon className="h-5 w-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <div>
          <button
            onClick={loginUser}
            disabled={loading}
            className={`mt-6 flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold text-white shadow-md ${
              loading
                ? "cursor-not-allowed bg-gray-600"
                : "hover:bg-gray-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-gray-600"
            }`}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not registered?{" "}
          <a
            href="/register"
            className="font-semibold text-gray-800 hover:text-gray-900"
          >
            Create a new account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
