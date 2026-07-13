import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Style.module.css';

const PrivacyPolicy = () => {
  return (
    <section className={Style.PrivacySec + " " + Style.servicesDetail }>
      <div className={Style.innerBanner}>
          <h1>Privacy Policy</h1>
      </div>
      <Container>
        <Row>
          <Col>
          <div className={Style.PrivacyBox}>
            <h1 className="mb-4">Privacy Policy</h1>

            <p>
              <strong>Last Updated:</strong> July 2026
            </p>

            <p>
              At <strong>CodeTrios</strong>, we respect your privacy and are
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, and safeguard your information
              when you use our website and services.
            </p>

            <h3>Information We Collect</h3>

            <h5>Personal Information</h5>

            <ul>
              <li>Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Company Name</li>
              <li>Project Details</li>
            </ul>

            <h5>Technical Information</h5>

            <ul>
              <li>IP Address</li>
              <li>Browser Information</li>
              <li>Device Type</li>
              <li>Operating System</li>
              <li>Website Usage Data</li>
            </ul>

            <h3>How We Use Your Information</h3>

            <ul>
              <li>Respond to your inquiries</li>
              <li>Deliver our services</li>
              <li>Improve website performance</li>
              <li>Provide customer support</li>
              <li>Send important updates</li>
              <li>Enhance website security</li>
            </ul>

            <h3>Cookies</h3>

            <p>
              We use cookies to improve your browsing experience, analyze traffic,
              and personalize content. You may disable cookies through your browser
              settings.
            </p>

            <h3>Third-Party Services</h3>

            <p>Our website may use trusted third-party services such as:</p>

            <ul>
              <li>Google Analytics</li>
              <li>Google Tag Manager</li>
              <li>Cloud Hosting Providers</li>
              <li>Email Service Providers</li>
            </ul>

            <h3>Data Security</h3>

            <p>
              We implement industry-standard security measures including SSL
              encryption, secure hosting, regular updates, and access controls to
              protect your information.
            </p>

            <h3>Information Sharing</h3>

            <p>
              We never sell your personal information. Information may only be
              shared when required by law or with trusted service providers
              assisting in delivering our services.
            </p>

            <h3>Your Rights</h3>

            <ul>
              <li>Access your personal information</li>
              <li>Request corrections</li>
              <li>Request deletion</li>
              <li>Withdraw consent where applicable</li>
            </ul>

          

            <h3>Changes to this Privacy Policy</h3>

            <p>
              We may update this Privacy Policy from time to time. Changes will be
              posted on this page with the updated effective date.
            </p>

            <h3>Contact Us</h3>

            <p>
              If you have any questions regarding this Privacy Policy, please
              contact us through our Contact Us page or chat with us on whatsapp.
            </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PrivacyPolicy; 