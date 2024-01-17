import React, { useState, useRef } from "react";
import Card from "../../components/card/Card";
import "./Contact.scss";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const [clientEmail, setClientEmail] = useState("");
  const [message, setMessage] = useState("");
  const data = {
    clientEmail,
    message,
  };

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_93vlcaa",
        "template_xmddjj9",
        form.current,
        "OUJEcBplQii4-QB7r"
      );
      setClientEmail("");
      setMessage("");
      console.log(result);
      toast.success("Email sent successfully");
    } catch (error) {
      console.log(error.text);
      toast.error("Sorry an error occurred try again");
    }
  };

  return (
    <div className="contact">
      <h3 className="--mt">Contact Us</h3>
      <div className="section">
        <form ref={form} onSubmit={sendEmail}>
          <Card cardClass="card">
            <label>Email</label>
            <input
              type="email"
              name="clientEmail"
              placeholder="email"
              required
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
            />
            <label>Message</label>
            <textarea
              cols="30"
              rows="10"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="--btn --btn-primary">Send Message</button>
          </Card>
        </form>

        <div className="details">
          <Card cardClass={"card2"}>
            <h3>Our Contact Information</h3>
            <p>Fill the form or contact us via other channels listed below</p>

            <div className="icons">
              <span>
                <FaPhoneAlt />
                <p>07031885598</p>
              </span>
              <span>
                <FaEnvelope />
                <p>arobani.sunday2019@nda.edu.ng</p>
              </span>
              <span>
                <GoLocation />
                <p>Abuja, Nigeria</p>
              </span>
              <span>
                <FaTwitter />
                <p>@BrightITSolutions</p>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
