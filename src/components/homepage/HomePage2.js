import React, { useState } from 'react';
import Styles from './HomePage2.module.css';

const HomePage2 = () => {
  const [active, setActive] = useState(0);
  const CONTENT = [
    {
      title: 'Architect Design',
      description: [
        'Site Selection and Analysis',
        'Conceptualization and Design Development',
        'Programming & Planning of Functions',
        'Cost Evaluation & Preparation of Schedule of Quantities',
        'Planning & Dealing',
        'Project & Detailing',
      ],
      logo: 'https://html.themexriver.com/Archix/assets/icon/ic1.png',
      img: 'https://html.themexriver.com/Archix/assets/img/service/ser1.jpg',
    },
    {
      title: 'Interior Design',
      description: [
        'Work Analysis',
        'Interior Space Planning',
        'Detail Interior Designing',
        'Furniture & Product Designing',
        'Preparation of Schedule of Quantites',
        'Supervision & Coordination',
      ],
      logo: 'https://html.themexriver.com/Archix/assets/icon/ic2.png',
      img: 'https://html.themexriver.com/Archix/assets/img/service/ser1.jpg',
    },
    {
      title: 'Urban Planning',
      description: [
        'Physical Socio-Economic Survey & Feasibility Analysis',
        'Incorporating all Stakeholders and Encourage community Participation',
        'Program Formulation in conjuction with Phasing Strategy',
        'Preparation of Master plan & Detail Urban Design Guidelines',
        'Proposing and Assisting in Implementation Strategy',
        'Propose Speculative Development',
      ],
      logo: 'https://html.themexriver.com/Archix/assets/icon/ic3.png',
      img: 'https://html.themexriver.com/Archix/assets/img/service/ser1.jpg',
    },
    {
      title: '3D Services',
      description: [
        '3D Views External',
        '3D Views Internal',
        'Augmented/Virtual Graphic Presentation',
        'Walk through',
      ],
      logo: 'https://html.themexriver.com/Archix/assets/icon/ic3.png',
      img: 'https://html.themexriver.com/Archix/assets/img/service/ser1.jpg',
    },
    {
      title: 'Project Management',
      description: [
        'Project Speculation & Feasability Reports',
        'Planning and Scheduling',
        'Monitoring Tenders & Bidding Processes all Control Manangement',
        'Coordination of all Stack holders, Vendors & Suppliers',
        'Project Inspection,Testing & Completion project flow vendor management',
      ],
      logo: 'https://html.themexriver.com/Archix/assets/icon/ic2.png',
      img: 'https://html.themexriver.com/Archix/assets/img/service/ser1.jpg',
    },
    {
      title: 'Engineering',
      description: [
        'Structural Design',
        'HVAC(Heating, Ventilation & Air Conditioning',
        'Energy Conservation Design',
        'Electrical Systems & Plumbing Design',
        'Fire & Life Safety Design & Infrastructure Planning',
        'Waste Management Systems',
        'Building Management Systems',
        'Lighting Design',
      ],
      logo: 'https://html.themexriver.com/Archix/assets/icon/ic1.png',
      img: 'https://html.themexriver.com/Archix/assets/img/service/ser1.jpg',
    },
  ];
  return (
    <div className='flex flex-col items-center bg-background2 py-10'>
      <p className='text-primary font-semibold'>Services</p>
      <div className='text-4xl font-bold mt-3 text-center'>
        <p>Services We Offer</p>
      </div>
      <div
        className={`${Styles.homepage2} flex justify-center items-center mt-12`}
      >
        <div
          className={`${Styles.section} flex flex-col lg:flex-row bg-white w-full lg:w-5/6 lg:flex-wrap md:mt-0 mx-3 md:mx-0`}
        >
          {CONTENT.map((content, index) => (
            <div
              onMouseEnter={() => setActive(index)}
              key={index}
              className={`${
                active === index ? 'text-white' : ''
              }  lg:w-1/3 p-6 flex flex-col justify-between relative overflow-hidden`}
            >
              {active === index && (
                <img
                  src={content.img}
                  alt='img'
                  className={`${Styles.imageScale} brightness-50 absolute top-0 left-0 w-full h-full`}
                />
              )}
              <div className={`${Styles.horizontalBorder} bg-primary`}></div>
              <div className={`${Styles.verticalBorder} bg-primary`}></div>
              <div className='mt-10 flex justify-center z-10'>
                <img src={content.logo} alt='logo' />
              </div>
              <p className='font-bold text-xl flex justify-center text-center z-10 mt-10 lg:mt-0'>
                {content.title}
              </p>
              <p
                className={`${
                  active === index ? 'text-gray-200' : 'text-gray-400'
                } flex flex-col pl-6 mt-10 lg:mt-4 z-10 text-sm`}
              >
                {content.description.map((des, i) => (
                  <span className='flex space-x-1' key={i}>
                    <span className='font-semibold'>{i + 1}.</span> <span>{des}</span>
                  </span>
                ))}
              </p>
              <p className='text-primary text-6xl font-bold flex justify-end mt-10 lg:mt-0 z-10'>
                0{index + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage2;
