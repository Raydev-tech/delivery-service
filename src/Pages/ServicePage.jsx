import React from "react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <div className="container mx-auto py-12 px-6 md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold text-center text-white mt-14 mb-8">Our Services</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">Reliable International Shipping</h2>
          <p className="text-lg text-white">
            At Global Delivery Solutions, we specialize in fast, secure, and cost-effective international shipping. Whether you're sending a parcel across the street or across the globe, we guarantee safe, timely, and reliable delivery to over 200 countries worldwide.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Express Delivery</h3>
            <p className="text-gray-700 mb-4">
              Need your package delivered fast? Our Express Delivery service is the perfect solution. With guaranteed delivery within 1-3 business days, we ensure your time-sensitive shipments arrive promptly.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Fast-track service for urgent deliveries</li>
              <li>Priority handling through the best carriers</li>
              <li>Available to over 150 countries</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Standard Shipping</h3>
            <p className="text-gray-700 mb-4">
              For less time-sensitive shipments, our Standard Shipping service offers a more affordable option without sacrificing reliability. Enjoy secure delivery to any international destination.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Reliable delivery within 7-10 business days</li>
              <li>Economical rates for larger packages</li>
              <li>Track your shipments in real-time</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Freight Services</h3>
            <p className="text-gray-700 mb-4">
              Our Freight Services cater to businesses or individuals who need to ship large or bulky items internationally. With our network of trusted partners, we handle heavy freight shipments with ease.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>For large and heavy shipments</li>
              <li>Air, sea, and land options available</li>
              <li>Competitive pricing based on volume</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Additional Services</h2>
          <p className="text-lg text-white mb-4">
            We offer a variety of additional services to ensure your shipments arrive safely and efficiently:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-white">
            <li>Tracking & Insurance: Track your shipment in real-time and ensure peace of mind with insurance coverage.</li>
            <li>Customs Handling: We handle all customs clearance requirements to make your international shipments hassle-free.</li>
            <li>Packaging Services: Secure packaging for all types of goods, ensuring safe transit.</li>
          </ul>
        </section>

        <section className="bg-gray-200 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Why Choose Global Delivery Solutions?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-4">
            <li>Global Coverage: We ship to over 200 countries worldwide.</li>
            <li>Reliability: On-time delivery with the best tracking technology.</li>
            <li>Affordable Pricing: Competitive rates to fit any budget.</li>
            <li>Customer Support: 24/7 support to assist with all your shipping needs.</li>
          </ul>
        </section>

        <section className="text-center mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ready to Ship?</h2>
          <p className="text-lg text-white mb-6">
            Whether you need express delivery, air shipping, or overseas services, we're here to assist with all your international shipping needs.
          </p>
          <a
            href="/contactus"
            className="px-6 py-3 bg-gray-700 text-white text-lg rounded-md hover:bg-gray-600 transition-all duration-300"
          >
            Contact Us for a Quote
          </a>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
