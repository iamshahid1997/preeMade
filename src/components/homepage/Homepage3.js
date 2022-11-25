import React from 'react';
import CountUp from 'react-countup';
import Styles from './HomePage3.module.css';

const Homepage3 = () => {
  return (
    <div className='mt-24 flex flex-col items-center xl:items-start xl:flex-row lg:space-x-32 relative justify-center'>
      <div className='absolute -top-10 left-1/3'>
        <img
          src='https://html.themexriver.com/Archix/assets/img/bg/ab-bg.png'
          alt='img'
        />
      </div>
      <div className='text-center px-2'>
        <p className='text-primary font-semibold'>ABOUT ARCHIX</p>
        <div className='text-4xl font-bold mt-7'>
          <p>Global Architecture</p>
          <p>Design Studio Since 1995</p>
        </div>
        <p className={`${Styles.textwidth} text-gray-400 text-xl w-96 mt-7`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          indust. Lorem Ipsum has been the dard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to a
          type speci men book. It has survived not turies also the leap into
          electronic typeset ting,he printing and typesetting industry
        </p>
        <div className='flex mt-7 items-center'>
          <div
            className={`${Styles.numberBox} text-primary text-6xl font-bold  w-44 h-44 flex justify-center items-center`}
          >
            <CountUp end={28} duration={1} />+
          </div>
          <p className='text-4xl w-32 ml-6 font-light'>
            Years Expiriance Working
          </p>
        </div>
        <div className='absolute mt-6 left-1/3'>
          <button className='transition-all ease-linear delay-150 duration-300 rounded-xl w-48 h-12 bg-primary text-white font-semibold hover:text-black hover:bg-white'>
            View Works
          </button>
          <div className='border-2 rounded-xl h-12 -mt-10 ml-2 w-48'></div>
        </div>
      </div>
      <div className='relative px-10 mt-24 xl:mt-0'>
        <img
          src='https://html.themexriver.com/Archix/assets/img/about/ab1.jpg'
          alt='img'
          className='w-full h-full'
        />
        <img
          src='	https://html.themexriver.com/Archix/assets/img/bg/dot-shape.png'
          alt='dottedImg'
          className='absolute hidden lg:block -bottom-10 -right-6 -z-10'
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
