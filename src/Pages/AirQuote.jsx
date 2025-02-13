import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShip,
  faGlobe,
  faPlaneDeparture,
  faShoppingBag,
  faDashboard,
} from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

const Sidebar = () => {
  return (
    <div className="top-48 ml-7 w-64 bg-white p-4 absolute rounded-lg border border-gray-300">
      <nav className="space-y-4">
        <a href="/ship" className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition">
          <FontAwesomeIcon icon={faShip} className="text-blue-500" />
          <span>Ship Now</span>
        </a>
        <a href="/overseas" className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition">
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

const AirQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    shipmentType: "",
    weight: "",
    // dimensions: "",
    pickupState: "",
    destination: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormSubmitted(true);
    if (!navigator.onLine){
      console.log("user is offline", formData)
      toast.error("You are currently offline")
      return;
    };

    console.log("Quote Request Submitted", formData);
    toast.success("Your quote request has been submitted successfully!", {
      position: "top-center",
      duration: 4000,
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      shipmentType: "",
      weight: "",
      // dimensions: "",
      pickupState: "",
      destination: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-6 md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold text-center text-white mt-56 ml-36 mb-4">
          Request an Air Shipping Quote
        </h1>

        {formSubmitted && (
          <div className="bg-green-600 p-6 rounded-md text-center text-lg text-white mb-8">
            <h2 className="font-semibold">Your quote request has been submitted successfully!</h2>
            <p>Our team will get back to you with the best possible quote soon.</p>
          </div>
        )}

        <div className="ml-72 max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1">
                <label className="block text-lg font-semibold text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="block w-full rounded-md border px-3 py-2 shadow-sm border-gray-300 placeholder-gray-400 text-gray-800"
                  required
                />
              </div>

              <div className="col-span-1">
                <label className="block text-lg font-semibold text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="block w-full rounded-md border px-3 py-2 shadow-sm border-gray-300 placeholder-gray-400 text-gray-800"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1">
                <label className="block text-lg font-semibold text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="block w-full rounded-md border px-3 py-2 shadow-sm border-gray-300 placeholder-gray-400 text-gray-800"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-lg font-semibold text-gray-700">Shipment Type</label>
                <select
                  name="shipmentType"
                  value={formData.shipmentType}
                  onChange={handleChange}
                  className="block w-full rounded-md border px-3 py-2 shadow-sm border-gray-300 text-gray-800"
                  required
                >
                  <option value="">Select Shipment Type</option>
                  <option value="document">Document</option>
                  <option value="package">Package</option>
                  <option value="freight">Freight</option>
                  <option value="oversized">Oversized Goods</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="Enter weight in kg"
                className="block w-full rounded-md border px-3 py-2 shadow-sm border-gray-300 placeholder-gray-400 text-gray-800"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700">Pickup State</label>
              <select
                name="pickupState"
                value={formData.pickupState}
                onChange={handleChange}
                className="block w-full rounded-md border px-3 py-2 shadow-sm border-gray-300 text-gray-800"
                required
              >
                <option value="">Select State</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
                <option value="USA">United State</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700">Destination Country</label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="block w-full rounded-md border px-3 py-2 shadow-sm border-gray-300 text-gray-800"
                required
              >
                <option value="">Select Country</option>
                <option value="USA">United States</option>
                <option value="Germany">Germany</option>
                <option value="UK">United Kingdom</option>
                <option value="France">France</option>
              </select>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gray-800 text-white text-lg rounded-md hover:bg-gray-700 transition-all duration-300"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
        <div id="toast-container" />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="relative">
      <Sidebar />
      <AirQuote />
    </div>
  );
};

export default App;
