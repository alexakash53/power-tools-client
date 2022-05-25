import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
        <div className='py-5 bg-primary text-black text-center text-3xl font-extrabold'>GUARANTEED TOUGH.</div>
            <footer class="footer flex justify-between p-10 bg-base-200 text-base-content">
                <div>
                    <span class="footer-title">Services</span> 
                    <a class="link link-hover">Branding</a> 
                    <a class="link link-hover">Design</a> 
                    <a class="link link-hover">Marketing</a> 
                    <a class="link link-hover">Advertisement</a>
                </div> 
                <div>
                    <span class="footer-title">SYSTEMS</span> 
                    <a class="link link-hover">Branding</a> 
                    <a class="link link-hover">Design</a> 
                    <a class="link link-hover">Marketing</a> 
                    <a class="link link-hover">Advertisement</a>
                </div> 
                <div>
                    <span class="footer-title">SUPPORT</span> 
                    <a class="link link-hover">Branding</a> 
                    <a class="link link-hover">Design</a> 
                    <a class="link link-hover">Marketing</a> 
                    <a class="link link-hover">Advertisement</a>
                </div> 
                <div>
                    <span class="footer-title">Company</span> 
                    <a class="link link-hover">About us</a> 
                    <a class="link link-hover">Contact</a> 
                    <a class="link link-hover">Jobs</a> 
                    <a class="link link-hover">Press kit</a>
                </div> 
                <div>
                    <span class="footer-title">Legal</span> 
                    <a class="link link-hover">Terms of use</a> 
                    <a class="link link-hover">Privacy policy</a> 
                    <a class="link link-hover">Cookie policy</a>
                </div>
                </footer> 
                <footer class="footer flex justify-between px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div class="items-center grid-flow-col">
                <img style={{width:150}} src="https://i.ibb.co/HzpCshd/dewalt.png" alt="Logo" />
                    <p>ACME Industries Ltd. <br/>Providing reliable tech since 1992</p>
                </div> 
                <div class="flex justify-center items-center text-2xl">
                    <FaFacebookF className='m-1'/>
                    <FaInstagram className='m-1'/>
                    <FaTwitter className='m-1'/>
                    <FaLinkedin className='m-1'/>
                    <FaYoutube className='m-1'/>
                </div>
            </footer>
        </div>
    );
};

export default Footer;