import React, { useRef, useState } from 'react';
import { modifyStreamUrl, playVideo } from '../utils/streamUrlUtils';
import { Link } from 'react-router-dom';

// Import images from assets
import heroBg from '../assets/images/hero_bg.png';
import buttonBad from '../assets/images/button_bad.png';
import vsImage from '../assets/images/vs.png';
import buttonImage from '../assets/images/button.png';

const TwoPaths = () => {
  const videoUrl = modifyStreamUrl(
    'https://iframe.cloudflarestream.com/ded5df3a439e7f8419ccbd653cffae1b'
  );

  const videoRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handlePlay = () => {
    playVideo(videoRef.current);
    setVideoPlaying(true);
  };

  return (
    <section className="w-full relative mb-[80px] lg:mb-[196px] z-20 overflow-hidden">
      <div className="lg:block w-full absolute top-0 left-0 z-0 max-h-[1020px]">
        <img alt="Background C" loading="lazy" width="1728" height="1669" decoding="async"
          className="w-full lg:w-full h-[800px] lg:h-auto mx-auto"
          srcSet={`${heroBg} 1x, ${heroBg} 2x`}
          src={heroBg} style={{ color: 'transparent' }} />
        <div className="top-fade-b pointer-events-none"></div>
        <div className="left-fade-b pointer-events-none"></div>
        <div className="right-fade-b pointer-events-none"></div>
        <div className="bottom-fade-b pointer-events-none"></div>
      </div>
      <div style={{ opacity: 1, transform: 'translateY(0px)' }}>
        <div className="z-10 relative px-4">
          <h3 className="uppercase text-center mb-3 switzer">YOU MUST CHOOSE</h3>
          <h2 className="capitalize switzer tracking-[-1px] lg:tracking-[-3px] text-center gradient-text texture-text max-w-[280px] mx-auto lg:max-w-full !text-[44px] lg:!text-[55px]">
            two paths lie before you
          </h2>
          <div className="max-w-[832px] mx-auto w-full pt-4 relative z-10">
            <div className="relative">
              <div className="w-full relative">
                <div className="relative max-w-[100%]">
                  <div className="w-full h-full hidden lg:block undefined" style={{ position: 'relative', paddingTop: '56.338%' }}>
                    <iframe
                      ref={videoRef}
                      src={videoUrl}
                      frameBorder="0" height="100%" width="100%"
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                      allowFullScreen=""
                      style={{ position: 'absolute', inset: '0px', height: '100%', width: '100%' }}></iframe>
                  </div>
                  {!videoPlaying && (
                    <div 
                      className="absolute top-0 left-0 h-full w-full bg-top bg-cover lg:bg-[rgba(0,0,0,.6)] cursor-pointer"
                      onClick={handlePlay}
                    >
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
          </div>
          <div className="w-full relative max-w-[1280px] mx-auto hidden lg:block">
            <div className="mx-auto relative h-[30px] w-[1px]"
              style={{ background: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.25))' }}>
            </div>
            <div className="h-[1px] w-[54%] bg-white/25 mx-auto relative">
              <div className="absolute top-0 left-0 h-[100px] w-[1px] bg-white/25">
                <div className="absolute bottom-[-15px] left-[-7px] border-[1px] rounded-full p-[5px] border-white/25">
                  <div className="w-[3px] h-[3px] rounded-full bg-white/25"></div>
                </div>
              </div>
              <div className="absolute top-0 right-0 h-[100px] w-[1px]"
                style={{ background: 'linear-gradient(rgba(255, 255, 255, 0.25), rgb(255, 207, 35))' }}>
                <div className="absolute bottom-[-15px] right-[-7px] border-[1px] rounded-full p-[5px] border-[#FFCF23]">
                  <div className="w-[3px] h-[3px] rounded-full bg-[#FFCF23]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative max-w-[1280px] mx-auto lg:hidden">
            <div className="mx-auto relative h-[30px] w-[1px]"
              style={{ background: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.25))' }}>
            </div>
            <div className="h-[1px] w-[50%] bg-white/25 mx-auto relative ml-0">
              <div className="absolute top-0 left-0 h-[60px] w-[1px] bg-white/25">
                <div className="absolute bottom-[-15px] left-[-7px] border-[1px] rounded-full p-[5px] border-white/25">
                  <div className="w-[3px] h-[3px] rounded-full bg-white/25">
                    <div className="absolute top-[14px] left-[6px] h-[300px] w-[1px]"
                      style={{ background: 'linear-gradient(rgba(255, 255, 255, 0.25), rgb(255, 207, 35))' }}>
                      <div className="absolute bottom-[-15px] right-[-7px] border-[1px] rounded-full p-[5px] border-[#FFCF23]">
                        <div className="w-[3px] h-[3px] rounded-full bg-[#FFCF23]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-12 lg:gap-0 flex-col lg:flex-row items-center justify-evenly mt-4 lg:mt-32 max-w-[1280px] mx-auto">
            <div className="path pt-2 mt-0">
              <div className="subtitle uppercase switzer">fail to achieve</div>
              <div className="title switzer">Stay stagnant</div>
              <div className="description switzer">
                Follow the conventional route, investing years into a job you don't care about, for a boss you don't like, for a mediocre payment, just so you can retire in 50 years.
              </div>
              <Link to='/checkout'className="px-4 relative">
                <div className="button-container bad duration-500 transition-all w-full group overflow-hidden">
                  <img alt="Button Join TRW" loading="lazy" width="380" height="100" decoding="async"
                    className="w-[340px] h-[auto]"
                    srcSet={`${buttonBad} 1x, ${buttonBad} 2x`}
                    src={buttonBad} style={{ color: 'transparent' }} />
                </div>
              </Link>
            </div>
            <div className="hidden lg:block">
              <img alt="Versus" loading="lazy" width="82" height="82" decoding="async"
                srcSet={`${vsImage} 1x, ${vsImage} 2x`}
                src={vsImage} style={{ color: 'transparent' }} />
            </div>
            <div className="path">
              <div className="subtitle uppercase gradient-text-2 switzer">pay</div>
              <div className="title gradient-text-2 switzer">$49.99</div>
              <div className="description">
                <span className="text-white switzer">
                  Immediately tap into a reservoir of cutting-edge knowledge, positioning yourself at the vanguard of innovation and fast-tracking your path to wealth.
                </span>
              </div>
              <Link to='/checkout' className="px-4 relative">
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

export default TwoPaths;