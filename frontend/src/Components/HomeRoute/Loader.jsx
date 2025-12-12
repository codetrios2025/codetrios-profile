import React, { useEffect, useState } from "react";
import icon from '../../assets/images/icon.png'
import logo from '../../assets/images/logo_loader.png'

export default function Loader() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader-wrapper">
      <div>
      {/* ICON (starts visible → fades out) */}
      <img
        src={icon}
        alt="icon"
        className={`loader-icon ${showLogo ? "hide-icon" : ""}`}
      />

      {/* LOGO (starts hidden → fades in) */}
      <img
        src={logo}
        alt="logo"
        className="loader-logo"
        style={{ opacity: showLogo ? 1 : 0 }}
      />
</div>
    </div>
  );
}
