import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faGlobe,
  faShoppingCart,
  faPlaneDeparture,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const FeaturesSection = () => {
  const features = [
    {
      icon: faTruckFast,
      href: "/ship",
      title: "Ship Now",
      description: "Request Pick Up, Delivery or Xpress Drop Off",
    },
    {
      icon: faGlobe,
      href: "/overseas",
      title: "Overseas Shipping",
      description:
        "Ship from UK, USA, Canada, or China to Nigeria and Export to 230 locations worldwide",
    },
    {
      icon: faPlaneDeparture,
      href: "/airshipping",
      title: "Air Shipping",
      description: "Fast and secure air freight for your urgent shipments",
    },
    {
      icon: faShoppingCart,
      href: "/personal",
      title: "Personal Shopper",
      description: "We shop quality products for you & ship to your doorstep",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h1 className="mb-4 text-center text-4xl font-bold font-serif fade-in-down">
          Why You Choose Us?
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          We are fast and Reliable.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white shadow-lg rounded-md text-center transform transition duration-500 ease-in-out opacity-0 animate-fadeIn delay-[${index * 200}ms]"
            >
              <div className="text-gray-800 text-4xl mb-4">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
              <a
                href={feature.href}
                className="mt-4 text-blue-600 hover:underline text-sm font-medium"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LogisticsSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-6">
        <div className="relative flex-shrink-0 w-full lg:w-1/2">
          <div className="bg-white p-9 rounded-lg shadow-lg">
            <img
              src="https://i.pinimg.com/236x/bb/f5/80/bbf58078cb1357a513c87c0c12b5d8e6.jpg"
              alt="Logistics Service"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Seamless Logistics Services
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Experience fast and reliable loading and transport services,
              tailored to meet your logistics needs. Our team ensures
              efficiency, so your shipments arrive on time, every time.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="text-blue-600 text-5xl">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div>
              <a
                href="/login"
                className="mt-4 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Get to Know Us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const testimonials = [
    {
      name: "John Smith",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      feedback:
        "Fast, reliable, and cost-effective! I’ve tried many delivery services, They’re professional, quick, and trustworthy!",
      country: "United States",
    },
    {
      name: "Hiroshi Tanaka",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      feedback:
        "Their attention to detail and timely delivery made a big difference for my business. Highly efficient team!",
      country: "Japan",
    },
    {
      name: "Sofia Rossi",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      feedback:
        "Fantastic service! My packages were handled with care, and the delivery was incredibly fast. A+ experience.",
      country: "Italy",
    },
    {
      name: "Liam O'Connor",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      feedback:
        "I’ve never had an issue with their service. Everything is always on time and well-organized. Truly exceptional!",
      country: "United Kingdom",
    },
];

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Our Client’s Testimonials
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Over 500+ Customers Have Similar Experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-medium text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
              <h4 className="text-xl font-medium mt-2 text-gray-800">{testimonial.country}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AirShippingSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
        <div className="relative flex-shrink-0 w-full lg:w-1/2">
          <div className="ml-56">
            <img
              src="data:image/jpeg;base64,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"
              alt="Global Delivery Services"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Global Delivery and Air Cargo Services
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            We specialize in international air cargo transfer, ensuring fast and reliable shipping solutions worldwide. Whether for personal or business needs, our services cover every aspect of air freight logistics.
          </p>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Our Services?</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Efficient and Timely Deliveries</li>
              <li>Comprehensive Documentation Handling</li>
              <li>Secure and Reliable Transportation</li>
              <li>Worldwide Coverage</li>
            </ul>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="text-blue-600 text-5xl">
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <div>
              <a
                href="/airshipping"
                className="mt-4 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Learn More About Our Services →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const HomePage = () => {
  return (
    <>
      <div
        className="bg-no-repeat relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(https://i.pinimg.com/736x/53/ca/f6/53caf697825df7b9c26e7349a8a85308.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 p-8 md:px-16 lg:px-24 text-white flex flex-col justify-center h-full">
          <h1 className="mt-5 text-2xl md:text-6xl lg:text-5xl font-bold leading-tight">
            We Make Transport <br /> Fast and Safe
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-6">
            We are on the road to carry your dreams.
          </p>
          <div className="mt-8">
            <a
              href="/login"
              className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>
      <FeaturesSection />
      <LogisticsSection />
      <TestimonialsSection />
      <AirShippingSection />
    </>
  );
};

export default HomePage;
