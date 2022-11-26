import React, { useState } from 'react';
import Styles from './Homepage4.module.css';

const Homepage4 = () => {
  const [activeWork, setActiveWork] = useState(null);
  const CONTENT = [
    {
      title: 'Planning & Design',
      description:
        'Prepare to meet the one and only For the WordPress theme perfect for both offer in the corporate ativeects.',
      image: 'https://html.themexriver.com/Archix/assets/icon/ic4.png',
    },
    {
      title: 'Draws & Sketches',
      description:
        'Prepare to meet the one and only For the WordPress theme perfect for both offer in the corporate ativeects.',
      image: 'https://html.themexriver.com/Archix/assets/icon/ic5.png',
    },
    {
      title: 'Start Building',
      description:
        'Prepare to meet the one and only For the WordPress theme perfect for both offer in the corporate ativeects.',
      image: 'https://html.themexriver.com/Archix/assets/icon/ic6.png',
    },
  ];
  return (
    <div className=' py-24 md:py-40 flex flex-col items-center bg-background2 text-center'>
      <p className='text-primary font-bold text-xl'>WORK PROCESS</p>
      <p className='text-3xl px-3 md:text-5xl font-bold mt-3'>How We Complete Works</p>
      <div className='text-gray-400 mt-6 text-center text-lg px-3'>
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <p>dolore magna aliqua. Ut enim ad minim veniam quis.</p>
      </div>
      <div className='flex flex-col lg:flex-row space-y-24 lg:space-y-0 lg:space-x-5 xl:space-x-10 mt-24 z-10 px-3'>
        {CONTENT.map((content, index) => (
          <div
            className={`${Styles.homepage4} bg-white relative flex flex-col items-center`}
            onMouseEnter={() => setActiveWork(index)}
            onMouseLeave={() => setActiveWork(null)}
          >
            <div
              className={`${index === activeWork ? 'bg-primary' : '' } ${Styles.box} absolute left-10 sm:left-16 md:left-24 lg:left-5 border-2 -mt-7 lg:-mt-8 border-gray-300 -z-10`}
            ></div>
            <div className='mt-10 flex flex-col items-center px-4'>
              <img src={content.image} alt='img' />
              <p className='mt-5 font-semibold text-xl'>{content.title}</p>
              <p className='mt-5 text-gray-400 text-lg text-center'>
                {content.description}
              </p>
            </div>
            <div className={`${index === activeWork ? 'bg-black' :'bg-primary'} absolute left-2/5 w-32 h-24 text-white flex flex-col items-center justify-center -bottom-8 lg:-bottom-7`}>
              <p className='text-4xl font-extrabold'>0{index + 1}</p>
              <p className='mt-2 font-bold text-xl'>STEP</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage4;
