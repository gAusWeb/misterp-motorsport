import React from "react";
import "./pre-header.scss";
const PreHeader: React.FC = () => {
  return (
    <div className="pre-header flex w-full gap-4">
      <div className="container mx-auto flex justify-end gap-4">
        <div className="social-links flex gap-2">
          <a href="https://www.facebook.com">
            <img src="/assets/images/icons/facebook.svg" alt="Facebook" />
          </a>
          {/* <a href="https://www.twitter.com">
            <img
              src="https://cdn.example.com/icons/twitter-icon.svg"
              alt="Twitter"
            />
          </a> */}
          <a href="https://www.linkedin.com">
            <img src="/assets/images/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com">
            <img
              src="/assets/images/icons/instagram-logo-svgrepo-com.svg"
              alt="Instagram"
            />
          </a>
        </div>

        <div className="phone-icon">
          <a href="tel:+1234567890" className="flex items-center gap-2">
            <img
              src="/assets/images/icons/phone3.png"
              alt="Mobile phone icon"
            />
            0414 859 125
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 1H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm-1 18H6V5h12v14z" />
            </svg> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PreHeader;
