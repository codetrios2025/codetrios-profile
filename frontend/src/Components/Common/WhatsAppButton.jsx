import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "919311444685"; // replace with your number
  const message = "Hello I visited your website";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#25D366",
    color: "white",
    padding: "12px 18px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
    zIndex: 999,
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyle}
    >
      Chat on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
