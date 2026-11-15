import React from "react";
import "./Footer.css";

const Footer = ({ navigations }) => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="brand">
          <h2>
            Buds Paradise
          </h2>
          <span>Sound Better. Live Better.</span>
        </div>

        <ul>
          {navigations.map((item) => (
            <li key={item.name}>
              <a
                href={item.url}
                className="footer-links"
                onClick={() => setActive(item.name)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="social-medias">
          <ul>
            <li>
              <a href="#" className="youtube">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#" className="instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copy-rights">
        <p>© 2026 Buds Paradise. All rights resolved.</p>
      </div>
    </div>
  );
};

export default Footer;
