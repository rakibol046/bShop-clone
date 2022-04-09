import React from "react";
import "./footer.scss";
import MediaIcon from "./MediaIcon";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <section>
          <h3>Contact Us</h3>
          <ul>
            <li>
              <strong>Address:</strong> 56 King Street, New York
            </li>

            <li>
              <strong>Email:</strong> support@bshop.com
            </li>

            <li>
              <strong>Phone:</strong> +1 964 123 456789
            </li>
          </ul>
          <div class="social-media">
            <MediaIcon />
          </div>
        </section>
        <section>
          <h3 class="widget-title">Quick links</h3>
          <ul class="widget-list">
            <li>
              <a
                target="_self"
                href="https://bshopen.themeposh.net/page/44/privacy-policy"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                target="_self"
                href="https://bshopen.themeposh.net/page/45/terms-and-conditions"
              >
                Terms and Conditions
              </a>
            </li>
            <li>
              <a
                target="_self"
                href="https://bshopen.themeposh.net/page/46/purchasing-policy"
              >
                Purchasing Policy
              </a>
            </li>
            <li>
              <a
                target="_self"
                href="https://bshopen.themeposh.net/page/47/cookie-policy"
              >
                Cookie Policy
              </a>
            </li>{" "}
          </ul>
        </section>
        <section>
          <h3 class="widget-title">Company</h3>
          <ul class="widget-list">
            <li>
              <a
                target="_self"
                href="https://bshopen.themeposh.net/page/48/about-us"
              >
                About us
              </a>
            </li>
            <li>
              <a
                target="_self"
                href="https://bshopen.themeposh.net/page/49/career"
              >
                Career
              </a>
            </li>
            <li>
              <a
                target="_self"
                href="https://bshopen.themeposh.net/page/50/affiliate"
              >
                Affiliate
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=8801750155902&amp;text=Hello+I+have+a+query&amp;app_absent=0"
              >
                Contact us
              </a>
            </li>{" "}
          </ul>
        </section>
        <section>
          <h3 class="widget-title">Subscribe our newsletter</h3>
          <p>
            Subscribe to the mailing list to receive updates on special offers,
            new arrivals and our promotions.
          </p>
          <div class="newsletter-form">
            <input
              name="subscribe_email"
              id="subscribe_email"
              type="email"
              placeholder="Enter your email address"
            />
            <button>SUBMIT</button>
            <div class="subscribe_msg mt5"></div>
          </div>
        </section>
      </footer>
      <div class="copy-right-container">
        <div class="copy-right">
          Copyright &copy; 2021. All rights reserved by <a href="#">bShop</a>{" "}
        </div>

        <div class="payment-method">
          <img
            src="https://bshopen.themeposh.net/public/media/16112021165416-payment.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
