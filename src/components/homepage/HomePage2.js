import React, { useState } from 'react';
import Styles from './HomePage2.module.css';

const HomePage2 = () => {
  const [active, setActive] = useState(0);
  const CONTENT = [
    {
      title: 'Architect Design',
      description:
        'Excepteur sint occaecat cupidat proident, sunt in culpa quoi officia terunt mollit anim id est laborum. Sed perspiciatis',
      logo: 'https://html.themexriver.com/Archix/assets/icon/ic1.png',
      img: 'https://html.themexriver.com/Archix/assets/img/service/ser1.jpg',
    },
    {
      title: 'Interior Design',
      description:
        'Excepteur sint occaecat cupidat proident, sunt in culpa quoi officia terunt mollit anim id est laborum. Sed perspiciatis',
      logo: 'https://html.themexriver.com/Archix/assets/icon/ic2.png',
      img: 'https://html.themexriver.com/Archix/assets/img/service/ser1.jpg',
    },
    {
      title: 'Construction Building',
      description:
        'Excepteur sint occaecat cupidat proident, sunt in culpa quoi officia terunt mollit anim id est laborum. Sed perspiciatis',
      logo: 'https://html.themexriver.com/Archix/assets/icon/ic3.png',
      img: 'https://html.themexriver.com/Archix/assets/img/service/ser1.jpg',
    },
  ];
  return (
    <div
      className={`${Styles.homepage2} flex justify-center items-center bg-background2`}
    >
      <div
        className={`${Styles.section} flex flex-col lg:flex-row bg-white w-full lg:w-3/5 mt-24 md:mt-0 mx-3 md:mx-0`}
      >
        {CONTENT.map((content, index) => (
          <div
            onMouseEnter={() => setActive(index)}
            className={`${active === index ? 'text-white' : '' } lg:w-1/3 p-6 flex flex-col justify-between relative overflow-hidden`}
          >
            {active === index && (
              <img
                src={content.img}
                alt='img'
                className={`${Styles.imageScale} brightness-50 absolute top-0 left-0`}
              />
            )}
            <div className={`${Styles.horizontalBorder} bg-primary`}></div>
            <div className={`${Styles.verticalBorder} bg-primary`}></div>
            <div className='mt-10 flex justify-center z-10'>
              <img src={content.logo} alt='logo' />
            </div>
            <p className='font-bold text-xl flex justify-center z-10 mt-10 md:mt-0'>
              {content.title}
            </p>
            <p className='flex justify-center text-gray-400 text-center mt-10 md:mt-0 z-10'>
              {content.description}
            </p>
            <p className='text-primary text-6xl font-bold flex justify-end mt-10 md:mt-0 z-10'>
              0{index + 1}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage2;
