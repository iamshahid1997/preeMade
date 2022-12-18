import React from 'react';

const PageHeader = ({ title }) => {
  return (
    <div className='w-full'>
      <div className='h-[250px] bg-[#f5f5f5] relative'>
        <img
          src='https://html.themexriver.com/Archix/assets/img/bg/ar-shape.png'
          alt='img'
          className='h-full object-cover w-full'
        />
        <div className='absolute left-0 top-0 h-full w-full'>
          <div className='flex flex-col justify-center items-center h-full'>
            <p className='text-4xl font-bold'>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
