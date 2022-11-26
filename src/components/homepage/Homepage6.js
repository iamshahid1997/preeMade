import React, { useState,useEffect } from 'react';

const Homepage6 = () => {
  const [teamMember, setTeamMember] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
        setTeamMember((index) => (index !== 2 ? index + 1 : 0));
    }, 4040);

    return () => {
      clearTimeout(intervalId);
    };
  }, []);
  const TEAM = [
    {
      name: 'Preeti Mehla',
      designation: 'Architect',
      about:
        ' Lorem Ipsum is simply dummy text of the printing and typesetting indust. Lorem Ipsum has been the dard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to a type speci men book. It has survived not turies also the leap into electronic typeset ting,he printing and typesetting industry',
      img: 'https://html.themexriver.com/Archix/assets/img/team/tm1.jpg',
    },
    {
      name: 'Jai Sharma',
      designation: 'Architect',
      about:
        ' Lorem Ipsum is simply dummy text of the printing and typesetting indust. It has survived not turies also the leap into electronic typeset ting,he printing and typesetting industry',
      img: 'https://html.themexriver.com/Archix/assets/img/team/tm2.jpg',
    },
    {
      name: 'Arun Mehla',
      designation: 'Architect',
      about:
        ' Lorem Ipsum is simply dummy text of the printing and typesetting indust. Lorem Ipsum has been the dard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to a type speci men book. It has survived not turies also the leap into electronic typeset ting,he printing and typesetting industry',
      img: 'https://html.themexriver.com/Archix/assets/img/team/tm3.jpg',
    },
  ];
  return (
    <div className='mt-24 flex flex-col items-center xl:items-start xl:flex-row lg:space-x-10 relative justify-center py-24 bg-background2'>
      <div className='relative px-10 mt-24 xl:mt-0 hidden xl:block'>
        <img
          src='	https://html.themexriver.com/Archix/assets/img/about/ab2.jpg'
          alt='img'
          className='w-full h-full'
        />
        <div className='absolute h-10 w-24 bg-background2 right-0 top-0'></div>
        <div className='absolute h-10 w-24 bg-background2 right-24 top-10'></div>
        <div className='absolute h-10 w-24 bg-background2 right-0 top-20'></div>
        <div className='absolute h-10 w-24 bg-background2 left-0 bottom-0'></div>
        <div className='absolute h-10 w-24 bg-background2 left-24 bottom-10'></div>
        <div className='absolute h-10 w-24 bg-background2 left-0 bottom-20'></div>
      </div>
      <div className='px-2'>
        <p className='text-primary font-semibold text-xl pl-4'>Our Team</p>
        <p className=' text-gray-400 text-xl w-full pl-4 pr-8 xl:w-96 mt-7 h-64'>
          {TEAM[teamMember].about}
        </p>
        <img src={TEAM[teamMember].img} alt='img' className='mt-10 h-56 pl-4' />
        <p className='mt-3 text-xl font-bold text-primary pl-4'>
          {TEAM[teamMember].name}
        </p>
        <p className='font-bold pl-4'>{TEAM[teamMember].designation}</p>
      </div>
      <div className='flex flex-col items-end justify-end space-y-2 absolute right-4 xl:right-10 top-1/3'>
        {TEAM.map((team, index) => (
          <div
            className={`${
              index === teamMember ? 'bg-primary' : 'bg-background'
            } h-6 w-2`}
            onClick={() => setTeamMember(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Homepage6;
