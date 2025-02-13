import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { FaMapMarkerAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faShip,  
  faGlobe, 
  faPlaneDeparture,
  faShoppingBag,
  faDashboard,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="top-48 ml-7 w-64 bg-white p-4 absolute rounded-lg border border-gray-300">
      <nav className="space-y-4">
        <a href="/ship" className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition">
          <FontAwesomeIcon icon={faShip} className="text-blue-500" />
          <span>Ship Now</span>
        </a>
        <a href="overseas" className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition">
          <FontAwesomeIcon icon={faGlobe} className="text-yellow-500" />
          <span>Overseas Shipping</span>
        </a>
        <a href="/dashboard" className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition">
          <FontAwesomeIcon icon={faDashboard} className="text-orange-500" />
          <span>Dashboard</span>
        </a>
        <a href="/airshipping" className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition">
          <FontAwesomeIcon icon={faPlaneDeparture} className="text-purple-500" />
          <span>Air Shipping</span>
        </a>
        <a href="/personal" className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition">
          <FontAwesomeIcon icon={faShoppingBag} className="text-pink-500" />
          <span>Personal Shopping</span>
        </a>
      </nav>
    </div>
  );
};

const TrackingSteps = () => {
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropoffAddress, setDropoffAddress] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (pickupAddress && dropoffAddress) {
      setIsLoading(true);
      if (!navigator.onLine){
        console.log("user is offline", formData)
        toast.error("You are currently offline")
        return;
      };
      setTimeout(() => {
        setCurrentStep((prevStep) => prevStep + 1);
        navigate("/form");
        setIsLoading(false);
      }, 1500);
    } else {
      toast.error("Please fill in both addresses before proceeding.");
    }
  };

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <h1 className="mt-60 ml-40 text-white text-4xl font-bold text-center mb-8">
        We’re excited to serve you!
      </h1>
      <div className="mx-72 w-full max-w-4xl bg-white p-8 rounded-lg shadow-md border-2 border-gray-300">
        
        <div className="flex items-center justify-center mb-8 space-x-4">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 shadow-md ${
                currentStep >= step
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-300 text-gray-700 border-gray-300"
              }`}
            >
              {step}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-start space-x-4 mb-8">
          
          <div className="w-1/2 bg-white p-6 rounded-lg shadow-md border-2 border-gray-300">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Pickup Address
            </label>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-500 text-xl" />
              <input
                type="text"
                value={pickupAddress}
                onChange={(e) => setPickupAddress(e.target.value)}
                placeholder="Enter pickup address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          </div>

          <div className="w-1/2 bg-white p-6 rounded-lg shadow-md border-2 border-gray-300">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Dropoff Address
            </label>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-500 text-xl" />
              <input
                type="text"
                value={dropoffAddress}
                onChange={(e) => setDropoffAddress(e.target.value)}
                placeholder="Enter dropoff address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="w-full max-w-4xl h-96 rounded-lg overflow-hidden shadow-md border-2 border-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509413!2d144.95592531589435!3d-37.81720997975121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57750a5434b4351!2sFlinders%20St%20Station!5e0!3m2!1sen!2sus!4v1688495010673!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              title="Delivery Tracking Map"
              className="border-none"
            ></iframe>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={handleNext}
            className={`px-6 py-2 text-white rounded-lg shadow-md hover:bg-gray-700 border-2 ${
              isLoading ? "bg-gray-400 border-gray-400" : "bg-gray-600 border-gray-600"
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Next...</span>
              </div>
            ) : (
              "Next"
            )}
          </button>
          <button className="px-6 py-2 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 border-2 border-gray-600">
            <a href="contactus">Contact Support</a>
          </button>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="relative">
      <Sidebar />
      <TrackingSteps /> 
    </div>
  );
};

export default App;