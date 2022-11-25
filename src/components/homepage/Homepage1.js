import React, { useState, useEffect, useRef } from 'react';
import Line from '../commons/Line';
import Styles from './Homepage1.module.css';

const Homepage1 = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isFirstRun = useRef(true);

  function changeStyle() {
    document.getElementById('bgImg').classList.toggle(`${Styles.imageScale}`);
    document
      .getElementById('textAnimation')
      .classList.toggle(`${Styles.textAnimation}`);
  }

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    } else {
      changeStyle();
    }
  }, [selectedIndex]);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setSelectedIndex((index) => (index !== 2 ? index + 1 : 0));
    }, 4040);
    const intervalId = setInterval(() => {
      changeStyle();
    }, 4000);

    return () => {
      clearInterval(animationInterval);
      clearTimeout(intervalId);
    };
  }, []);

  const CONTENT = [
    {
      id: 0,
      title: 'ARCHITECT DESIGN',
      description: 'The Art Technique of Designing and Building.',
      img: 'https://html.themexriver.com/Archix/assets/img/slider/s1.jpg',
    },
    {
      id: 1,
      title: 'INTERIOR DESIGN',
      description: 'Excepteur sint occaecat cupidat proident.',
      img: 'https://html.themexriver.com/Archix/assets/img/slider/s2.jpg',
    },
    {
      id: 2,
      title: 'CONSTRUCTION BUILDING',
      description: 'The Art Technique of Designing and Building.',
      img: 'https://html.themexriver.com/Archix/assets/img/slider/s3.jpg',
    },
  ];
  function handleAnimation(index) {
    changeStyle();
    setSelectedIndex(index);
  }

  return (
    <div className='bg-background h-screen'>
      <div className='md:mx-4 xl:mx-10 relative'>
        <div className='w-full h-screen overflow-hidden'>
          <img
            src={CONTENT[selectedIndex].img}
            alt='bgImg'
            id='bgImg'
            className={`${Styles.imageScale} object-cover rounded-xl h-full`}
          />
        </div>
        <Line
          position={`${Styles.topHorizontalLine}`}
          style={Styles.horizonatalLine}
        />
        <Line
          position={`${Styles.topVerticalLine}`}
          style={Styles.verticalLine}
        />
        <Line
          position={`${Styles.bottomHorizontalLine}`}
          style={Styles.horizonatalLine}
        />
        <Line
          position={`${Styles.bottomVerticalLine}`}
          style={Styles.verticalLine}
        />
        <div
          id='textAnimation'
          className={`${Styles.textAnimation} absolute top-1/4 lg:top-40 xl:top-56 left-6 xl:left-32 2xl:left-56 text-white w-5/6 md:w-5/6 lg:w-2/3 xl:w-2/5 2xl:w-1/3`}
        >
          <p className='text-primary text-2xl font-semibold mb-2'>
            {CONTENT[selectedIndex].title}
          </p>
          <p
            className='text-white text-4xl md:text-5xl 2xl:text-6xl font-bold'
            style={{ lineHeight: '60px' }}
          >
            {CONTENT[selectedIndex].description}
          </p>
        </div>
      </div>
      <div className='absolute right-6 lg:right-24 top-1/2 text-white space-y-3'>
        {CONTENT.map((content, index) => (
          <div
            className={`${
              selectedIndex === index ? 'bg-primary' : 'bg-white'
            } h-8 w-2 hover:bg-primary`}
            key={index}
            onClick={() => {
              handleAnimation(index);
            }}
          ></div>
        ))}
      </div>
      <div className={`absolute ${Styles.buttonPos}`}>
        <button className='transition-all ease-linear delay-150 duration-300 rounded-xl w-48 h-12 bg-primary text-white font-semibold hover:text-black hover:bg-white'>
          View Works
        </button>
        <div className='border-2 rounded-xl h-12 -mt-10 ml-2 w-48'></div>
      </div>
    </div>
  );
};

export default Homepage1;
