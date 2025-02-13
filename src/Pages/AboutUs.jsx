import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <div className="container mx-auto py-12 px-6 md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold text-center text-white mt-14 mb-8">About Us</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">Our Mission</h2>
          <p className="text-lg text-white">
            At Global Delivery Solutions, our mission is to provide fast, reliable, and cost-effective international shipping services that connect people, businesses, and countries around the world. We aim to make global shipping seamless and accessible, ensuring that every parcel arrives at its destination securely and on time.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">Our Values</h2>
          <p className="text-lg text-white mb-6">
            Our values are at the core of everything we do. We believe in providing a service that reflects our commitment to excellence, transparency, and customer satisfaction. Here are the key principles that drive our business:
          </p>
          <ul className="list-disc pl-6 text-white space-y-4">
            <li><strong>Reliability:</strong> We understand the importance of timely deliveries and are committed to getting your packages to their destination on schedule.</li>
            <li><strong>Security:</strong> Your shipments are in safe hands. We use advanced tracking systems and secure packaging methods to ensure the safety of every parcel.</li>
            <li><strong>Customer-Centricity:</strong> Our customers come first. We provide personalized support to ensure a smooth shipping experience for individuals and businesses alike.</li>
            <li><strong>Global Reach:</strong> No matter where your parcel needs to go, we have the infrastructure to deliver it. We ship to over 200 countries worldwide.</li>
            <li><strong>Sustainability:</strong> We are committed to reducing our carbon footprint by implementing eco-friendly practices in our operations, including green packaging and optimizing delivery routes for efficiency.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">Our Story</h2>
          <p className="text-lg text-white">
            Founded in 2010, Global Delivery Solutions started as a small shipping company with a simple goal: to provide international delivery services that people could trust. Over the years, we've expanded our network and improved our services, continuously adapting to the evolving needs of global shipping. Today, we are proud to be one of the most trusted international delivery companies, with a customer base that spans across the globe.
          </p>
        </section>

        <section className="mb-16">
  <h2 className="text-3xl font-semibold text-white mb-8 text-center">
    Meet Our Team
  </h2>
  <p className="text-lg text-white mb-8 text-center">
    Our team is made up of passionate professionals dedicated to ensuring that
    every shipment is delivered with care. From customer service
    representatives to logistics experts, we work together to make
    international shipping as efficient and stress-free as possible.
  </p>
  <p className="text-lg text-white mb-12 text-center">
    With years of experience and a commitment to excellence, our team is here
    to ensure your delivery experience is smooth, from start to finish.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <div className="text-center">
      <img
        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
        alt="Team Member 1"
        className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold text-white">Alex Johnson</h3>
      <p className="text-sm text-gray-300">Logistics Manager</p>
    </div>
    <div className="text-center">
      <img
        src="https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww"
        alt="Team Member 2"
        className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold text-white">Sophia Lee</h3>
      <p className="text-sm text-gray-300">Customer Service Lead</p>
    </div>
    <div className="text-center">
      <img
        src="https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHww"
        alt="Team Member 3"
        className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold text-white">Jessica Rabbit</h3>
      <p className="text-sm text-gray-300">Shipping Coordinator</p>
    </div>
    <div className="text-center">
      <img
        src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
        alt="Team Member 4"
        className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold text-white">Michael Brown</h3>
      <p className="text-sm text-gray-300">Operations Specialist</p>
    </div>
  </div>
</section>


        <section className="bg-gray-200 p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Why Choose Global Delivery Solutions?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-4">
            <li><strong>Global Coverage:</strong> We deliver to over 200 countries, ensuring your shipments reach the farthest corners of the world.</li>
            <li><strong>Reliability & Speed:</strong> We offer fast, secure, and reliable delivery options, whether you're sending a small parcel or a large freight shipment.</li>
            <li><strong>24/7 Customer Support:</strong> Our dedicated support team is available around the clock to assist with any queries or concerns.</li>
            <li><strong>Competitive Pricing:</strong> Get the best rates for international shipping without compromising on service quality.</li>
            <li><strong>Advanced Tracking:</strong> Stay updated with real-time tracking and status notifications for peace of mind throughout the shipping process.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">Ready to Ship Globally?</h2>
          <p className="text-lg text-white mb-6">
            Whether you need to send a package across the street or across the world, we are here to make your international shipping experience as smooth as possible.
          </p>
          <a
            href="/contactus"
            className="px-6 py-3 bg-gray-700 text-white text-lg rounded-md hover:bg-gray-600 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FaPhoneAlt size={20} className="text-white" />
            Need Help
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
