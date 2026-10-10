import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppButton = () => {
  const phoneNumber = "919311444685"; // replace with your number
  const message = "Hello I visited your website";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "90px",
    backgroundColor: "#25D366",
    color: "white",
    padding: "12px 18px",
    borderRadius: "50px",
    textDecoration: "none",
    zIndex: 999,
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyle}
    >
      <FaWhatsapp size={34} />
    </a>
  );
};

export default WhatsAppButton;
