
import React from 'react';
import {FaFacebookF} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaTelegram} from "react-icons/fa"
const Footer = () => {
  return (
    <footer>
       <FaFacebookF style={{backgroundColor:"rgb(5, 5, 92)"}} className='icon'/>
            <FaYoutube style={{backgroundColor:"#f7253e"}} className='icon'/>
            <FaInstagram style={{backgroundColor:"#ed07b7"}} className='icon'/>
            <FaLinkedin style={{backgroundColor:"#0489c2"}} className='icon'/>
            <FaTelegram style={{backgroundColor:"#0489c2"}} className='icon'/>
    </footer>
  );
};

export default Footer;
