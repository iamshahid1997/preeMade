import React from 'react';

const Contactus2 = () => {
  return (
    <div className='flex flex-col items-center xl:items-start xl:flex-row lg:space-x-10 relative justify-center py-10 lg:py-24 bg-white w-full'>
      <div className='relative px-2 lg:px-10 mt-10 lg:mt-24 xl:mt-0'>
        <img
          src='https://html.themexriver.com/Archix/assets/img/about/cn1.jpg'
          alt='img'
          className='w-full h-full'
        />
        <div className='absolute lg:h-5/6 lg:w-5/6 bg-background opacity-95 right-0 top-10 py-5 lg:py-0'>
          <div className='p-2 md:p-4 h-full flex flex-col justify-center'>
            <div>
              <p className='text-primary font-bold text-2xl'>Office Address</p>
              <p className='text-white text-semibold text-xl mt-2 px-2'>
                22 Albert St, Melbourne, Australia 22 Road St, NewYork, USA
              </p>
            </div>
            <div className='my-5'>
              <p className='text-primary font-bold text-2xl'>Mail us</p>
              <p className='text-white text-semibold text-xl mt-2 flex flex-col px-2'>
                <span>envato@gmail.com</span> <span>info@company.com</span>
              </p>
            </div>
            <div>
              <p className='text-primary font-bold text-2xl'>Telephone</p>
              <p className='text-white text-semibold text-xl mt-2 flex flex-col px-2'>
                <span>+123 (4567) 890</span> <span>+123 (4567) 890</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='px-2 mt-0 md:mt-28 '>
        <p className='text-primary font-semibold text-xl pl-4'>
          ABOUT PREEMADE
        </p>
        <p className=' text-gray-800 text-4xl w-full pl-4 pr-8 md:w-96 mt-7'>
          We Provide Best Interior Design Experience.
        </p>
        <p className='text-xl text-gray-400 w-full  md:w-[600px] mt-6 pl-4 pr-8'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          indust. Lorem Ipsum has been the dard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to a
          type speci men book. It has survived not turies
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
      </div> */}
    </div>
  );
};

export default Contactus2;
