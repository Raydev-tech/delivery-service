import React from "react";

const Overseas = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-6 md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold text-center text-white mt-12 mb-8">Overseas Shipping</h1>

        <section className="mb-16 flex items-center justify-between">
  
          <div className="w-full lg:w-1/2 pr-8">
            <h2 className="text-6xl font-bold text-white mb-10">What is Overshipping?</h2>
            <p className="text-2xl text-white mb-24">
              Overshipping refers to the process of sending large quantities or heavy bulk shipments across international borders. This service is designed to handle the logistics and transportation of sizable goods, ensuring they arrive at their destination safely and on time. Whether you're a business shipping bulk products or need to move oversized equipment, we have the tools and expertise to handle your overshipping needs.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src="https://i.pinimg.com/474x/69/14/60/69146054f1cd6ae05e8c8d75efae3ce0.jpg"
              alt="Overshipping"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </section>


        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">How Our Overshipping Works</h2>
          <p className="text-lg text-white">
            Our overshipping services are designed for clients with specific shipping needs that go beyond standard parcel shipping. Here’s how it works:
          </p>
          <ul className="list-disc pl-6 text-white space-y-4">
            <li><strong>Step 1:</strong> <strong>Request a Quote:</strong> Start by providing us with the details of your shipment, including size, weight, destination, and delivery timeframe. Our team will quickly provide a competitive quote tailored to your needs.</li>
            <li><strong>Step 2:</strong> <strong>Preparation and Packaging:</strong> Once the quote is confirmed, our team ensures that your goods are properly packed and ready for transportation. We use industry-standard packaging to ensure safe and secure delivery.</li>
            <li><strong>Step 3:</strong> <strong>International Shipping:</strong> Your goods are shipped via the most efficient and reliable international delivery routes. Our network ensures that large shipments are delivered to over 200 countries around the world.</li>
            <li><strong>Step 4:</strong> <strong>Tracking and Delivery:</strong> Throughout the journey, we provide real-time tracking so you can monitor the status of your shipment. Once it reaches its destination, we ensure timely and safe delivery to the designated address.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">Why Choose Our Overshipping Services?</h2>
          <ul className="list-disc pl-6 text-white space-y-4">
            <li><strong>Global Reach:</strong> We have the capability to handle large shipments and send them to over 200 countries worldwide.</li>
            <li><strong>Speed and Reliability:</strong> Our overshipping services prioritize fast delivery times and reliable transportation, ensuring your bulk shipments arrive safely and on time.</li>
            <li><strong>Expert Packaging:</strong> Our experienced team ensures that all bulk and oversized shipments are packed according to international standards to prevent damage during transit.</li>
            <li><strong>Competitive Pricing:</strong> We offer the best rates for international overshipping, making it a cost-effective solution for businesses and individuals alike.</li>
            <li><strong>Customs Clearance Assistance:</strong> We handle all customs requirements to ensure smooth clearance, reducing potential delays at borders.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">Overshipping Options</h2>
          <p className="text-lg text-white">
            We offer a variety of overshipping options to accommodate different types of shipments, including:
          </p>
          <ul className="list-disc pl-6 text-white space-y-4">
            <li><strong>Standard Overshipping:</strong> For shipments that do not require expedited delivery. Ideal for large or heavy shipments that have flexible delivery timelines.</li>
            <li><strong>Express Overshipping:</strong> For urgent bulk deliveries. We prioritize these shipments to ensure the fastest possible delivery to any destination.</li>
            <li><strong>Freight Shipping:</strong> Designed for extremely large or heavy shipments, this service provides specialized logistics and transportation for freight-sized shipments.</li>
            <li><strong>Temperature-Controlled Shipping:</strong> For sensitive items that require a controlled environment during transport, such as food or pharmaceuticals.</li>
          </ul>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">Ready to Ship Your Oversized Goods?</h2>
          <p className="text-lg text-white mb-6">
            Whether you’re shipping large equipment or bulk products, we’re here to help with your overshipping needs. Our experienced team and reliable delivery network ensure that your shipments will arrive safely and on time, no matter the size.
          </p>
          <a
            href="/overseasquote"
            className="px-6 py-3 bg-gray-700 text-white text-lg rounded-md hover:bg-gray-600 transition-all duration-300"
          >
            Request a Quote
          </a>
        </section>
      </div>
    </div>
  );
};

export default Overseas;
