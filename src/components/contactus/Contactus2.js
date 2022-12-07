import React, { useState, useEffect } from 'react';

const Contactus2 = () => {
  const [body, setBody] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState(null);
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);
  const [fullMail, setFullMail] = useState('');
  // const email = "info@swadl.in";
  const toEmail = 'mehlapreeti17@gmail.com';
  const subject = 'Preemade Support';

  useEffect(() => {
    if (firstName && lastName && number && email && body) {
      setShowError(false);
      setFullMail(
        `Name : ${firstName} ${lastName} \n Number : ${number} \n Message : ${body}`
      );
    }
  }, [body, email, firstName, lastName, number]);

  const bodyFunc = (e) => {
    setBody(e.target.value);
  };
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
      <div className='px-2 mt-10 lg:mt-0 '>
        <p className='text-primary font-semibold text-xl pl-4'>Get in Touch</p>
        <p className=' text-gray-800 text-4xl w-full pl-4 lg:w-96 mt-7'>
          Send us your mail
        </p>
        <p className='text-xl text-gray-400 w-full  md:w-[600px] mt-6 pl-4 pr-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor labore et dolore magna aliqua
        </p>
        <form className='mt-6 w-full grid grid-cols-2'>
          <div className='w-full px-4 md:px-0 md:pr-6 mb-6 col-span-2 md:col-span-1'>
            <input
              type='text'
              autocomplete='off'
              placeholder='First Name'
              required
              className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 py-2 rounded-md outline-none w-full h-[55px]'
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='w-full px-4 md:px-0 md:pr-6 mb-6 col-span-2 md:col-span-1'>
            <input
              type='text'
              autocomplete='off'
              placeholder='Last Name'
              required
              className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 py-2 rounded-md outline-none w-full h-[55px]'
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='w-full px-4 md:px-0 md:pr-6 mb-6 col-span-2 md:col-span-1'>
            <input
              type='tel'
              autocomplete='off'
              placeholder='Phone Number'
              required
              className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 py-2 rounded-md outline-none w-full h-[55px]'
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className='w-full px-4 md:px-0 md:pr-6 mb-6 col-span-2 md:col-span-1'>
            <input
              type='email'
              autocomplete='off'
              placeholder='Email'
              required
              className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 py-2 rounded-md outline-none w-full h-[55px]'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='col-span-2 w-full px-4 md:px-0 md:pr-6 mb-6'>
            <textarea
              autocomplete='off'
              placeholder='Message'
              required
              className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 py-2 rounded-md outline-none w-full h-[150px]'
              onChange={bodyFunc}
            />
          </div>

          <div>
            {showError && (
              <p className='text-red-600 -mt-3 mb-4'>
                Please enter all the details
              </p>
            )}
            {firstName && lastName && number && email && body ? (
              <a
                href={`mailto:${toEmail}?subject=${subject || ''}&body=${
                  fullMail || ''
                }`}
                className='mt-6 md:mt-10'
              >
                <button
                  type='button'
                  className='transition-all ease-linear delay-150 duration-300 rounded-xl w-48 h-12 bg-primary text-white font-semibold hover:text-black hover:bg-white'
                >
                  View Works
                </button>
              </a>
            ) : (
              <button
                type='button'
                onClick={() => setShowError(true)}
                className='transition-all ease-linear delay-150 duration-300 rounded-xl w-48 h-12 bg-primary text-white font-semibold hover:text-black hover:bg-white'
              >
                View Works
              </button>
            )}

            <div className='border-2 rounded-xl h-12 -mt-10 ml-2 w-48'></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus2;
