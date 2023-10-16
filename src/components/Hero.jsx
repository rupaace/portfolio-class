import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-gray-50 flex  justify-center items-center  py-16 h-[60vh]">
      <div className="container mx-auto flex flex-col justify-center items-center relative z-10">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>

        <p className="text-gray-600 text-lg text-center max-w-2xl mb-8">
          Join us on this journey and explore the amazing world we have created
          for you.
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full">
          Learn More
        </button>
      </div>

      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        alt="About Us Image"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default Hero;
