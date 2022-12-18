import React from 'react';
import CountUp from 'react-countup';

const Homepage5 = () => {
  const CONTENT = [
    {
      count: '30',
      subscript: 'k+',
      text: 'Happy Clients',
    },
    {
      count: '34',
      subscript: 'k+',
      text: 'Completed Projects',
    },
    {
      count: '202',
      subscript: '+',
      text: 'Expert Engineer',
    },
    {
      count: '300',
      subscript: '+',
      text: 'National Awards',
    },
  ];
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start md:justify-center my-10'>
      {CONTENT.map((content, index) => (
        <div className='w-full md:w-1/4 h-48 md:h-72 flex flex-col items-center justify-center text-center' key={index}>
          <div className='w-1 h-16 bg-primary'></div>
          <div className='h-3 w-3 rounded-full bg-primary'></div>
          <p className='text-4xl font-bold text-primary mt-3'>
            <CountUp end={content.count} duration={1} />
            {content.subscript}
          </p>
          <p className='border-gray-300 border-8 w-20 opacity-40 -mt-3'></p>
          <p className='mt-3 font-bold text-lg'>{content.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Homepage5;
