import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import Styles from './HomePage3.module.css';

const Homepage3 = () => {
  return (
    <div className='mt-24 flex flex-col items-center xl:items-start xl:flex-row lg:space-x-32 relative justify-center mb-10'>
      <div className='absolute -top-10 left-1/3'>
        <img
          src='https://html.themexriver.com/Archix/assets/img/bg/ab-bg.png'
          alt='img'
        />
      </div>
      <div className='text-center px-2'>
        <p className='text-primary font-semibold'>ABOUT PreeMade</p>
        <div className='text-4xl font-bold mt-7'>
          <p>Architecture</p>
          <p>Design Studio Since 2022</p>
        </div>
        <p className={`${Styles.textwidth} text-gray-400 text-xl w-96 mt-7`}>
          We, headquartered at Gurugram, are a team of Architects, Urban Planner
          and Interior designers having completed numerous of projects producing
          designs which are circumstantial in developing the spaces. electronic
          typeset ting,he printing and typesetting industry
        </p>
        <p className={`${Styles.textwidth} text-gray-400 text-xl w-96`}>
          We strive to produce the design concept with primary focus point
          revolving around implementing the design with the integration of
          climatic factor which helps in generating sustainable designs.
        </p>
        <div className='flex mt-7 mb-20 items-center justify-center'>
          <div
            className={`${Styles.numberBox} text-primary text-6xl font-bold w-32 h-32  lg:w-44 lg:h-44 flex justify-center items-center`}
          >
            <CountUp end={28} duration={1} />+
          </div>
          <p className='text-2xl lg:text-4xl w-32 ml-6 font-light'>
            Years Expiriance Working
          </p>
        </div>
        <div className=''>
          <button className='transition-all ease-linear delay-150 duration-300 rounded-xl w-48 h-12 bg-primary text-white font-semibold hover:text-black hover:bg-white'>
            <Link to='/aboutus'>View Works</Link>
          </button>
        </div>
      </div>
      <div className='relative px-10 mt-24 xl:mt-0'>
        <img
          src='https://html.themexriver.com/Archix/assets/img/about/ab1.jpg'
          alt='img'
          className='w-full h-full'
        />
        <div className='absolute h-10 w-24 bg-white right-0 top-0'></div>
        <div className='absolute h-10 w-24 bg-white right-24 top-10'></div>
        <div className='absolute h-10 w-24 bg-white right-0 top-20'></div>
        <div className='absolute h-10 w-24 bg-white left-0 bottom-0'></div>
        <div className='absolute h-10 w-24 bg-white left-24 bottom-10'></div>
        <div className='absolute h-10 w-24 bg-white left-0 bottom-20'></div>
      </div>
    </div>
  );
};

export default Homepage3;
