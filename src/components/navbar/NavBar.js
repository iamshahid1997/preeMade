import React, { useState, useEffect } from 'react';
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
import { Link, useLocation } from 'react-router-dom';

const NAV_HEADERS = [
  {
    title: 'HOME',
    link: '/',
  },
  {
    title: 'ABOUT US',
    link: '/aboutus',
  },
  {
    title: 'PROJECTS',
    link: '/projects',
  },
  {
    title: 'CONTACT US',
    link: '/contactus',
  },
];

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const windowSize = useScreenSize();
  const routePath = useLocation(); // for getting the url of the page

  useEffect(() => {
    setShowNav(window.location.pathname); // set the page url
    if (routePath.pathname === '/') {
      setShowNav('HOME');
    } else if (routePath.pathname === '/aboutus') {
      setShowNav('ABOUT US');
    } else if (routePath.pathname === '/projects') {
      setShowNav('PROJECTS');
    } else if (routePath.pathname === '/contactus') {
      setShowNav('CONTACT US');
    }
  }, [routePath.pathname]);

  console.log(showNav);
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
        <div className='hidden lg:grid col-span-4'>
          <div className='flex justify-between items-center font-medium'>
            {NAV_HEADERS.map((header, index) => (
              <p
                key={index}
                className={`${
                  header.title === showNav ? 'text-primary' : 'text-gray-200'
                } cursor-pointer hover:text-primary`}
              >
                <Link to={header.link} key={index}>
                  {' '}
                  {header.title}
                </Link>
              </p>
            ))}
          </div>
        </div>
        <div className='hidden lg:grid col-span-4'>
          <div className='flex items-center justify-end space-x-5'>
            <div className='flex items-center'>
              <span className='text-primary pr-2'>CALL US: </span>
              <span>9958477837</span>
            </div>
            <div className='flex items-center space-x-4 border-l-2 border-gray-500 pl-3'>
              <FaFacebookF className='hover:text-primary hover:scale-125' />
              <FaTwitter className='hover:text-primary hover:scale-125' />
              <FaInstagram className='hover:text-primary hover:scale-125' />
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
                <p
                  key={index}
                  className={`${
                    header.title === showNav ? 'text-primary' : 'text-gray-800'
                  } border-b-2 border-primary pb-2`}
                  onClick={() => setShowNav(false)}
                >
                  <Link to={header.link} key={index}>
                    {' '}
                    {header.title}
                  </Link>
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
