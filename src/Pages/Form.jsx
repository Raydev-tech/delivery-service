import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserAlt, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faShip,  
  faGlobe, 
  faReceipt, 
  faPlaneDeparture,
  faShoppingBag,
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
          <FontAwesomeIcon icon={faReceipt} className="text-orange-500" />
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


const SenderInfo = () => {
  const [senderName, setSenderName] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [receiverAddress, setreceiverAddress] = useState("")
  const [currentStep, setCurrentStep] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleNext = () => {
    if (senderName && senderPhone && receiverName && receiverPhone && addressLine1 && receiverAddress) {
      setIsLoading(true);
      if (!navigator.onLine){
        console.log("user is offline", formData)
        toast.error("You are currently offline")
        return;
      };
      setTimeout(() => {
        setCurrentStep((prevStep) => prevStep + 1);
        navigate("/tracking");
        setIsLoading(false);
      }, 2000);
    } else {
      toast.error("Please fill in all required fields before proceeding.");
    }
  };

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <h1 className="mt-52 text-center text-white text-4xl font-bold mb-8">
        Shipment detail
      </h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg border-2 border-gray-300">
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
        <div className="mb-8 p-6 border border-gray-300 rounded-lg shadow-md bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sender's Info</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-500 text-xl" />
              <input
                type="text"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                placeholder="Address Line 1"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          
            <div className="flex items-center space-x-2">
              <FaUserAlt className="text-gray-500 text-xl" />
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Sender's Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-gray-500 text-xl" />
              <div className="flex items-center w-full">
                <span className="px-3 py-2 bg-gray-200 border border-gray-300 rounded-l-lg">+234</span>
                <input
                  type="text"
                  value={senderPhone}
                  onChange={(e) => setSenderPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-r-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 p-6 border border-gray-300 rounded-lg shadow-md bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Receiver's Info</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-500 text-xl" />
              <input
                type="text"
                value={receiverAddress}
                onChange={(e) => setreceiverAddress(e.target.value)}
                placeholder="Address Line"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          
            <div className="flex items-center space-x-2">
              <FaUserAlt className="text-gray-500 text-xl" />
              <input
                type="text"
                value={receiverName}
                onChange={(e) => setReceiverName(e.target.value)}
                placeholder="Receiver's Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-gray-500 text-xl" />
              <div className="flex items-center w-full">
                <span className="px-3 py-2 bg-gray-200 border border-gray-300 rounded-l-lg">+234</span>
                <input
                  type="text"
                  value={receiverPhone}
                  onChange={(e) => setReceiverPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-r-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
            </div>
    
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleNext}
            className={`px-8 py-3 text-white font-bold rounded-lg shadow-md hover:bg-gray-700 border-2 ${
              isLoading ? "bg-gray-400 border-gray-400" : "bg-gray-600 border-gray-600"
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing...</span>
              </div>
            ) : (
              "Next"
            )}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

const App = () => {
  return (
    <div className="relative">
      <Sidebar />
      <SenderInfo /> 
    </div>
  );
};

export default App;
