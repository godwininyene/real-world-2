import React from 'react';
import { Link } from 'react-router-dom';

// Import images from assets
import choicesBg from '../assets/images/choices.png';
import clockIcon from '../assets/images/clock.svg';
import checkIcon from '../assets/images/check.svg';
import buttonBad from '../assets/images/button_bad.png';
import pillIcon from '../assets/images/pill.svg';
import shieldIcon from '../assets/images/shield.svg';
import lockIcon from '../assets/images/lock.svg';
import buttonImage from '../assets/images/button.png';

const Choice = () => {
  return (
    <section className="w-full relative z-20 pb-24 lg:pb-[120px] flex flex-col items-center pt-20">
      <div className="h-full w-full absolute top-0 left-0 z-0 pointer-events-none flex justify-center">
        <img alt="Background 1" loading="lazy" width="1728" height="1160" decoding="async"
          className="lg:w-full object-cover"
          srcSet={`${choicesBg} 1x, ${choicesBg} 2x`}
          src={choicesBg} style={{ color: 'transparent' }} />
        <div className="hidden lg:block w-full absolute h-full top-0 left-0"
          style={{ background: 'rgba(0, 0, 0, 0.8)' }}></div>
        <div className="top-fade-b pointer-events-none"></div>
        <div className="hidden lg:block left-fade-b pointer-events-none"></div>
        <div className="hidden lg:block right-fade-b pointer-events-none"></div>
        <div className="bottom-fade-b pointer-events-none"></div>
      </div>
      <div style={{ opacity: 1, transform: 'translateY(0px)' }}>
        <div className="max-w-[1236px] mx-auto">
          <h3 className="uppercase text-center">Take Action</h3>
          <h2 className="capitalize switzer tracking-[-1px] lg:tracking-[-3px] mb-4 lg:mb-8 text-center mx-4 mt-3">
            <span className="gradient-text texture-text">The Choice Is Yours</span>
          </h2>
        </div>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 w-full lg:mt-12 px-4">
          
          {/* Do Nothing Card */}
          <div className="rounded-lg pricesheet border-[1px] border-[#ffffff1a]">
            <div className="flex flex-col items-center">
              <img alt="Clock Icon" loading="lazy" width="49" height="49" decoding="async"
                className="mb-4" src={clockIcon} style={{ color: 'transparent' }} />
              <h2 className="text-center alt gradient-text switzer capitalize">Do Nothing</h2>
              <h3 className="mt-3 switzer">Watch Netflix</h3>
              <div className="w-[240px] mx-auto h-[1px] bg-[#383531] mt-8"></div>
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="price-bad">Lose 8 hours a day</div>
              </div>
              <div className="w-full justify-start">
                <div className="flex items-center description gap-4 mt-6">
                  <img alt="Checkmark" loading="lazy" width="14" height="16" decoding="async"
                    className="w-[22px] h-[18px] lg:w-[14px] lg:h-[16px]" src={checkIcon} style={{ color: 'transparent' }} />
                  <div className="bad">Work for someone else (8h a day)</div>
                </div>
                <div className="flex items-center description gap-4 mt-4">
                  <img alt="Checkmark" loading="lazy" width="14" height="16" decoding="async"
                    className="w-[22px] h-[18px] lg:w-[14px] lg:h-[16px]" src={checkIcon} style={{ color: 'transparent' }} />
                  <div className="bad">Stay stagnant</div>
                </div>
                <div className="flex items-center description gap-4 mt-4">
                  <img alt="Checkmark" loading="lazy" width="14" height="16" decoding="async"
                    className="w-[22px] h-[18px] lg:w-[14px] lg:h-[16px]" src={checkIcon} style={{ color: 'transparent' }} />
                  <div className="bad">Work a 9-5</div>
                </div>
                <div className="flex items-center description gap-4 mt-4">
                  <img alt="Checkmark" loading="lazy" width="14" height="16" decoding="async"
                    className="w-[22px] h-[18px] lg:w-[14px] lg:h-[16px]" src={checkIcon} style={{ color: 'transparent' }} />
                  <div className="bad">Pay $35,000 for University</div>
                </div>
                <div className="flex items-center description gap-4 mt-4">
                  <img alt="Checkmark" loading="lazy" width="14" height="16" decoding="async"
                    className="w-[22px] h-[18px] lg:w-[14px] lg:h-[16px]" src={checkIcon} style={{ color: 'transparent' }} />
                  <div className="bad">Stay unfulfilled</div>
                </div>
                <div className="flex items-center description gap-4 mt-4">
                  <img alt="Checkmark" loading="lazy" width="14" height="16" decoding="async"
                    className="w-[22px] h-[18px] lg:w-[14px] lg:h-[16px]" src={checkIcon} style={{ color: 'transparent' }} />
                  <div className="bad">Hang around losers</div>
                </div>
              </div>
            </div>
            <div className="text-center w-full">
              <Link to='/checkout' className="px-4 relative">
                <div className="button-container bad duration-500 transition-all w-full group overflow-hidden">
                  <img alt="Button Join TRW" loading="lazy" width="380" height="100" decoding="async"
                    className="w-[340px] h-[auto]"
                    srcSet={`${buttonBad} 1x, ${buttonBad} 2x`}
                    src={buttonBad} style={{ color: 'transparent' }} />
                </div>
              </Link>
            </div>
          </div>

          {/* Take Action Card */}
          <div className="rounded-lg pricesheet duration-500 transition-all group border-[1px] border-[#ffffff16]">
            <div className="flex flex-col items-center w-full">
              <img alt="Pill Icon" loading="lazy" width="75" height="59" decoding="async"
                className="mb-4" src={pillIcon} style={{ color: 'transparent' }} />
              <h2 className="text-center gradient-text switzer capitalize">take action</h2>
              <h3 className="mt-3 text-white switzer">Start Earning Today</h3>
              <div className="w-[240px] mx-auto h-[1px] bg-[#383531] mt-8"></div>
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="price gradient-text-2">$49.99</div>
              </div>
              <div className="">
                <div className="flex items-center description gap-4 mt-6">
                  <img alt="Checkmark" loading="lazy" width="14" height="16" decoding="async"
                    className="w-[22px] h-[18px] lg:w-[14px] lg:h-[16px]" src={checkIcon} style={{ color: 'transparent' }} />
                  <div>Simple-step-by-step tutorials</div>
                </div>
                <div className="flex items-center description gap-4 mt-4">
                  <img alt="Checkmark" loading="lazy" width="14" height="16" decoding="async"
                    className="w-[22px] h-[18px] lg:w-[14px] lg:h-[16px]" src={checkIcon} style={{ color: 'transparent' }} />
                  <div>12+ wealth creation methods</div>
                </div>
                <div className="flex items-center description gap-4 mt-4">
                  <img alt="Checkmark" loading="lazy" width="14" height="16" decoding="async"
                    className="w-[22px] h-[18px] lg:w-[14px] lg:h-[16px]" src={checkIcon} style={{ color: 'transparent' }} />
                  <div>Access to millionaire mentors</div>
                </div>
                <div className="flex items-center description gap-4 mt-4">
                  <img alt="Checkmark" loading="lazy" width="14" height="16" decoding="async"
                    className="w-[22px] h-[18px] lg:w-[14px] lg:h-[16px]" src={checkIcon} style={{ color: 'transparent' }} />
                  <div>Connect with 155,000+ others</div>
                </div>
                <div className="flex items-center description gap-4 mt-4">
                  <img alt="Checkmark" loading="lazy" width="14" height="16" decoding="async"
                    className="w-[22px] h-[18px] lg:w-[14px] lg:h-[16px]" src={checkIcon} style={{ color: 'transparent' }} />
                  <div>No experience needed</div>
                </div>
                <div className="flex items-center description gap-4 mt-4">
                  <img alt="Checkmark" loading="lazy" width="14" height="16" decoding="async"
                    className="w-[22px] h-[18px] lg:w-[14px] lg:h-[16px]" src={checkIcon} style={{ color: 'transparent' }} />
                  <div>Custom-made learning app</div>
                </div>
                <div className="w-full h-[1px] bg-[#383531] my-8"></div>
                <div className="flex items-center description gap-4 mt-4">
                  <img alt="Checkmark" loading="lazy" width="18" height="16" decoding="async"
                    className="w-[22px] h-[18px] lg:w-[18px] lg:h-[16px]" src={shieldIcon} style={{ color: 'transparent' }} />
                  <div>Cancel anytime, risk-free</div>
                </div>
                <div className="flex items-center description gap-4 mt-4">
                  <img alt="Checkmark" loading="lazy" width="16" height="20" decoding="async"
                    className="w-[22px] h-[18px] lg:w-[16px] lg:h-[20px]" src={lockIcon} style={{ color: 'transparent' }} />
                  <div className="gradient-text-2">$49.99/month forever</div>
                </div>
                <div className="flex items-center description gap-4 mt-4">
                  <div className="small">Lock in your price before it increases</div>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-30 bg-[#ffbb38] h-48 w-full pointer-events-none rounded-xl absolute bottom-0 left-0 duration-500 transition-all"
                style={{ filter: 'blur(100px)' }}></div>
            </div>
            <div className="text-center w-full">
              <Link to='/checkout' className="px-4 relative">
                <div className="smallglow"></div>
                <div className="button-container duration-500 transition-all w-full group overflow-hidden">
                  <img alt="Button Join TRW" loading="lazy" width="380" height="100" decoding="async"
                    className="w-[340px] h-[auto]"
                    srcSet={`${buttonImage} 1x, ${buttonImage} 2x`}
                    src={buttonImage} style={{ color: 'transparent' }} />
                  <div className="left-[50%] top-[50%] w-[0px] h-[0px] bg-[#ffffff1a] rounded-full group-hover:w-[500px] group-hover:h-[500px] duration-500 transition-all absolute pointer-events-none text-center group-hover:left-[calc(50%-250px)] group-hover:top-[calc(50%-250px)]"
                    style={{ willChange: 'height, width, top, left' }}></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choice;