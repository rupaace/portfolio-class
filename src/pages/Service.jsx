import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "./ServiceData";

const Service = () => {
  return (
    <>
      <h1 className="text-center p-4 text-3xl font-semibold">Our Services</h1>
      <div className="flex flex-row justify-center flex-wrap">
        {services.map((service, index) => (
          <div key={index} className="m-4">
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
