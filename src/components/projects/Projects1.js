import React from 'react';
import './Project1.css';

const Project1 = () => {
  return (
    <div className='w-full py-[100px]'>
      <div className='flex flex-col md:flex-row gap-x-20 justify-center w-full px-4 md:px-10 lg:px-0'>
        <div>
          <ul
            className='nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 text-2xl'
            id='tabs-tab3'
            role='tablist'
          >
            <li className='nav-item' role='presentation'>
              <a
                href='#tabs-home3'
                className='
                nav-link
                w-full
                block
                font-medium
                text-xs
                leading-tight
                uppercase
                border-x-0 border-t-0 border-b-2 border-transparent
                px-6
                py-3
                my-2
                hover:border-transparent hover:bg-primary
                focus:border-transparent
                active'
                id='tabs-home-tab3'
                data-bs-toggle='pill'
                data-bs-target='#tabs-home3'
                role='tab'
                aria-controls='tabs-home3'
                aria-selected='true'
                color='#F8C784'
              >
                All
              </a>
            </li>
            <li className='nav-item' role='presentation'>
              <a
                href='#tabs-profile3'
                className='
                nav-link
                w-full
                block
                font-medium
                text-xs
                leading-tight
                uppercase
                border-x-0 border-t-0 border-b-2 border-transparent
                px-6
                py-3
                my-2
                hover:border-transparent  hover:bg-primary
                focus:border-transparent'
                id='tabs-profile-tab3'
                data-bs-toggle='pill'
                data-bs-target='#tabs-profile3'
                role='tab'
                aria-controls='tabs-profile3'
                aria-selected='false'
              >
                Interiors
              </a>
            </li>
            <li className='nav-item' role='presentation'>
              <a
                href='#tabs-messages3'
                className='
                nav-link
                w-full
                block
                font-medium
                text-xs
                leading-tight
                uppercase
                border-x-0 border-t-0 border-b-2 border-transparent
                px-6
                py-3
                my-2
                hover:border-transparent  hover:bg-primary
                focus:border-transparent
                '
                id='tabs-messages-tab3'
                data-bs-toggle='pill'
                data-bs-target='#tabs-messages3'
                role='tab'
                aria-controls='tabs-messages3'
                aria-selected='false'
              >
                3D Design
              </a>
            </li>
            <li className='nav-item' role='presentation'>
              <a
                href='#tabs-messages4'
                className='
                nav-link
                w-full
                block
                font-medium
                text-xs
                leading-tight
                uppercase
                border-x-0 border-t-0 border-b-2 border-transparent
                px-6
                py-3
                my-2
                hover:border-transparent  hover:bg-primary
                focus:border-transparent
                '
                id='tabs-messages-tab4'
                data-bs-toggle='pill'
                data-bs-target='#tabs-messages4'
                role='tab'
                aria-controls='tabs-messages4'
                aria-selected='false'
              >
                Building
              </a>
            </li>
            <li className='nav-item' role='presentation'>
              <a
                href='#tabs-messages5'
                className='
                nav-link
                w-full
                block
                font-medium
                text-xs
                leading-tight
                uppercase
                border-x-0 border-t-0 border-b-2 border-transparent
                px-6
                py-3
                my-2
                hover:border-transparent  hover:bg-primary
                focus:border-transparent
                '
                id='tabs-messages-tab5'
                data-bs-toggle='pill'
                data-bs-target='#tabs-messages5'
                role='tab'
                aria-controls='tabs-messages5'
                aria-selected='false'
              >
                House & Exterior
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='tab-content' id='tabs-tabContent3'>
        <div
          className='tab-pane fade show active'
          id='tabs-home3'
          role='tabpanel'
          aria-labelledby='tabs-home-tab3'
        >
          <div className='container'>
            <div class='box'>
              <div className='imgBx'>
                <img
                  src='https://html.themexriver.com/Archix/assets/img/project/pro1.jpg'
                  alt='img'
                />
              </div>
              <div class='content'>
                <div>
                  <h2 className='text-primary font-bold'>Mixitu Duplex Home</h2>
                  <p>
                    Information architecture helps organize content overall so
                    it’s easy to find and use. Imagine a storeroom filled to the
                    brim with things these things are all related to sports.
                  </p>
                </div>
              </div>
            </div>
            <div className='box'>
              <div class='imgBx'>
                <img
                  src='https://html.themexriver.com/Archix/assets/img/project/pro2.jpg'
                  alt='img'
                />
              </div>
              <div className='content'>
                <div>
                  <h2 className='text-primary font-bold'>Mixitu Duplex Home</h2>
                  <p>
                    Information architecture helps organize content overall so
                    it’s easy to find and use. Imagine a storeroom filled to the
                    brim with things these things are all related to sports.
                  </p>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='imgBx'>
                <img
                  src='https://html.themexriver.com/Archix/assets/img/project/pro3.jpg'
                  alt='img'
                />
              </div>
              <div className='content'>
                <div>
                  <h2 className='text-primary font-bold'>Mixitu Duplex Home</h2>
                  <p>
                    Information architecture helps organize content overall so
                    it’s easy to find and use. Imagine a storeroom filled to the
                    brim with things these things are all related to sports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='tabs-profile3'
          role='tabpanel'
          aria-labelledby='tabs-profile-tab3'
        >
          <div className='container'>
            <div class='box'>
              <div className='imgBx'>
                <img
                  src='https://html.themexriver.com/Archix/assets/img/project/pro1.jpg'
                  alt='img'
                />
              </div>
              <div class='content'>
                <div>
                  <h2 className='text-primary font-bold'>Mixitu Duplex Home</h2>
                  <p>
                    Information architecture helps organize content overall so
                    it’s easy to find and use. Imagine a storeroom filled to the
                    brim with things these things are all related to sports.
                  </p>
                </div>
              </div>
            </div>
            <div className='box'>
              <div class='imgBx'>
                <img
                  src='https://html.themexriver.com/Archix/assets/img/project/pro2.jpg'
                  alt='img'
                />
              </div>
              <div className='content'>
                <div>
                  <h2 className='text-primary font-bold'>Mixitu Duplex Home</h2>
                  <p>
                    Information architecture helps organize content overall so
                    it’s easy to find and use. Imagine a storeroom filled to the
                    brim with things these things are all related to sports.
                  </p>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='imgBx'>
                <img
                  src='https://html.themexriver.com/Archix/assets/img/project/pro3.jpg'
                  alt='img'
                />
              </div>
              <div className='content'>
                <div>
                  <h2 className='text-primary font-bold'>Mixitu Duplex Home</h2>
                  <p>
                    Information architecture helps organize content overall so
                    it’s easy to find and use. Imagine a storeroom filled to the
                    brim with things these things are all related to sports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='tabs-messages3'
          role='tabpanel'
          aria-labelledby='tabs-profile-tab3'
        >
          <div className='container'>
            <div class='box'>
              <div className='imgBx'>
                <img
                  src='https://html.themexriver.com/Archix/assets/img/project/pro1.jpg'
                  alt='img'
                />
              </div>
              <div class='content'>
                <div>
                  <h2 className='text-primary font-bold'>Mixitu Duplex Home</h2>
                  <p>
                    Information architecture helps organize content overall so
                    it’s easy to find and use. Imagine a storeroom filled to the
                    brim with things these things are all related to sports.
                  </p>
                </div>
              </div>
            </div>
            <div className='box'>
              <div class='imgBx'>
                <img
                  src='https://html.themexriver.com/Archix/assets/img/project/pro2.jpg'
                  alt='img'
                />
              </div>
              <div className='content'>
                <div>
                  <h2 className='text-primary font-bold'>Mixitu Duplex Home</h2>
                  <p>
                    Information architecture helps organize content overall so
                    it’s easy to find and use. Imagine a storeroom filled to the
                    brim with things these things are all related to sports.
                  </p>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='imgBx'>
                <img
                  src='https://html.themexriver.com/Archix/assets/img/project/pro3.jpg'
                  alt='img'
                />
              </div>
              <div className='content'>
                <div>
                  <h2 className='text-primary font-bold'>Mixitu Duplex Home</h2>
                  <p>
                    Information architecture helps organize content overall so
                    it’s easy to find and use. Imagine a storeroom filled to the
                    brim with things these things are all related to sports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='tabs-messages4'
          role='tabpanel'
          aria-labelledby='tabs-profile-tab4'
        >
          <div className='container'>
            <div class='box'>
              <div className='imgBx'>
                <img
                  src='https://html.themexriver.com/Archix/assets/img/project/pro1.jpg'
                  alt='img'
                />
              </div>
              <div class='content'>
                <div>
                  <h2 className='text-primary font-bold'>Mixitu Duplex Home</h2>
                  <p>
                    Information architecture helps organize content overall so
                    it’s easy to find and use. Imagine a storeroom filled to the
                    brim with things these things are all related to sports.
                  </p>
                </div>
              </div>
            </div>
            <div className='box'>
              <div class='imgBx'>
                <img
                  src='https://html.themexriver.com/Archix/assets/img/project/pro2.jpg'
                  alt='img'
                />
              </div>
              <div className='content'>
                <div>
                  <h2 className='text-primary font-bold'>Mixitu Duplex Home</h2>
                  <p>
                    Information architecture helps organize content overall so
                    it’s easy to find and use. Imagine a storeroom filled to the
                    brim with things these things are all related to sports.
                  </p>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='imgBx'>
                <img
                  src='https://html.themexriver.com/Archix/assets/img/project/pro3.jpg'
                  alt='img'
                />
              </div>
              <div className='content'>
                <div>
                  <h2 className='text-primary font-bold'>Mixitu Duplex Home</h2>
                  <p>
                    Information architecture helps organize content overall so
                    it’s easy to find and use. Imagine a storeroom filled to the
                    brim with things these things are all related to sports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='tabs-messages5'
          role='tabpanel'
          aria-labelledby='tabs-profile-tab5'
        >
          <div className='container'>
            <div class='box'>
              <div className='imgBx'>
                <img
                  src='https://html.themexriver.com/Archix/assets/img/project/pro1.jpg'
                  alt='img'
                />
              </div>
              <div class='content'>
                <div>
                  <h2 className='text-primary font-bold'>Mixitu Duplex Home</h2>
                  <p>
                    Information architecture helps organize content overall so
                    it’s easy to find and use. Imagine a storeroom filled to the
                    brim with things these things are all related to sports.
                  </p>
                </div>
              </div>
            </div>
            <div className='box'>
              <div class='imgBx'>
                <img
                  src='https://html.themexriver.com/Archix/assets/img/project/pro2.jpg'
                  alt='img'
                />
              </div>
              <div className='content'>
                <div>
                  <h2 className='text-primary font-bold'>Mixitu Duplex Home</h2>
                  <p>
                    Information architecture helps organize content overall so
                    it’s easy to find and use. Imagine a storeroom filled to the
                    brim with things these things are all related to sports.
                  </p>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='imgBx'>
                <img
                  src='https://html.themexriver.com/Archix/assets/img/project/pro3.jpg'
                  alt='img'
                />
              </div>
              <div className='content'>
                <div>
                  <h2 className='text-primary font-bold'>Mixitu Duplex Home</h2>
                  <p>
                    Information architecture helps organize content overall so
                    it’s easy to find and use. Imagine a storeroom filled to the
                    brim with things these things are all related to sports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
