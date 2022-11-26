import React, { useState } from 'react';
import logo from '../../assets/logo/logo.png';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import useScreenSize from '../../utils/customHooks/useScreenSize';
import Styles from './NavBar.module.css';

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const windowSize = useScreenSize();

  const NAV_HEADERS = ['HOME', 'ABOUT',  'CONTACT'];
  return (
    <div>
      <div className='bg-background lg:grid lg:grid-cols-12 px-3 py-4 md:px-10 md:py-8 flex items-center justify-between lg:justify-start text-white w-full'>
        <div className='lg:col-span-4'>
          <div className='flex items-center'>
            <img
              src={logo}
              alt='logo'
              className='w-10 md:w-16 cursor-pointer'
            />
            <p className='pl-2 font-semibold text-lg md:text-2xl text-primary'>
              {' '}
              PreeMade{' '}
            </p>
          </div>
        </div>
        <div className='text-xl lg:hidden' onClick={() => setShowNav(true)}>
          <FaBars />
        </div>
        <div className='hidden lg:grid col-span-3'>
          <div className='flex justify-between items-center font-medium'>
            {NAV_HEADERS.map((header, index) => (
              <p key={index} className='cursor-pointer hover:text-primary'>
                {header}
              </p>
            ))}
          </div>
        </div>
        <div className='hidden lg:grid col-span-5'>
          <div className='flex items-center justify-end space-x-5'>
            <div className='flex items-center'>
              <span className='text-primary pr-2'>CALL US: </span>
              <span>9958477837</span>
            </div>
            <div className='flex items-center space-x-4 border-l-2 border-gray-500 pl-3'>
              <FaFacebookF className='hover:text-primary' />
              <FaTwitter className='hover:text-primary' />
              <FaInstagram className='hover:text-primary' />
            </div>
          </div>
        </div>
      </div>
      {windowSize.width < 1024 && (
        <div
          className={`${
            showNav ? Styles.navbarOpen : Styles.navbarClose
          } h-screen flex flex-col bg-white left-0 top-0 w-0 fixed z-10`}
        >
          <div
            className={`${
              showNav ? Styles.textAnimationClose : Styles.textAnimationOpen
            }`}
          >
            <div
              className='flex flex-col w-full items-end mt-3 pr-3 text-primary'
              onClick={() => setShowNav(false)}
            >
              <FaTimes />
            </div>
            <div className='flex w-full justify-center items-center my-6'>
              <img src={logo} alt='logo' className='w-10 cursor-pointer' />
              <p className='pl-2 font-semibold text-lg md:text-2xl text-primary'>
                {' '}
                PreeMade{' '}
              </p>
            </div>
            <div className='space-y-4 text-sm px-4'>
              {NAV_HEADERS.map((header, index) => (
                <p key={index} className='border-b-2 border-primary pb-2'>
                  {header}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
