import React from 'react';

const Process = ({ content, setActiveWork, activeWork, Styles }) => {
  return content.map((content) => (
    <div
      className={`${Styles.homepage4} bg-white relative flex flex-col items-center`}
      onMouseEnter={() => setActiveWork(content.index)}
      onMouseLeave={() => setActiveWork(null)}
      key={content.index}
    >
      <div
        className={`${content.index === activeWork ? 'bg-primary' : ''} ${
          Styles.box
        } transition-color absolute left-10 sm:left-16 md:left-24 lg:left-5 border-2 -mt-7 lg:-mt-8 border-gray-300 -z-10`}
      ></div>
      <div className='mt-10 flex flex-col items-center px-4'>
        <img src={content.image} alt='img' />
        <p className='mt-5 font-semibold text-xl'>{content.title}</p>
        <p className='mt-5 text-gray-400 text-base text-center'>
          {content.description}
        </p>
      </div>
      <div
        className={`${
          content.index === activeWork ? 'bg-black' : 'bg-primary'
        } absolute left-2/5 w-32 h-24 text-white flex flex-col items-center justify-center -bottom-8 lg:-bottom-7`}
      >
        <p className='text-4xl font-extrabold'>0{content.index + 1}</p>
        <p className='mt-2 font-bold text-xl'>STEP</p>
      </div>
    </div>
  ));
};

export default Process;
