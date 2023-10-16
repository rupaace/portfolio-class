import React from "react";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="bg-gray-200 px-6 py-4">
        <i className={`${icon} text-4xl text-gray-600`} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
