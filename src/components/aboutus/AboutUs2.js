import React from 'react';

const Aboutus2 = () => {
  return (
    <div className='flex flex-col items-center xl:items-start xl:flex-row lg:space-x-10 relative justify-center py-24 bg-white w-full'>
      <div className='relative px-10 mt-24 xl:mt-0 hidden xl:block'>
        <img
          src='	https://html.themexriver.com/Archix/assets/img/about/ab2.jpg'
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
      <div className='px-2 mt-0 md:mt-20 '>
        <p className='text-primary font-semibold text-xl pl-4'>
          ABOUT PREEMADE
        </p>
        <p className=' text-gray-800 text-4xl w-full pl-4 pr-8 md:w-96 mt-7'>
          We Provide Best Interior Design Experience.
        </p>
        <p className={`text-gray-400 text-xl px-3 lg:w-[500px] mt-7`}>
          We, headquartered at Gurugram, are a team of Architects, Urban Planner
          and Interior designers having completed numerous of projects producing
          designs which are circumstantial in developing the spaces. electronic
          typeset ting,he printing and typesetting industry
        </p>
        <p className={`text-gray-400 text-xl px-3 lg:w-[500px]`}>
          We strive to produce the design concept with primary focus point
          revolving around implementing the design with the integration of
          climatic factor which helps in generating sustainable designs.
        </p>
        <div className='flex gap-x-5 md:gap-x-8 mt-6 items-start'>
          <img
            src='https://html.themexriver.com/Archix/assets/img/about/abs1.jpg'
            alt='img'
            className='rounded-md pl-4 object-contain'
          />
          <div>
            <p className='text-gray-800 font-bold text-lg w-full md:w-[400px]'>
              ‘’Information architecture helps organize content overall so it’s
              easy to find and Imagine a storeroom filled use’’
            </p>
            <p className='text-gray-800 font-bold text-lg mt-6'>Preeti Mehla</p>
            <p className='text-gray-400'>CEO & Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus2;
