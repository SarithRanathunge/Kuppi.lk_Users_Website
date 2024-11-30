import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub, FaDribbble } from 'react-icons/fa';
import Logo from '../assets/Kuppi.lk_logo_white_2.png'

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-8">
      <div className="w-full px-12">
        <div className="flex flex-col md:flex-row justify-between pb-6 pt-4">
          <div className="mt-2">
            <img src={Logo} alt="Your Logo" className="h-32 mb-6" />
            <p className="text-[12pt]">Top learning experiences that create more talent in the world.</p>
          </div>
          <div className="flex flex-col md:flex-row space-x-8 md:space-x-16">
            <div className="flex flex-col space-y-5">
              <h3 className="text-lg font-semibold">Product</h3>
              <ul className='flex  flex-col gap-2'>
                <li><a href="/">Overview</a></li>
                <li><a href="/">Features</a></li>
                <li><a href="/">Solutions</a></li>
                <li><a href="/">Tutorials</a></li>
                <li><a href="/">Pricing</a></li>
              </ul>
            </div>
            <div className="flex flex-col space-y-5">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className='flex  flex-col gap-2'>
                <li><a href="/">About us</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Press</a></li>
                <li><a href="/">News</a></li>
              </ul>
            </div>
            <div className="flex flex-col space-y-5">
              <h3 className="text-lg font-semibold">Social</h3>
              <ul className='flex  flex-col gap-2'>
                <li><a href="https://twitter.com/">Twitter</a></li>
                <li><a href="https://linkedin.com/">LinkedIn</a></li>
                <li><a href="https://github.com/">GitHub</a></li>
                <li><a href="https://dribbble.com/">Dribbble</a></li>
              </ul>
            </div>
            <div className="flex flex-col space-y-5">
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className='flex  flex-col gap-2'>
                <li><a href="/">Terms</a></li>
                <li><a href="/">Privacy</a></li>
                <li><a href="/">Cookies</a></li>
                <li><a href="/">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-14 border-t-2 border-gray-700 flex justify-center pb-6">
          <ul className="flex space-x-8">
            <li><a href="https://twitter.com/"><FaTwitter className="text-2xl" /></a></li>
            <li><a href="https://linkedin.com/"><FaLinkedinIn className="text-2xl" /></a></li>
            <li><a href="https://github.com/"><FaGithub className="text-2xl" /></a></li>
            <li><a href="https://dribbble.com/"><FaDribbble className="text-2xl" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;