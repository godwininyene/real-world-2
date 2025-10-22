import React, { useRef, useState } from 'react';
import { modifyStreamUrl, playVideo } from '../utils/streamUrlUtils';

// Import all images from assets
import aiIcon from '../assets/images/ai_icon.svg';
import altcoinIcon from '../assets/images/altcoin_icon.svg';
import businessIcon from '../assets/images/business_icon.svg';
import cacmIcon from '../assets/images/cacm_icon.svg';
import ccIcon from '../assets/images/cc_icon.svg';
import copywritingIcon from '../assets/images/copywriting_icon.svg';
import cryptoIcon from '../assets/images/crypto_icon.svg';
import ecommerceIcon from '../assets/images/ecommerce_icon.svg';
import fitnessIcon from '../assets/images/fitness_icon.svg';

import aiImage from '../assets/images/ai_1.png';
import altcoinImage from '../assets/images/altcoin_campus.png';
import businessImage from '../assets/images/business_1.png';
import cacmImage from '../assets/images/cacm_1.png';
import ccImage from '../assets/images/cc_1.png';
import copywritingImage from '../assets/images/copywriting_1.png';
import cryptoImage from '../assets/images/crypto_1.png';
import ecommerceImage from '../assets/images/ecommerce_1.png';
import fitnessImage from '../assets/images/fitness_1.png';

import campusBg from '../assets/images/campus_bg.png';
import newSkillsIcon from '../assets/images/new_skills.svg';

const Campuses = () => {
  const campuses = [
    {
      icon: aiIcon,
      title: 'A.I Automated Agency',
      description: 'We teach anybody, even with limited technical knowledge, the skills required to build AI systems. Sell the system to people with online companies or start an online company run by your own AI.',
      video: 'https://iframe.cloudflarestream.com/2a360768c8477c4b3c94bd42ab1c0200',
      image: aiImage
    },
    {
      icon: altcoinIcon,
      title: 'Altcoin Campus',
      description: 'The Real World Altcoin Campus trains warriors. Turn $20 into $7,000 with expert guidance. High-risk, calculated moves—never gambling.',
      video: 'https://iframe.cloudflarestream.com/1c7793665e93644101f8ec2f88cbb76d',
      image: altcoinImage
    },
    {
      icon: businessIcon,
      title: 'Business Mastery',
      description: 'The Real World Business mastery and diplomacy training is about mastering the art of leadership and scaling operations to make more money.',
      video: 'https://iframe.cloudflarestream.com/5fcdf4882b4545a84028222066db817b',
      image: businessImage
    },
    {
      icon: cacmIcon,
      title: 'Client Acquisition + SM',
      description: 'Acquire, retain, and grow your client base with strategies that are as effective as they are explosive in the Client Acquisition + SM Campus.',
      video: 'https://iframe.cloudflarestream.com/482573672d803ef649d65c1a7e04db7c',
      image: cacmImage
    },
    {
      icon: ccIcon,
      title: 'Content Creation',
      description: 'In the age of technology, the value of videos and landing pages surpass the worth of real estate. It\'s crucial to leverage digital assets and we will teach you how.',
      video: 'https://iframe.cloudflarestream.com/bb671f136b1d46366aa8c4086023ee13',
      image: ccImage
    },
    {
      icon: copywritingIcon,
      title: 'Copywriting',
      description: 'Words are your warriors, and every sentence is a strategy. Master the craft of copywriting with us, and you\'ll learn to turn prose into profit.',
      video: 'https://iframe.cloudflarestream.com/a3275cb75cdc1f06b646942fc851b7ce',
      image: copywritingImage
    },
    {
      icon: cryptoIcon,
      title: 'Crypto Investing',
      description: 'Within the Cryptocurrency campus you have real time information to not only the professor but also 155,000+ other students. This allows you to identify trends and what influences the price of coins.',
      video: 'https://iframe.cloudflarestream.com/7e8cc9214c4439622f86d38ff9188672',
      image: cryptoImage
    },
    {
      icon: ecommerceIcon,
      title: 'E-Commerce',
      description: 'Imagine launching a store and instantly connecting with the global market by morning. Online commerce acts as your gateway to rapid retail success.',
      video: 'https://iframe.cloudflarestream.com/545525ce2ac830b7bde6c45217b33d89',
      image: ecommerceImage
    },
    {
      icon: fitnessIcon,
      title: 'Fitness',
      description: 'A strong body is a strong mind. The Real World contains a complete fitness campus including personal trainers and meal plans. Health is wealth.',
      video: 'https://iframe.cloudflarestream.com/8263a16581555008e1eae4003dbfbe22',
      image: fitnessImage
    }
  ];

  const CampusCard = ({ campus, index }) => {
    const campusVideoUrl = modifyStreamUrl(campus.video);
    const videoRef = useRef(null);
    const [videoPlaying, setVideoPlaying] = useState(false);

    const handlePlay = () => {
      playVideo(videoRef.current);
      setVideoPlaying(true);
    };

    return (
      <article key={index} className="bg-[#09111B] hover:bg-[#171D27] group relative campus duration-300 transition-all rounded-sm">
        <div className="lg:h-[260px] pb-6 relative">
          <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 w-0 group-hover:w-full h-0 group-hover:h-[1px] duration-300 transition-all"
            style={{ background: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.54) 52%, rgba(255, 255, 255, 0) 89%)' }}>
          </div>
          <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 h-0 group-hover:h-full wh-0 group-hover:w-[1px] duration-300 transition-all"
            style={{ background: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.63) 20%, rgba(255, 255, 255, 0) 38%)' }}>
          </div>
          <img alt="Campus Background" loading="lazy" width="577" height="406" decoding="async"
            className="w-full h-full absolute top-0 left-0 z-0 lg:opacity-0 group-hover:opacity-100 transition-all duration-500"
            srcSet={`${campusBg} 1x, ${campusBg} 2x`}
            src={campusBg} style={{ color: 'transparent' }} />
          <figure className="pt-6 px-6 z-10 relative">
            <img alt={`${campus.title} Icon`} loading="lazy" width="20" height="20" decoding="async"
              src={campus.icon} style={{ color: 'transparent' }} />
          </figure>
          <div className="title px-6 mt-8 gradient-text capitalize z-10 relative switzer">{campus.title}</div>
          <div className="description group-hover:text-white mt-4 px-6 z-10 relative switzer">
            <span>{campus.description}</span>
          </div>
        </div>
        <figure className="lg:h-[240px]">
          <div className="relative">
            <div className="w-full relative">
              <div className="relative max-w-[100%]">
                <div className="w-full h-full hidden lg:block undefined" style={{ position: 'relative', paddingTop: '56.25%' }}>
                  <iframe
                    ref={videoRef}
                    src={campusVideoUrl}
                    frameBorder="0" height="100%" width="100%"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowFullScreen=""
                    style={{ position: 'absolute', inset: '0px', height: '100%', width: '100%' }}></iframe>
                </div>
                {!videoPlaying && (
                  <div 
                    className="absolute top-0 left-0 h-full w-full bg-top bg-cover bg-[rgba(0,0,0,.6)] cursor-pointer"
                    onClick={handlePlay}
                  >
                    <img alt="Overlay Placeholder" loading="lazy" width="1200" height="1200" decoding="async"
                      className="w-full h-full object-fill"
                      srcSet={`${campus.image} 1x, ${campus.image} 2x`}
                      src={campus.image} style={{ color: 'transparent' }} />
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="absolute h-[65px] w-[65px] lg:h-[83px] lg:w-[83px] cursor-pointer text-white"
                      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                      style={{ top: 'calc(50% - 32px)', left: 'calc(50% - 32px)' }}>
                      <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </figure>
      </article>
    );
  };

  return (
    <>
      <section className="hidden lg:block w-full relative mt-24 lg:mt-0 mb-[80px] lg:mb-[126px] z-20">
        <div className="lg:block w-full absolute top-0 left-0 z-0 max-h-[1800px] bg-background">
          <div className="top-fade-b pointer-events-none"></div>
          <div className="left-fade-b pointer-events-none"></div>
          <div className="right-fade-b pointer-events-none"></div>
          <div className="bottom-fade-b pointer-events-none"></div>
        </div>
        <div style={{ opacity: 1, transform: 'translateY(0px)' }}>
          <div className="z-10 relative px-4">
            <h3 className="uppercase switzer text-center mb-3">the real world campuses</h3>
            <h2 className="capitalize switzer tracking-[-1px] lg:tracking-[-3px] text-center texture-text">
              <span className="gradient-text-2">10+</span> wealth creation methods
            </h2>
          </div>
          <div className="px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative max-w-[1280px] mx-auto gap-6 lg:gap-[2px] mt-8">
            {campuses.map((campus, index) => (
              <CampusCard key={index} campus={campus} index={index} />
            ))}
          </div>
          <div className="flex mx-auto items-center justify-center mb-2 mt-12 gap-4">
            <img alt="New Skills Added Regularly" loading="lazy" width="28" height="28" decoding="async"
              src={newSkillsIcon} style={{ color: 'transparent' }} />
            <h5 className="gradient-text capitalize switzer">new skills added regularly</h5>
          </div>
          <p className="px-4 text-center switzer">
            When a new technology revolutionises an industry,<br /><br />
            <span className="font-bold text-white">The Real World will be the first and only place to teach you how to take advantage of it.</span>
            <br /><br />
            Our students receive the latest information at 8am every day.
          </p>
        </div>
      </section>

      <section className="lg:hidden w-full relative mt-24 lg:mt-0 mb-[80px] lg:mb-[126px] z-50">
        <div style={{ opacity: 1, transform: 'translateY(0px)' }}>
          <div className="z-10 relative px-4">
            <h3 className="uppercase text-center mb-3">THE REAL WORLD CAMPUSES</h3>
            <h2 className="text-center texture-text capitalize switzer tracking-[-1px]">
              <span className="gradient-text texture-text">10+ wealth creation methods</span>
            </h2>
          </div>
          <div className="px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative max-w-[1280px] mx-auto gap-6 lg:gap-[2px] mt-8 relative">
            {campuses.map((campus, index) => (
              <CampusCard key={index} campus={campus} index={index} />
            ))}
          </div>
          <div className="flex mx-auto items-center justify-center mb-2 mt-12 gap-4 px-4">
            <img alt="New Skills Added Regularly" loading="lazy" width="28" height="28" decoding="async"
              src={newSkillsIcon} style={{ color: 'transparent' }} />
            <h5 className="gradient-text !text-[16px]">NEW SKILLS REGULARLY ADDED</h5>
          </div>
          <p className="px-4 text-center">
            When a new technology revolutionises an industry,<br /><br />
            <span className="font-bold text-white">The Real World will be the first and only place to teach you how to take advantage of it.</span>
            <br /><br />
            Our students receive the latest information at 8am every day.
          </p>
        </div>
      </section>
    </>
  );
};

export default Campuses;