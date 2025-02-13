import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle, FaShippingFast, FaClock, FaExclamationCircle } from 'react-icons/fa';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('history');
  const user = {
    name: 'User',
    email: 'user@example.com',
    phone: '+1234567890',
    transactions: [
      {
        id: 1,
        shipmentType: 'Document',
        destination: 'USA',
        pickupAddress: '123 Main St, New York, NY',
        status: 'Shipped',
        date: '2025-01-10',
      },
      {
        id: 2,
        shipmentType: 'Package',
        destination: 'Germany',
        pickupAddress: '456 Maple Ave, Los Angeles, CA',
        status: 'Delivered',
        date: '2025-01-12',
      },
      {
        id: 3,
        shipmentType: 'Document',
        destination: 'Spain',
        pickupAddress: '789 Oak Dr, Chicago, IL',
        status: 'Pending',
        date: '2025-01-12',
      },
      {
        id: 4,
        shipmentType: 'Freight',
        destination: 'France',
        pickupAddress: '101 Pine Ln, Dallas, TX',
        status: 'In Transit',
        date: '2025-01-15',
      },
      {
        id: 5,
        shipmentType: 'Package',
        destination: 'UK',
        pickupAddress: '202 Birch Rd, Miami, FL',
        status: 'Delivered',
        date: '2025-01-18',
      },
    ],
  };

  const handleLogout = () => {
    toast.success('You have logged out successfully!', {
      position: 'top-center',
      duration: 4000,
    });
    window.location.href = '/';
  };

  const renderStatusIcon = (status) => {
    switch (status) {
      case 'Delivered':
        return <FaCheckCircle className="text-green-400 mr-2" />;
      case 'Shipped':
        return <FaShippingFast className="text-yellow-400 mr-2" />;
      case 'Pending':
        return <FaClock className="text-gray-400 mr-2" />;
      case 'In Transit':
        return <FaExclamationCircle className="text-blue-400 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-6 md:px-16 lg:px-24">
        <div className="mt-36 flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
          
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-7xl p-6 bg-gray-900 rounded-lg shadow-lg border-2 border-gray-700">
            <div className="flex">
              <div className="w-1/4 bg-gray-900 p-4 rounded-lg shadow-lg">
                <nav>
                  <ul>
                    <li>
                      <button
                        onClick={() => setActiveTab('history')}
                        className={`block w-full text-left lg:px-4 py-2 mt-2 rounded-md ${
                          activeTab === 'history' ? 'bg-gray-700' : 'hover:bg-gray-700'
                        }`}
                      >
                        Order History
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab('profile')}
                        className={`block w-full text-left px-4 py-2 mt-2 rounded-md ${
                          activeTab === 'profile' ? 'bg-gray-700' : 'hover:bg-gray-700'
                        }`}
                      >
                        Profile
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab('settings')}
                        className={`block w-full text-left px-4 py-2 mt-2 rounded-md ${
                          activeTab === 'settings' ? 'bg-gray-700' : 'hover:bg-gray-700'
                        }`}
                      >
                        Settings
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="w-3/4 ml-6">
                {activeTab === 'history' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Order History</h2>
                    <table className="min-w-full bg-gray-700 rounded-lg">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-left text-gray-300">ID</th>
                          <th className="px-4 py-2 text-left text-gray-300">Shipment Type</th>
                          <th className="px-4 py-2 text-left text-gray-300">Destination</th>
                          <th className="px-4 py-2 text-left text-gray-300">Pickup Address</th>
                          <th className="px-4 py-2 text-left text-gray-300">Status</th>
                          <th className="px-4 py-2 text-left text-gray-300">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {user.transactions.map((transaction) => (
                          <tr key={transaction.id} className="bg-gray-800 hover:bg-gray-700">
                            <td className="px-4 py-2">{transaction.id}</td>
                            <td className="px-4 py-2">{transaction.shipmentType}</td>
                            <td className="px-4 py-2">{transaction.destination}</td>
                            <td className="px-4 py-2">{transaction.pickupAddress}</td>
                            <td className="px-4 py-2">
                              {renderStatusIcon(transaction.status)}
                              {transaction.status}
                            </td>
                            <td className="px-4 py-2">{transaction.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'profile' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <div>
                        <strong className="text-gray-400">Name:</strong> {user.name}
                      </div>
                      <div>
                        <strong className="text-gray-400">Email:</strong> {user.email}
                      </div>
                      <div>
                        <strong className="text-gray-400">Phone:</strong> {user.phone}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Settings</h2>
                    <div className="bg-gray-700 p-6 rounded-lg">
                      <p className="text-gray-400">
                        This section will allow users to manage their settings like payment preferences, shipping preferences, etc.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Dashboard;
