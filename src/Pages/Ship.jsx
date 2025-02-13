import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMotorcycle, 
  faCar, 
  faTruck, 
  faBox,
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

const Ship = () => {
  return (
    <div className="min-h-screen bg-gray-800 p-6 pl-64">
      <div className="bg-white w-full mb-11 mt-80 max-w-4xl border border-gray-300 shadow-lg rounded-lg p-7 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">We’re excited to serve you!</h2>
          <p className="text-gray-600 text-base font-normal">
            Fast and reliable pick-up and delivery service. Select the best vehicle for your items.
          </p>
        </div>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-medium text-gray-700">
            Please select the most suitable <br /> vehicle to pick up your item(s)
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="/pickup" className="flex flex-col items-center text-center border border-gray-200 shadow-md bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
            <FontAwesomeIcon icon={faMotorcycle} size="3x" className="text-blue-500 mb-4" />
            <h3 className="font-semibold text-lg text-gray-800">Motor Bike</h3>
            <p className="text-gray-600">Ideal for lightweight items: <br /> Documents, human hair, phones, etc.</p>
          </a>
          <a href="/pickup" className="flex flex-col items-center text-center border border-gray-200 shadow-md bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
            <FontAwesomeIcon icon={faCar} size="3x" className="text-green-500 mb-4" />
            <h3 className="font-semibold text-lg text-gray-800">Car</h3>
            <p className="text-gray-600">For items that fit in a car boot: <br /> Clothes, shoes, small appliances.</p>
          </a>
          <a href="/pickup" className="flex flex-col items-center text-center border border-gray-200 shadow-md bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
            <FontAwesomeIcon icon={faBox} size="3x" className="text-yellow-500 mb-4" />
            <h3 className="font-semibold text-lg text-gray-800">Mini Van</h3>
            <p className="text-gray-600">For larger items: <br /> Clothes, shoes, small fridges, etc.</p>
          </a>
          <a href="/pickup" className="flex flex-col items-center text-center border border-gray-200 shadow-md bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
            <FontAwesomeIcon icon={faTruck} size="3x" className="text-red-500 mb-4" />
            <h3 className="font-semibold text-lg text-gray-800">Truck</h3>
            <p className="text-gray-600">Perfect for large items: <br /> Furniture, office equipment, etc.</p>
          </a>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="relative">
      <Sidebar />
      <Ship />
    </div>
  );
};

export default App;
