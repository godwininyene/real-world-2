import React from 'react';
import { Link } from 'react-router-dom';

const ExclusiveFeatures = () => {
  const features = [
    {
      image: '/_next/image/feature1_2.png',
      title: 'step-by-step learning',
      items: [
        { text: 'Easy to follow program for financial success', bold: true },
        { text: 'New high income skills constantly added' },
        { text: 'Learn with our hyper advanced application' }
      ]
    },
    {
      image: '/_next/image/feature2_2.png',
      title: 'daily live sessions',
      items: [
        { text: 'Daily live sessions with millionaire coaches', bold: true },
        { text: 'Scale from Zero to $10k/month as fast as possible', boldPart: 'Zero to $10k/month' },
        { text: 'Network with 155,000+ students', boldPart: '155,000+ students' }
      ]
    },
    {
      image: '/_next/image/feature3_2.png',
      title: 'an exclusive community',
      items: [
        { text: 'Mentors are hyper-successful experts in their field', boldPart: 'hyper-successful' },
        { text: 'Get mentored every step of your journey', boldPart: 'mentored every step' },
        { text: 'Network with 155,000+ students', boldPart: '155,000+ students' }
      ]
    }
  ];

  const FeatureCard = ({ feature, index }) => (
    <div key={index} className="access border-[7px] py-4 px-2 lg:p-0 border-[rgba(255,255,255,.07)] hover:border-[#ffffff4d] hover:bg-[#d9d9d90f] bg-[#d9d9d908] flex flex-col lg:flex-row relative items-center group transition-all duration-500 rounded-[25px]">
      <figure className="relative my-[-50px]">
        <div className="smallglow !top-[30px] lg:!top-[50px] pointer-events-none"></div>
        <img alt={feature.title} loading="lazy" width="571" height="345" decoding="async"
          className="relative z-10 mt-4 lg:mt-0 p-8"
          srcSet={`${feature.image} 1x, ${feature.image} 2x`}
          src={feature.image} style={{ color: 'transparent' }} />
      </figure>
      <div className="flex flex-col gap-2 py-4 lg:py-8 lg:pl-8">
        <div className="title pl-4 lg:pl-0 switzer capitalize">{feature.title}</div>
        {feature.items.map((item, itemIndex) => (
          <div key={itemIndex} className="description group-hover:bg-[#ffffff29] transition-all duration-500">
            <img alt="Checkmark" loading="lazy" width="32" height="32" decoding="async"
              className="pr-2" src="/check.svg" style={{ color: 'transparent' }} />
            <span className="switzer">
              {item.bold ? (
                <span className="text-white font-bold">{item.text}</span>
              ) : item.boldPart ? (
                <>
                  {item.text.split(item.boldPart)[0]}
                  <span className="text-white font-bold">{item.boldPart}</span>
                  {item.text.split(item.boldPart)[1]}
                </>
              ) : (
                <span>{item.text}</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="">
      <div style={{ opacity: 1, transform: 'translateY(0px)' }}>
        <div className="z-10 relative px-4">
          <div className="absolute top-0 left-0 z-0 pointer-events-none w-full flex justify-center">
            <img alt="Background C" loading="lazy" width="1728" height="1669" decoding="async"
              className="w-full lg:w-full h-[800px] lg:h-auto mx-auto"
              srcSet="/_next/image/hero_bg.png 1x, /_next/image/hero_bg.png 2x"
              src="/_next/image/hero_bg.png" style={{ color: 'transparent' }} />
            <div className="top-fade-b pointer-events-none"></div>
            <div className="bottom-fade-b pointer-events-none"></div>
            <div className="right-fade-b pointer-events-none"></div>
            <div className="left-fade-b pointer-events-none"></div>
          </div>
          <h3 className="uppercase text-center text-[16px] mb-2 hidden lg:block relative z-10">EXCLUSIVE FEATURES</h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4 relative z-10">
            <img alt="Exclusive Features" loading="lazy" width="40" height="52" decoding="async"
              className="h-[30px] lg:h-[52px]" src="/exclusive_lock.svg" style={{ color: 'transparent' }} />
            <h3 className="uppercase text-center my-2 lg:hidden">EXCLUSIVE FEATURES</h3>
            <h2 className="capitalize switzer tracking-[-1px] lg:tracking-[-3px] text-center gradient-text texture-text max-w-[280px] lg:max-w-[740px] mx-auto lg:mx-0">
              you will get access to
            </h2>
          </div>
          <div className="max-w-[1170px] mx-auto flex flex-col gap-4 mt-6 relative z-10">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full relative z-10 mt-4">
          <Link to='/checkout' className="px-4 relative">
            <div className="button-container duration-500 transition-all w-full group overflow-hidden">
              <img alt="Button Join TRW" loading="lazy" width="380" height="100" decoding="async"
                className="w-[340px] h-[auto]"
                srcSet="/_next/image/button.png 1x, /_next/image/button.png 2x"
                src="/_next/image/button.png" style={{ color: 'transparent' }} />
              <div className="left-[50%] top-[50%] w-[0px] h-[0px] bg-[#ffffff1a] rounded-full group-hover:w-[500px] group-hover:h-[500px] duration-500 transition-all absolute pointer-events-none text-center group-hover:left-[calc(50%-250px)] group-hover:top-[calc(50%-250px)]"
                style={{ willChange: 'height, width, top, left' }}></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveFeatures;