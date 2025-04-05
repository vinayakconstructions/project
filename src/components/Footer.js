"use client";
import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
const Footer = () => {
  const phoneNumber = "919876543210"; // Replace with your WhatsApp number
  const message = encodeURIComponent("Hi, I am from Vinayak Constructions Company.");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
  return (
    <>
    <footer 
    className={styles.footer} 
    style={{
      backgroundImage: "url('/essentials/shiny-night-city.jpg')", 
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      padding: "40px 40px",
      color: "white",
    }}
  >
    {/* Overlay for Opacity Effect */}
    <div 
      style={{
        // position: "absolute",
        // top: 0,
        // left: 0,
        // width: "100%",
        // height: "100%",
        // backgroundColor: "black",
        // opacity: 0.1,  // Adjust opacity
        // zIndex: 1
      }}
    ></div>
  
    <div 
      className='footerContainer'
    >
      <div className={styles.socialSection}>
        <Image
          src="/essentials/logo_white.png"
          alt="logo"
          width={200}
          height={200}
        />
        <h2>Connect on social</h2>
        <div className={styles.socialIcons} style={{ display: "flex", gap: "20px", marginTop: "0px" }}>
          <a href={whatsappLink} className={styles.socialIcon} aria-label="Facebook">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
  
      <div className={styles.linksSection}>
        <ul>
        <a href="/about"><li>About us</li></a>
        <a href="/projects"><li>Projects</li></a>
        <a href="/services"><li>Services</li></a>
        <a href="/privacy-policy"><li>Privacy policy</li></a>
        <a href="/terms-condition"><li>Terms & conditions</li></a>
        <a href="/mission-vision"><li>Mission & Vision</li></a>
        </ul>
      </div>
  
      <div className={styles.addressSection}>
        <p style={{ textAlign: "left" }}><strong>Registered Office</strong></p>
        <p style={{ textAlign: "left" }}>Flat no 101,Parsh Chhaya Apartment, Bal Mandir Road </p>
        <p style={{ textAlign: "left" }}>Bhimganjmandi, Kota, Rajasthan, 324002</p>
        <p style={{ textAlign: "left" }}>Vaibhav Saxena -  +91 6376-635379 & 094133 50792</p>
        <p style={{ textAlign: "left" }}>Ikramuddin khan - +91 94141 76392 & +91 861-9470159</p>
        <p style={{ textAlign: "left" }}>
          Email:{" "}
          <a href="mailto:Vinayakconstructions9255@gmail.com">
            Vinayakconstructions9255@gmail.com
          </a>
        </p>
      </div>
    </div>

  </footer>
    <div className="w-full bg-customBrown text-white text-center py-2 text-sm bottom-0 left-0 z-50">
      <p>© 2025 All rights reserved.</p>
      <p>Designed By <a href="https://aswebtech.online/">Aswebtech.online</a></p>
    </div>
    
    <style jsx>{`
      .footerContainer{
        display: flex;
        justify-content: space-between;
        position: relative,
      }
      @media (max-width: 768px) {
        .footerContainer {
        gap:40px;
          flex-direction:column;
        }
      }
            
      `}</style>
    </>
  
  );
};

export default Footer;
