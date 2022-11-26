import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div
        className='flex justify-center py-24 object-fill'
        style={{
          backgroundImage: `url("https://html.themexriver.com/Archix/assets/img/bg/footer-bg.jpg")`,
        }}
      >
        <div className='md:grid md:grid-cols-3 w-full md:w-2/3 lg:w-2/5'>
          <div className='flex flex-col pl-3 lg:items-center'>
            <div className='space-y-3 text-white mt-4'>
              <p className='text-primary font-bold text-xl'>Adress</p>
              <p>380 St Kilda Road, Melbourne VIC 3004, Australia</p>
              <p>+123 (4567) 890</p>
              <p>+123 (4567) 890</p>
              <p>info@envato.com</p>
            </div>
          </div>
          <div className='flex flex-col pl-3 lg:items-center'>
            <div className='space-y-3 text-white mt-4'>
              <p className='text-primary font-bold text-xl'>Links</p>
              <p>About</p>
              <p>Contact Us</p>
              <p>FAQ</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policies</p>
            </div>
          </div>
          <div className='flex flex-col px-3 lg:items-center'>
            <div className='space-y-3 text-white mt-4'>
              <p className='text-primary font-bold text-xl'>Socials</p>
              <div className='flex items-center space-x-4 mt-6'>
                <FaFacebookF className='text-primary' />
                <FaTwitter className='text-primary' />
                <FaInstagram className='text-primary' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-background h-16 w-full flex justify-center text-white items-center'>
        <p>©2022 All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
