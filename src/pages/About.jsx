import React from "react";

const About = () => {
  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "5000+", label: "Happy Customers" },
    { number: "3+", label: "Years of Experience" },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 ">
            About Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mb-4 text-justify">
            We are a passionate team dedicated to providing you with the best
            experiences and services. Our mission is to make your life better
            and easier.
          </p>
          <p className="text-gray-600 text-lg text-center max-w-2xl mb-8">
            Join us on this journey and explore the amazing world we have
            created for you.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
              >
                <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block w-full">
          <img
            src="https://images.unsplash.com/photo-1549082984-1323b94df9a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
            alt="About Us Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
