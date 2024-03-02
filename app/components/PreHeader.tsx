import React from "react";
import "./pre-header.scss";
const PreHeader: React.FC = () => {
  return (
    <div className="pre-header relative flex w-full gap-4">
      <div className="container mx-4 flex justify-end gap-4">
        <div className="social-links flex gap-2">
          <a href="https://www.facebook.com">
            <img src="/assets/images/icons/facebook.svg" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com">
            <img src="/assets/images/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com">
            <img
              src="/assets/images/icons/instagram-logo-svgrepo-com.svg"
              alt="Instagram"
            />
          </a>
          <a href="tel:+1234567890" className="flex items-center gap-2">
            0414 859 125
          </a>
        </div>
      </div>
    </div>
  );
};

export default PreHeader;
