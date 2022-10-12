import React from 'react';
import emoji from '../public/images/icons/emoji.png';
import Image from 'next/image';
export default function CoreFeatureSection({ accordionData }) {
  return (
    <>
      <section
        data-section='features'
        className='col-span-12 container h-fit py-10 xl:pb-28 z-30 bg-white'
      >
        <div className='col-start-2 col-span-10 3xl:col-start-3 3xl:col-span-8  flex flex-col gap-4 lg:flex-row lg:justify-between lg:gap-6'>
          {/* Feature image */}
          <figure className='place-self-center xl:w-full'>
            <img
              className='object-fit'
              src={'../images/messenger.png'}
              width={750}
              height={850}
              layout='intrinsic'
              alt='premium feature'
            />
          </figure>

          {/* Feature description */}
          <div className='flex flex-col gap-8 lg:w-[65%] 2xl:w-[75%]'>
            {/* Intro */}
            <div className='flex flex-col gap-4 md:items-center lg:items-start'>
              <h2 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl text-heading-base font-bold text-start md:text-center lg:text-start'>
                <span className='md:block lg:inline'>
                  Meet our premium features that
                </span>
                <span> will make you wow</span>
                <figure className='inline-block pl-4 relative  top-2'>
                  <Image
                    src={emoji}
                    alt='arrow right'
                    width={32}
                    height={32}
                    layout='intrinsic'
                  />
                </figure>
              </h2>

              <p className='text-heading-base text-start md:text-center lg:text-start font-light leading-7 md:text-lg max-w-md md:max-w-lg '>
                Build an incredible workplace and grow your business with
                Gusto's all-in-one platform with amazing contents.
              </p>
            </div>
            {/* Intro End  */}

            {/* Accordion  */}
            <div className='flex flex-col gap-4  xl-gap-6'>
              {accordionData.map(({ heading, desc }) => (
                <Accordion key={heading} heading={heading} description={desc} />
              ))}
            </div>
            {/* Accordion End*/}
          </div>
          {/* Feature description End */}
        </div>
      </section>
    </>
  );
}
function Accordion({ heading, description }) {
  const handleOpen = (e) => {
    const accordion = e.target;
    const allAccordions = [...accordion.parentElement.children];
    const content = accordion.querySelector('p');
    const arrow = accordion.querySelector('figure');

    allAccordions.forEach((element) => {
      element.querySelector('p').classList.remove('active');
      element.querySelector('figure').classList.remove('active');
      element.classList.remove('active');
    });
    accordion.classList.add('active');
    content.classList.add('active');
    arrow.classList.add('active');
  };
  return (
    <div
      className=' bg-background-secondary py-4 px-5 sm:py-6 sm:px-8 xl:py-8 w-full h-[4.5rem] [&.active]:h-[11rem] flex flex-col gap-3 rounded-lg [&.active]:bg-background-base drop-shadow-md hover:drop-shadow-xl [&.active]:drop-shadow-xl  transition-all duration-1000 cursor-pointer overflow-hidden'
      onClick={handleOpen}
    >
      <h3 className='text-bodytxt-secondary text-[.65rem] sm:text-sm lg:text-lg font-bold flex items-center justify-between pointer-events-none'>
        <span>{heading}</span>
        <figure className='opacity-100 [&.active]:rotate-90 [&.active]:scale-75  transition-transform duration-700'>
          <img
            src={'../images/icons/right-arrow.png'}
            alt={'help and support icon'}
          />
        </figure>
      </h3>

      <p className='text-heading-base font-light leading-7 md:text-lg max-w-md md:max-w-lg opacity-0 relative translate-y-[-40%] [&.active]:translate-y-[0%] [&.active]:opacity-100 pointer-events-none transition-all duration-[.84s]'>
        {description}
      </p>
    </div>
  );
}
