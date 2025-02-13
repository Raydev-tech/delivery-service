import React from "react";

const AirShipping = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-6 md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold text-center text-white mt-12 mb-8">International Air Shipping</h1>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-white mb-4">What is Air Shipping?</h2>
          <p className="font-medium text-2xl text-white mb-4">
            Air shipping is a fast, reliable, and secure way to transport goods across long distances. Whether you're shipping
            products internationally or need to send urgent documents, air freight is the preferred solution for time-sensitive deliveries.
            Our international air shipping services offer flexible options for businesses and individuals alike.
          </p>
        </section>

        <section className="mb-16 flex items-center justify-between">
          <div className="w-full lg:w-1/2 pr-8">
            <h2 className="text-3xl font-semibold text-white mb-4">Why Choose Air Shipping?</h2>
            <p className="text-lg text-white mb-4">
              Air shipping ensures that your goods arrive faster compared to other transportation methods. It's ideal for time-sensitive deliveries, 
              valuable cargo, and international shipments that need to be expedited. Whether it's electronics, perishable goods, or industrial parts, 
              we offer tailored air freight solutions for your specific needs.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://i.pinimg.com/736x/96/c0/f8/96c0f8f67282a886fa9680e64044684a.jpg"
              alt="Air Shipping"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">How Our Air Shipping Works</h2>
          <p className="text-lg text-white mb-4">
            We provide a streamlined process for shipping your goods via air, from start to finish. Here’s how it works:
          </p>
          <ul className="list-disc pl-6 text-white space-y-4">
            <li><strong>Step 1:</strong> Request a Quote - Contact us with the details of your shipment and receive a competitive quote.</li>
            <li><strong>Step 2:</strong> Shipment Preparation - We handle the packing and preparation of your goods, ensuring they’re ready for safe air transport.</li>
            <li><strong>Step 3:</strong> Air Freight Shipping - Your cargo is shipped via air to its destination, using the most reliable carriers and routes.</li>
            <li><strong>Step 4:</strong> Delivery and Tracking - We provide real-time tracking and ensure your goods are delivered safely and on time.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">Benefits of Air Shipping</h2>
          <ul className="list-disc pl-6 text-white space-y-4">
            <li><strong>Speed:</strong> Air shipping is the fastest option for international delivery, ideal for urgent shipments.</li>
            <li><strong>Security:</strong> With air shipping, your cargo is handled with the highest security standards to prevent damage or loss.</li>
            <li><strong>Global Reach:</strong> Air shipping services reach virtually every part of the world, making it perfect for international delivery.</li>
            <li><strong>Trackability:</strong> Real-time tracking ensures you can monitor your shipment at every stage of its journey.</li>
            <li><strong>Flexibility:</strong> Air shipping can accommodate a wide variety of goods, from small packages to large freight shipments.</li>
          </ul>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">Ready to Ship With Us?</h2>
          <p className="text-lg text-white mb-6">
            Whether you need to ship a small package or large freight, our air shipping services are tailored to meet your needs. Let us help you get your goods to their destination quickly and safely.
          </p>
          <a
            href="/airquote"
            className="px-6 py-3 bg-gray-700 text-white text-lg rounded-md hover:bg-gray-600 transition-all duration-300"
          >
            Request a Quote
          </a>
        </section>
      </div>
    </div>
  );
};

export default AirShipping;
