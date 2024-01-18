import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">O&L<span>.</span>Café</h1>
        <p className="footer__description">
          The best place to eat & <br />
          work in.
        </p>

        <div className="footer__content grid">
          <div className="footer__data">
            <h2 className="footer__subtitle">Address</h2>
            <p className="footer__information">
              Street no.19 Agadir <br />
              Morocco. 8000
            </p>
          </div>
          <div className="footer__data">
            <h2 className="footer__subtitle">Contact</h2>
            <p className="footer__information">
              +212687654321 <br />
              OandL@gmail.com
            </p>
          </div>
          <div className="footer__data">
            <h2 className="footer__subtitle">Office</h2>
            <p className="footer__information">
              Monday - Saturday <br />
              9AM - 10PM
            </p>
          </div>
          <div className="footer__data">
            <p className="footer__newsletter-description">
              Subscribe to our newsletter
            </p>

            <div className="footer__newsletter">
              <input
                type="email"
                placeholder="Your email address"
                className="footer__input"
              />
              <button className="footer__button">
                <i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="footer__group">
          <ul className="footer__social">
            <a href="#" target="_blank" className="footer__social-link">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" target="_blank" className="footer__social-link">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" target="_blank" className="footer__social-link">
              <i className="bx bxl-tiktok"></i>
            </a>
          </ul>

          <span className="footer__copy"> &#169; o&l. All rights reserved </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
