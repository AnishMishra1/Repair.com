// Dependencies
import { Divider, Image, Button, Listbox, ListboxItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

// Local Files
import "./Footer.css";
import logo from "../globalAssets/logo.svg";

const contactInfo = [
  {
    name: "Phone",
    value: "+1 (888) 891-7176",
    icon: <FaPhone />,
  },
  {
    name: "Email",
    value: "support@investnow.com",
    icon: <MdEmail />,
  },
  {
    name: "Address",
    value: "London Eye, UK",
    icon: <IoLocation />,
  },
];

const footerLinks = [
  {
    type: "Navigation",
    data: [
      { key: "home", value: "Home" },
      { key: "about", value: "About" },
      { key: "contact", value: "Contact" },
      { key: "faq", value: "FAQ" },
      { key: "Privacy", value: "Privacy" },
    ],
  },
  {
    type: "Quick Links",
    data: [
      { key: "investment", value: "Investment" },
      { key: "crypto", value: "Crypto" },
      { key: "options", value: "Options" },
      { key: "retirement", value: "Retirement" },
      
    ],
  },
];

const Footer = () => {
  return (
    <div className="h-auto bg-[#0077B9] text-white flex flex-col md:flex-row justify-end items-center p-[5rem] gap-[8rem]">
      <div className="flex flex-col justify-start items-start px-[3rem]">
        <div className="py-[1rem]">
          <h1 className="p-">Business Hours</h1>
        </div>
        <div>
          <ul>Mon: 8:00 AM – 8:00 PM</ul>
          <ul>Tue: 8:00 AM – 8:00 PM</ul>
          <ul>Wed: 8:00 AM – 8:00 PM</ul>
          <ul>Thu: 8:00 AM – 8:00 PM</ul>
          <ul>Fri: 8:00 AM – 8:00 PM</ul>
          <ul>Sat: 8:00 AM – 8:00 PM</ul>
          <ul>Sun: 8:00 AM – 8:00 PM</ul>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start px-[3rem]">
        <div>Business Hours</div>
        <div>
          <ul>Mon: 8:00 AM – 8:00 PM</ul>
          <ul>Mon: 8:00 AM – 8:00 PM</ul>
          <ul>Mon: 8:00 AM – 8:00 PM</ul>
          <ul>Mon: 8:00 AM – 8:00 PM</ul>
          <ul>Mon: 8:00 AM – 8:00 PM</ul>
          <ul>Mon: 8:00 AM – 8:00 PM</ul>
          <ul>Mon: 8:00 AM – 8:00 PM</ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
