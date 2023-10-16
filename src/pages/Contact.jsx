import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 my-8 bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-rose-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-rose-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-rose-300"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="bg-rose-500 w-full text-white py-2 px-4 rounded hover:bg-rose-600 focus:outline-none focus:ring focus:ring-rose-300"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="md:w-1/2 p-4 h-fit">
        <img
          src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2666&q=80"
          alt="Contact Image"
          className="w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default Contact;
