import React, { useRef, useState, useEffect } from 'react';
import { modifyStreamUrl, playVideo } from '../utils/streamUrlUtils';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroVideoUrl = modifyStreamUrl(
    'https://iframe.cloudflarestream.com/a5e71f76f355ba1bef6f98325c0e65a9'
  );

  const desktopVideoUrl = modifyStreamUrl(
    'https://iframe.cloudflarestream.com/a5e71f76f355ba1bef6f98325c0e65a9'
  );

  const mobileIframeRef = useRef(null);
  const desktopIframeRef = useRef(null);
  const [mobilePlaying, setMobilePlaying] = useState(false);
  const [desktopPlaying, setDesktopPlaying] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate active states
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMobilePlay = () => {
    playVideo(mobileIframeRef.current);
    setMobilePlaying(true);
  };

  const handleDesktopPlay = () => {
    playVideo(desktopIframeRef.current);
    setDesktopPlaying(true);
  };

  const features = [
    {
      id: 1,
      activeImage: "/_next/image/a1.png",
      inactiveImage: "/_next/image/a1_i.png",
      subtitle: "WORLD CLASS",
      title: "Learning",
      active: activeIndex === 0
    },
    {
      id: 2,
      activeImage: "/_next/image/a2.png",
      inactiveImage: "/_next/image/a2_i.png",
      subtitle: "SCALE FROM ZERO",
      title: "To 10k/Mo",
      active: activeIndex === 1
    },
    {
      id: 3,
      activeImage: "/_next/image/a3.png",
      inactiveImage: "/_next/image/a3_i.png",
      subtitle: "1-ON-1 ADVICE",
      title: "From Experts",
      active: activeIndex === 2
    }
  ];

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 z-0 pointer-events-none w-full flex justify-center">
        <img alt="Background C" loading="lazy" width="1728" height="1669" decoding="async"
          className="w-full lg:w-full h-[800px] lg:h-auto mx-auto"
          srcSet="/_next/image/hero_bg.png 1x, /_next/image/hero_bg.png 2x"
          src="/_next/image/hero_bg.png" style={{ color: 'transparent' }} />
        <div className="glow-b max-w-full"></div>
        <div className="top-fade-b pointer-events-none"></div>
        <div className="bottom-fade-b pointer-events-none"></div>
        <div className="right-fade-b pointer-events-none"></div>
        <div className="left-fade-b pointer-events-none"></div>
      </div>
      <div className="relative">
        <div style={{ opacity: 1, transform: 'translateY(0px)' }}>
          <div className="relative lg:hidden">
            <div className="relative min-h-[240px]">
              <h1 className="lg:hidden absolute bottom-[-20px] right-0 pointer-events-none">THE REAL WORLD</h1>
              <div style={{ opacity: 0, transform: 'translateY(20px)' }}>
                <div className="relative">
                  <div className="w-full relative">
                    <div className="relative max-w-[100%]">
                      <div className="w-full h-full hidden lg:block undefined" style={{ position: 'relative' }}>
                        <iframe
                          ref={mobileIframeRef}
                          src={heroVideoUrl}
                          frameBorder="0" height="100%" width="100%"
                          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                          allowFullScreen=""
                          style={{ position: 'absolute', inset: '0px', height: '100%', width: '100%' }}></iframe>
                      </div>
                      {/* Play Button Overlay - Only show when not playing */}
                      {!mobilePlaying && (
                        <div
                          className="absolute top-0 left-0 h-full w-full bg-top bg-cover bg-[rgba(0,0,0,.6)] min-h-[240px] opacity-100 cursor-pointer"
                          onClick={handleMobilePlay}
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
              <div className="absolute bottom-0 left-0 w-full h-[158px] pointer-events-none"
                style={{ background: 'linear-gradient(rgba(0, 0, 0, 0) 80%, rgb(0, 0, 0) 100%)' }}></div>
            </div>
          </div>
          <section className="pb-12 lg:pb-4 flex flex-col items-center max-w-[1059px] mx-auto">
            <div className="hidden lg:block absolute top-80 left-0 z-20 pointer-events-none w-full flex justify-center">
              <img alt="Background C" loading="lazy" width="1728" height="1669" decoding="async"
                className="w-full h-auto"
                srcSet="/_next/image/video_bg.png 1x, /_next/image/video_bg.png 2x"
                src="/_next/image/video_bg.png" style={{ color: 'transparent' }} />
              <div className="glow-b max-w-full"></div>
              <div className="right-fade-b pointer-events-none"></div>
              <div className="left-fade-b pointer-events-none"></div>
            </div>
            <div className="newglow-c left-0 top-1/2"></div>
            <div className="hidden w-full lg:flex flex-col items-center justify-center">
              <img alt="Join The Real World Logo" loading="lazy" width="85" height="85" decoding="async"
                className="lg:w-[85px] lg:h-[85px] mt-2"
                srcSet="/_next/image/jtrw_logo.png 1x, /_next/image/jtrw_logo.png 2x"
                src="/_next/image/jtrw_logo.png" style={{ color: 'transparent' }} />
              <h1 className="pagetitle w-full">THE REAL WORLD</h1>
            
              <div className="rounded-full border-[1px] border-white/50 p-[6px] mt-2 lg:mt-4 relative z-10">
                <div className="flex flex-row items-center gap-2 justify-center px-6 py-2 rounded-full"
                  style={{ background: 'linear-gradient(100.33deg, rgba(255, 255, 255, 0.15) 5.1%, rgba(255, 255, 255, 0.016) 83.56%)', border: '1px solid rgba(153, 153, 153, 0.25)' }}>
                  <img alt="Enrolled People" loading="lazy" width="48" height="22" decoding="async"
                    srcSet="/_next/image/students.png 1x, /_next/image/students.png 2x"
                    src="/_next/image/students.png" style={{ color: 'transparent' }} />
                  <p className="xsmall switzer"><span className="text-white font-extrabold text-lg">155,000+</span> students</p>
                </div>
              </div>
            </div>
            <h2 className="special text-white text-center lg:px-4 max-w-[330px] lg:max-w-full py-2 mt-4 texture-text capitalize switzer tracking-[-1px] lg:tracking-[-3px]">
              <span className="gradient-text-2">money</span> making is a skill<span className="gradient-text-2">.</span>
              
            </h2>
            <p className="px-4 text-center max-w-[744px] switzer mt-2 relative">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                className="absolute top-[5px] left-[-4px] text-white" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>
              </svg>
              <span className="text-white"> The clock is ticking, </span> the world is spinning,<br /> and the only constant is relentless change.
            </p>
            <div className="w-full mt-2 px-4 relative max-w-[960px]">
              <div className="hidden lg:block relative z-30 mt-6">
                <div className="glowbox left-[calc(50%-250px)] bottom-[-250px] z-0"></div>
                <h1 className="hidden lg:block absolute bottom-[-28px] right-0">THE REAL WORLD</h1>
                <div className="border-[2px] border-[rgba(255,255,255,.2)] rounded-[25px] overflow-hidden p-[1px] bg-[rgba(255, 255, 255, 0.09)]">
                  <div className="relative false">
                    <div className="min-h-[520px] w-full relative">
                      <div className="relative">
                        <div className="w-full h-full hidden lg:block min-h-[520px]" style={{ position: 'relative' }}>
                          <iframe
                            ref={desktopIframeRef}
                            src={desktopVideoUrl}
                            frameBorder="0" height="100%" width="100%"
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                            allowFullScreen=""
                            style={{ position: 'absolute', inset: '0px', height: '100%', width: '100%' }}></iframe>
                        </div>
                        {/* Play Button Overlay - Only show when not playing */}
                        {!desktopPlaying && (
                          <div
                            className="absolute top-0 left-0 h-full w-full bg-top bg-cover bg-[rgba(0,0,0,.6)] cursor-pointer"
                            onClick={handleDesktopPlay}
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
                  <div className="glowborder absolute left-[calc(50%-370px)] bottom-[-2px]"></div>
                  <div className="glowborderwhite absolute left-[calc(50%-370px)] top-[-2px]"></div>
                </div>
              </div>
            </div>
            <Link to='/checkout' className="px-4 mt-4 lg:mt-8 relative">
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
            <div className="flex flex-col lg:flex-row w-full items-center gap-2 lg:gap-1 mt-8 relative z-20 justify-center">
              {features.map((feature, index) => (
                <React.Fragment key={feature.id}>
                  {/* Feature Item */}
                  <article className="flex flex-col lg:flex-row gap-1 lg:gap-2 items-center">
                    <figure className="relative cursor-pointer" onClick={() => setActiveIndex(index)}>
                      {/* Inactive Image */}
                      <img 
                        alt={`${feature.title} icon`} 
                        loading="lazy" 
                        width="287" 
                        height="85" 
                        decoding="async"
                        className={`w-[260px] h-[75px] transition-all duration-500 ${
                          feature.active ? 'opacity-0' : 'opacity-100'
                        }`}
                        srcSet={`${feature.inactiveImage} 1x, ${feature.inactiveImage} 2x`}
                        src={feature.inactiveImage} 
                        style={{ color: 'transparent' }}
                      />
                      {/* Active Image */}
                      <img 
                        alt={`${feature.title} icon`} 
                        loading="lazy" 
                        width="287" 
                        height="85" 
                        decoding="async"
                        className={`w-[260px] h-[75px] transition-all duration-500 absolute top-0 left-0 ${
                          feature.active ? 'opacity-100' : 'opacity-0'
                        }`}
                        srcSet={`${feature.activeImage} 1x, ${feature.activeImage} 2x`}
                        src={feature.activeImage} 
                        style={{ color: 'transparent' }}
                      />
                      <div className="flex flex-col justify-center absolute top-4 left-24">
                        {/* Subtitle */}
                        <div className={`uppercase font-bold text-[10px] switzer transition-all duration-500 ${
                          feature.active ? 'text-white' : 'text-white/50'
                        }`}>
                          {feature.subtitle}
                        </div>
                        {/* Title */}
                        <div className={`font-bold capitalize text-[22px] switzer transition-all duration-500 ${
                          feature.active ? 'text-white' : 'text-white/75'
                        }`}>
                          {feature.title}
                        </div>
                      </div>
                    </figure>
                  </article>

                  {/* Arrow (only show between features) */}
                  {index < features.length - 1 && (
                    <div className='relative mx-1 lg:mx-0'>
                      {/* Inactive Arrow */}
                      <img 
                        alt="Arrow icon" 
                        loading="lazy" 
                        width="40" 
                        height="20" 
                        decoding="async"
                        className={`w-[30px] h-[15px] lg:w-[40px] lg:h-[20px] transition-all duration-500 ${
                          feature.active ? 'opacity-0' : 'opacity-100'
                        }`}
                        srcSet="/_next/image/arrow_white.png 1x, /_next/image/arrow_white.png 2x"
                        src="/_next/image/arrow_white.png" 
                        style={{ color: 'transparent' }}
                      />
                      {/* Active Arrow */}
                      <img 
                        alt="Arrow icon" 
                        loading="lazy" 
                        width="40" 
                        height="20" 
                        decoding="async"
                        className={`w-[30px] h-[15px] lg:w-[40px] lg:h-[20px] transition-all duration-500 absolute top-0 left-0 ${
                          feature.active ? 'opacity-100' : 'opacity-0'
                        }`}
                        srcSet="/_next/image/arrow_active.png 1x, /_next/image/arrow_active.png 2x"
                        src="/_next/image/arrow_active.png" 
                        style={{ color: 'transparent' }}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </section>
        </div>
        <div className="glow-c max-w-full"></div>
        <div className="glow-orange-c max-w-full right-[-500px] top-1/4"></div>
        <div className="glow-orange-c max-w-full left-[-500px] top-1/4"></div>
      </div>
    </div>
  );
};

export default Hero;