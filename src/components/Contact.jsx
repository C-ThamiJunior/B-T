import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-sidebar">
        <ul className="sidebar-icons">
          <li className="sidebar-item" title="Email">
            <Mail size={24} />
            <span className="sidebar-text">info@btskills.co.za</span>
          </li>
          <li className="sidebar-item" title="Phone">
            <Phone size={24} />
            <span className="sidebar-text">+27 123 456 7890</span>
          </li>
          <li className="sidebar-item" title="Address">
            <MapPin size={24} />
            <span className="sidebar-text">299 Burger Street</span>
          </li>
          <li className="sidebar-item" title="Facebook">
            <Facebook size={24} />
            <span className="sidebar-text">Facebook</span>
          </li>
          <li className="sidebar-item" title="Instagram">
            <Instagram size={24} />
            <span className="sidebar-text">Instagram</span>
          </li>
          <li className="sidebar-item" title="LinkedIn">
            <Linkedin size={24} />
            <span className="sidebar-text">LinkedIn</span>
          </li>
        </ul>
      </div>

      <div className="blurred-form">
      <form>
        <img
          src="/logo.png"
          alt="B&T Logo"
          style={{ maxWidth: '200px', marginBottom: '2rem' }}
        />
        <input type="text" className="form-control mb-3" placeholder="Your Name" />
        <input type="email" className="form-control mb-3" placeholder="Email Address" />
        <input type="text" className="form-control mb-3" placeholder="Subject" />
        <textarea rows="5" className="form-control mb-4" placeholder="Your Message"></textarea>
        <button className="btn btn-danger w-100 rounded-pill">Send Message</button>
      </form>
    </div>

    </div>
  );
};

export default Contact;
