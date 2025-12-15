import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from "../CSS/Style.module.css";
import contactImage from "../../assets/images/contact_img.webp";

import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
// import constants from "../../servicessss/constants";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const recaptchaRef = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    company: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation function
  const validate = () => {
    let temp = {};

    if (!formData.firstname.trim()) temp.firstname = "First name is required";
    if (!formData.lastname.trim()) temp.lastname = "Last name is required";
    if (!formData.company.trim()) temp.company = "Company name is required";
    if (!formData.email.trim()) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      temp.email = "Enter valid email";

    if (!formData.mobile.trim()) temp.mobile = "Mobile is required";
    else if (!/^[0-9]{10}$/.test(formData.mobile))
      temp.mobile = "Enter valid 10-digit mobile";

    if (!formData.message.trim())
      temp.message = "Please enter your requirement";

    if (!captchaToken) temp.captcha = "Please verify captcha";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  //Submit form
  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    setApiMessage("");

    try {
      const res = await axios.post(
        "https://www.codetrios.com/api/submit-contact.php",
        {
          firstname: formData.firstname,
          lastname: formData.lastname,
          company: formData.company,
          mobile: formData.mobile,
          email: formData.email,
          message: formData.message,
          captcha: captchaToken,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      setApiMessage("Your enquiry has been submitted successfully.");
      setFormData({
        firstname: "",
        lastname: "",
        company: "",
        mobile: "",
        email: "",
        message: "",
      });

      recaptchaRef.current.reset();
      setCaptchaToken("");
    } catch (err) {
      console.error(err);
      setApiMessage(
        err?.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={Style.commonPading}>
      <Container>
        <Row>
          <Col>
            <div className={Style.contactFomr}>
              <div className={Style.contactImg}>
                <img src={contactImage} />
              </div>
              <div className={Style.detail}>
                <h2 className={Style.title} data-aos="fade-up">
                  Get in touch
                </h2>
                <div
                  className={Style.fomrStyle}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className={Style.inputFlex}>
                    <div className={Style.group}>
                      <label>First Name</label>
                      <input
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                      />
                      {errors.firstname && (
                        <p className="error-text">{errors.firstname}</p>
                      )}
                    </div>
                    <div className={Style.group}>
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                      />
                      {errors.lastname && (
                        <p className="error-text">{errors.lastname}</p>
                      )}
                    </div>
                  </div>
                  <div className={Style.inputFlex}>
                    <div className={Style.group}>
                      <label>Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                      {errors.company && (
                        <p className="error-text">{errors.company}</p>
                      )}
                    </div>
                    <div className={Style.group}>
                      <label>Mobile</label>
                      <input
                        type="number"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                      {errors.mobile && (
                        <p className="error-text">{errors.mobile}</p>
                      )}
                    </div>
                  </div>
                  <div className={Style.inputFlex}>
                    <div className={Style.group}>
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <p className="error-text">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className={Style.inputFlex}>
                    <div className={Style.group}>
                      <label>Your Requirement?</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && (
                        <p className="error-text">{errors.message}</p>
                      )}
                    </div>
                  </div>
                  <div className={Style.inputFlex}>
                    <div className={Style.group}>
                      {/* <div
                        className="g-recaptcha"
                        data-sitekey="6Ldc9-YrAAAAAPlEy99RO6N06uFh6LRqjJ76ggk4"
                      ></div> */}
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6Ldc9-YrAAAAAPlEy99RO6N06uFh6LRqjJ76ggk4"
                        onChange={(token) => setCaptchaToken(token)}
                      />
                      {errors.captcha && (
                        <p className="error-text">{errors.captcha}</p>
                      )}
                    </div>
                  </div>
                  <div className={Style.buttonFlex}>
                    <button
                      type="button"
                      className={Style.btnStyle}
                      disabled={loading}
                      onClick={handleSubmit}
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
