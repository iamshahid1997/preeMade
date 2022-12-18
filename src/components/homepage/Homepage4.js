import React, { useState } from 'react';
import Styles from './Homepage4.module.css';
import Process from './Process';

const Homepage4 = () => {
  const [activeWork, setActiveWork] = useState(null);
  const CONTENT1 = [
    {
      index: 0,
      title: 'Programming',
      description:
        'The main goal during this phase is to figure out how much space you need now, how much you’re likely to need in the future, and how that space should be used, organized, and arranged — the “program of requirements.”',
      image: 'https://html.themexriver.com/Archix/assets/icon/ic4.png',
    },
    {
      index: 1,
      title: 'Schematic Design',
      description:
        'Your design professional takes your Program of Requirements and begins the process of translating it into an efficient building design.',
      image: 'https://html.themexriver.com/Archix/assets/icon/ic5.png',
    },
    {
      index: 2,
      title: 'Design Development',
      description:
        'The building’s exterior will be more fully designed (if applicable), interior layouts will be completed, room sizes are finalized, and most materials are selected.',
      image: 'https://html.themexriver.com/Archix/assets/icon/ic6.png',
    },
  ];
  const CONTENT2 = [
    {
      index: 3,
      title: 'Construction Documents',
      description:
        'This phase basically takes the design development drawings and specifications and fills in the details that will enable a contractor to actually build your project.',
      image: 'https://html.themexriver.com/Archix/assets/icon/ic4.png',
    },
    {
      index: 4,
      title: 'Bidding',
      description:
        'This is just what it sounds like — obtaining bids from contractors to do the work.',
      image: 'https://html.themexriver.com/Archix/assets/icon/ic5.png',
    },
    {
      index: 5,
      title: 'Construction Administration',
      description:
        'This phase involves your architect monitoring the construction to verify that it is happening in accordance with the Construction Documents they prepared.',
      image: 'https://html.themexriver.com/Archix/assets/icon/ic6.png',
    },
  ];
  return (
    <div className=' py-24 md:py-40 flex flex-col items-center bg-background2 text-center'>
      <p className='text-primary font-bold text-xl tracking-widest'>
        WORK PROCESS
      </p>
      <p className='text-3xl px-3 md:text-5xl font-bold mt-3'>
        How We Complete Works
      </p>
      <div className='text-gray-400 mt-6 text-center text-lg px-3'>
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <p>dolore magna aliqua. Ut enim ad minim veniam quis.</p>
      </div>
      <div className='flex flex-col lg:flex-row space-y-24 lg:space-y-0 lg:space-x-5 xl:space-x-10 mt-24 z-10 px-3'>
        <Process
          content={CONTENT1}
          setActiveWork={setActiveWork}
          activeWork={activeWork}
          Styles={Styles}
        />
      </div>
      <div className='flex flex-col lg:flex-row space-y-24 lg:space-y-0 lg:space-x-5 xl:space-x-10 mt-24 z-10 px-3'>
        <Process
          content={CONTENT2}
          setActiveWork={setActiveWork}
          activeWork={activeWork}
          Styles={Styles}
        />
      </div>
    </div>
  );
};

export default Homepage4;
