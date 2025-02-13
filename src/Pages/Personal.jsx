import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faShip, 
  faGlobe, 
  faPlaneDeparture, 
  faShoppingBag,
  faDashboard
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="top-44 ml-7 w-64 bg-white p-4 absolute rounded-lg border border-gray-300">
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

const Personal = () => {
  const [formData, setFormData] = useState({
    productLink: '',
    itemName: '',
    quantity: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.productLink.trim()) newErrors.productLink = 'Product Link is required.';
    if (!formData.itemName.trim()) newErrors.itemName = 'Item Name is required.';
    if (!formData.quantity.trim()) newErrors.quantity = 'Quantity must be a `number` type.';
    if (!formData.description.trim()) newErrors.description = 'Description is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    toast.success('Form submitted successfully!');
    console.log('Form Data:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="mt-60 w-full max-w-md bg-white rounded-lg shadow-md p-7 space-y-8">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Personal Shopping</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="productLink" className="block text-sm font-medium text-gray-700">
              Paste Product Link
            </label>
            <input
              type="url"
              id="productLink"
              name="productLink"
              value={formData.productLink}
              onChange={handleChange}
              placeholder="Paste Link"
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm ${errors.productLink ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.productLink && <p className="text-red-500 text-sm mt-1">{errors.productLink}</p>}
          </div>

          <div>
            <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">
              Item Name
            </label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              placeholder="e.g., A brown Nike shoe"
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm ${errors.itemName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.itemName && <p className="text-red-500 text-sm mt-1">{errors.itemName}</p>}
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Quantity"
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm ${errors.quantity ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="e.g., Color, texture, fabric"
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-md shadow hover:bg-gray-900 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="relative">
      <Sidebar />
      <Personal />
    </div>
  );
};

export default App;
