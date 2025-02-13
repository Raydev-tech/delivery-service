import { useEffect, useState } from "react";
import { supabaseClient } from "../config/supabase-client";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const VerifyPage = () => {
  const [email, setEmail] = useState("");
  const [countdown, setCountdown] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserEmail = async () => {
      const { data: session } = await supabaseClient.auth.getSession();

      if (session?.session?.user) {
        setEmail(session.session.user.email);
      } else {
        toast.error("No active session found!");
        navigate("/register"); 
      }
    };

    fetchUserEmail();
  }, [navigate]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      toast.success("Email verified!");
      navigate("/login");
    }
  }, [countdown, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 px-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Verify Your Email
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          We have sent a link to your email <span className="font-semibold">{email}</span>. 
          Please check your inbox to verify your email address.
        </p>
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800">
            Redirecting to the login page in {" "}
            <span className="text-blue-600">{countdown}</span> seconds...
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
