import React, { useEffect } from "react";
import OurServices from "../components/OurServices";

const Services = () => {

  useEffect(() => {
    const serviceId = window.location.hash.replace("#", "");

    if (serviceId) {
      setTimeout(() => {
        const card = document.getElementById(serviceId);

        if (card) {
          card.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 300);
    }

  }, []);


  return <OurServices detailed={true} />;
};

export default Services;