import React, { useState, useEffect } from "react";
import Style from "../CSS/Style.module.css";
import { Link } from "react-router-dom";
//Icon

//Components

const ThankyouPage = () => {
  useEffect(() => {
    // Prevent duplicate conversion tracking on refresh
    const conversionTracked = sessionStorage.getItem(
      "contact_conversion_tracked",
    );

    if (!conversionTracked && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-18425023725",
        value: 1.0,
        currency: "INR",
      });

      sessionStorage.setItem("contact_conversion_tracked", "true");
    }
  }, []);

  return (
    <>
      <div className={Style.innerPage}>
        <div className={Style.thanksPage}>
          <h1>Thank You for your interest!</h1>
          <p>
            We have received your information and someone from our team will be
            in touch with you shortly.
          </p>
          <Link to="/">Back to home</Link>
        </div>
      </div>
    </>
  );
};

export default ThankyouPage;
