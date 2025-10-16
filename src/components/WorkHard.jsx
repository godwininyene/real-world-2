import React from 'react';
import { Link } from 'react-router-dom';

const WorkHard = () => {
  return (
    <section className="w-full relative my-[80px] z-50">
      <div className="relative lg:hidden h-[240px] w-full mb-4">
        <div className="w-full flex flex-nowrap h-[240px] my-16 relative scrollelement lg:hidden"
          style={{ transform: 'translateX(-362.414px)', transition: 'transform 0.1s linear' }}>
          {[1, 2, 3, 4, 5, 6].map(num => (
            <img key={num} alt={`Scroll Testimonial ${num}`} loading="lazy" width="288" height="344" decoding="async"
              className="shrink-0 h-[240px] w-[201px]"
              srcSet={`/_next/image/scrollimg${num}.png 1x, /_next/image/scrollimg${num}.png 2x`}
              src={`/_next/image/scrollimg${num}.png`} style={{ color: 'transparent' }} />
          ))}
        </div>
        <div className="top-fade-b pointer-events-none"></div>
        <div className="left-fade-b pointer-events-none"></div>
        <div className="right-fade-b pointer-events-none"></div>
        <div className="bottom-fade-b pointer-events-none"></div>
      </div>
      <div style={{ opacity: 1, transform: 'translateY(0px)' }}>
        <div className="split-info">
          <figure className="lg:hidden w-full absolute top-0 left-0 z-0 opacity-50">
            <img alt="Ask Yourself" loading="lazy" width="934" height="745" decoding="async"
              className="w-full opacity-35 lg:opacity-100 relative z-0"
              srcSet="/_next/image/section3_bg.png 1x, /_next/image/section3_bg.png 2x"
              src="/_next/image/section3_bg.png" style={{ color: 'transparent' }} />
            <div className="top-fade-b pointer-events-none"></div>
            <div className="left-fade-b pointer-events-none"></div>
            <div className="right-fade-b pointer-events-none"></div>
            <div className="bottom-fade-b pointer-events-none"></div>
          </figure>
          <div className="w-full lg:w-[554px] z-10 relative flex flex-col justify-center items-end px-5"
            style={{ placeSelf: 'center end' }}>
            <h3 className="max-w-[554px] uppercase lg:px-0 text-center lg:text-left w-full mb-3 switzer">ASK YOURSELF</h3>
            <h2 className="max-w-[554px] mb-8 px-0 text-center lg:text-left capitalize switzer tracking-[-1px] lg:tracking-[-3px] !text-[40px] lg:!text-[55px]">
              <span className="gradient-text texture-text">are you prepared to work hard?</span>
            </h2>
            <p className="max-w-[554px] text-left switzer">
              <span className="text-white font-bold">Money-making is a skill.</span> Like every other skill it can be learned, and the speed at which it is learned depends on the effort you put in, your coaches and the learning environment you are taught in.<br /><br />
              <span className="text-white font-bold">Our coaches use the business models they teach,</span> they know what it takes to be profitable, and they are the first to identify and utilize new disruptive technologies and strategies whenever they appear.<br /><br />
              <span className="text-white font-bold">There is no better place on the planet to learn how to make money online today.</span>
            </p>
            <div className="flex lg:justify-start max-w-[554px] justify-center w-full mt-4">
              <Link to='/checkout' className="relative">
                <div className="smallglow"></div>
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
          <figure className="hidden lg:block relative">
            <img alt="Ask Yourself" loading="lazy" width="934" height="745" decoding="async"
              className="w-full opacity-35 lg:opacity-100 relative z-0"
              srcSet="/_next/image/section3_bg.png 1x, /_next/image/section3_bg.png 2x"
              src="/_next/image/section3_bg.png" style={{ color: 'transparent' }} />
            <div className="top-fade-b pointer-events-none"></div>
            <div className="left-fade-b pointer-events-none"></div>
            <div className="right-fade-b pointer-events-none"></div>
            <div className="bottom-fade-b pointer-events-none"></div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default WorkHard;