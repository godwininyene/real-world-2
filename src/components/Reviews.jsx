import React, { useRef, useState } from 'react';
import { modifyStreamUrl, playVideo } from '../utils/streamUrlUtils';
import { Link } from 'react-router-dom';

// Import images from assets
import flagUSA from '../assets/images/flag_usa.png';
import flagCanada from '../assets/images/flag_canada.png';
import buttonImage from '../assets/images/button.png';
import methodsIcon from '../assets/images/methods.svg';

const Reviews = () => {
  const video1Url = modifyStreamUrl(
    'https://iframe.cloudflarestream.com/45e03b48ec5dc2caf27e99193761f26f'
  );

  const video2Url = modifyStreamUrl(
    'https://iframe.cloudflarestream.com/de951a6359bed8df49031d7ae2c2acb1'
  );

  const video3Url = modifyStreamUrl(
    'https://iframe.cloudflarestream.com/5363cd2b78d0ddce2398996221b15574'
  );

  const mobileVideo1Url = modifyStreamUrl(
    'https://iframe.cloudflarestream.com/dac6542c085321773cce164833dd43c8'
  );

  const mobileVideo2Url = modifyStreamUrl(
    'https://iframe.cloudflarestream.com/be63fa31c615e91338a821974318e361'
  );

  // Refs and states for each video
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);
  const mobileVideo1Ref = useRef(null);
  const mobileVideo2Ref = useRef(null);
  
  const [video1Playing, setVideo1Playing] = useState(false);
  const [video2Playing, setVideo2Playing] = useState(false);
  const [video3Playing, setVideo3Playing] = useState(false);
  const [mobileVideo1Playing, setMobileVideo1Playing] = useState(false);
  const [mobileVideo2Playing, setMobileVideo2Playing] = useState(false);

  const handlePlay = (ref, setPlaying) => {
    playVideo(ref.current);
    setPlaying(true);
  };

  return (
    <>
      <section className="hidden lg:block relative px-4 reviews mt-12 lg:mt-28 z-10" id="reviews">
        <div style={{ opacity: 1, transform: 'translateY(0px)' }}>
          <div className="w-full lg:w-[46vw] mx-auto">
            <div className="flex gap-8 justify-center bg-background relative">
              <div className="relative w-full border-[1px] border-[#3B3B3B] rounded-[25px]">
                <div className="hidden lg:block absolute top-0 left-[-100%] w-full z-10 pr-6" style={{ minHeight: '320px' }}>
                  <div className="relative">
                    <div className="w-full relative">
                      <div className="relative max-w-[100%]">
                        <div className="w-full h-full hidden lg:block undefined" style={{ position: 'relative', paddingTop: '56.25%' }}>
                          <iframe
                            ref={video1Ref}
                            src={video1Url}
                            frameBorder="0" height="100%" width="100%"
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                            allowFullScreen=""
                            style={{ position: 'absolute', inset: '0px', height: '100%', width: '100%' }}></iframe>
                        </div>
                        {!video1Playing && (
                          <div 
                            className="absolute top-0 left-0 h-full w-full bg-top bg-cover bg-[rgba(0,0,0,.6)] opacity-100 cursor-pointer"
                            onClick={() => handlePlay(video1Ref, setVideo1Playing)}
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
                  <div className="hidden lg:block blur-2xl w-full h-[150%] absolute z-20 top-[-25%] right-6 pointer-events-none"
                    style={{ background: 'linear-gradient(90deg, rgb(2, 4, 14) 60%, transparent 100%)' }}></div>
                  <div className="hidden right-10 lg:flex z-30 text-4xl duration-500 transition-all text-white hover:scale-105 cursor-pointer absolute border-[1px] border-white hover:text-[#ffbb38] rounded-full h-[84px] w-[84px] items-center justify-center"
                    style={{ top: 'calc(50% - 21px)' }}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"></path>
                    </svg>
                  </div>
                </div>
                <div className="opacity-0 pointer-events-none duration-500 transition-all absolute w-full h-full top-0 left-[calc(-100%-24px)] z-20 bg-[rgba(0,0,0,1)]"
                  style={{ minHeight: '320px' }}>
                  <div className="loader absolute"></div>
                </div>
                <div className="overflow-hidden rounded-[25px] p-12 bg-[#02040e] relative" style={{ minHeight: '320px' }}>
                  <div className="relative">
                    <div className="w-full relative">
                      <div className="relative max-w-[100%]">
                        <div className="w-full h-full hidden lg:block undefined" style={{ position: 'relative', paddingTop: '56.25%' }}>
                          <iframe
                            ref={video2Ref}
                            src={video2Url}
                            frameBorder="0" height="100%" width="100%"
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                            allowFullScreen=""
                            style={{ position: 'absolute', inset: '0px', height: '100%', width: '100%' }}></iframe>
                        </div>
                        {!video2Playing && (
                          <div 
                            className="absolute top-0 left-0 h-full w-full bg-top bg-cover bg-[rgba(0,0,0,.6)] opacity-100 cursor-pointer"
                            onClick={() => handlePlay(video2Ref, setVideo2Playing)}
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
                  <div className="absolute bottom-12 left-12 transition-all duration-500 w-full z-40 pointer-events-none opacity-100">
                    <div className="flex items-center gap-2">
                      <h2 className="text-center switzer">Luke - <span className="font-thin">19</span></h2>
                      <img alt="Flag" loading="lazy" width="30" height="30" decoding="async"
                        srcSet={`${flagUSA} 1x, ${flagUSA} 2x`}
                        src={flagUSA} style={{ color: 'transparent' }} />
                    </div>
                    <div className="relative flex items-start mt-3">
                      <div className="text-[#ffcf23] !text-[16px] absolute top-0 left-0 font-bold">$</div>
                      <h4 className="gradient-text-2 relative pl-4 switzer">250K</h4>
                      <h5 className="text-[#ff8d3a] relative pt-[2px] switzer">+ Sales</h5>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block absolute top-0 right-[-100%] w-full z-10 pl-6" style={{ minHeight: '320px' }}>
                  <div className="relative">
                    <div className="w-full relative">
                      <div className="relative max-w-[100%]">
                        <div className="w-full h-full hidden lg:block undefined" style={{ position: 'relative', paddingTop: '56.25%' }}>
                          <iframe
                            ref={video3Ref}
                            src={video3Url}
                            frameBorder="0" height="100%" width="100%"
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                            allowFullScreen=""
                            style={{ position: 'absolute', inset: '0px', height: '100%', width: '100%' }}></iframe>
                        </div>
                        {!video3Playing && (
                          <div 
                            className="absolute top-0 left-0 h-full w-full bg-top bg-cover bg-[rgba(0,0,0,.6)] opacity-100 cursor-pointer"
                            onClick={() => handlePlay(video3Ref, setVideo3Playing)}
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
                  <div className="hidden lg:block blur-2xl w-full h-[150%] absolute z-20 top-[-25%] left-6 pointer-events-none"
                    style={{ background: 'linear-gradient(270deg, rgb(2, 4, 14) 60%, transparent 100%)' }}></div>
                  <div className="hidden left-10 lg:flex z-30 text-4xl duration-500 transition-all text-white hover:scale-105 cursor-pointer absolute border-[1px] border-white hover:text-[#ffbb38] rounded-full h-[84px] w-[84px] items-center justify-center"
                    style={{ top: 'calc(50% - 21px)' }}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
                    </svg>
                  </div>
                </div>
                <div className="opacity-0 pointer-events-none duration-500 transition-all absolute w-full h-full top-0 right-[calc(-100%-24px)] z-20 bg-[rgba(0,0,0,1)]"
                  style={{ minHeight: '320px' }}>
                  <div className="loader absolute"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-center relative flex-col">
              <div className="flex justify-center my-4">
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
              <div className="flex flex-col lg:flex-row items-center gap-2 justify-center px-4">
                <img alt="Access 12+" loading="lazy" width="22" height="22" decoding="async"
                  src={methodsIcon} style={{ color: 'transparent' }} />
                <p className="xsmall">
                  <span className="text-white font-extrabold text-lg switzer">Access 12+</span> wealth creation methods
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:hidden relative px-4 reviews mt-0 pt-4" id="reviews">
        <div style={{ opacity: 1, transform: 'translateY(0px)' }}>
          <div className="w-full lg:w-[46vw] mx-auto">
            <div className="flex flex-col gap-6 relative">
              <div className="relative bg-[#141b23] p-3 rounded-lg">
                <div className="border-[1px] border-[#ffffff1a]">
                  <div className="relative">
                    <div className="w-full relative">
                      <div className="relative max-w-[100%]">
                        <div className="w-full false lg:hidden undefined" style={{ position: 'relative', paddingTop: '56.25%' }}>
                          <iframe
                            ref={mobileVideo1Ref}
                            src={mobileVideo1Url}
                            frameBorder="0" height="100%" width="100%"
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                            allowFullScreen=""
                            style={{ position: 'absolute', inset: '0px', height: '100%', width: '100%' }}></iframe>
                        </div>
                        {!mobileVideo1Playing && (
                          <div 
                            className="absolute top-0 left-0 h-full w-full bg-top bg-cover bg-[rgba(0,0,0,.1)] cursor-pointer"
                            onClick={() => handlePlay(mobileVideo1Ref, setMobileVideo1Playing)}
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
                <div className="transition-all duration-500 w-full z-40 mt-2 pointer-events-none flex items-center justify-between">
                  <div className="flex items-center gap-2 lg:mb-0">
                    <h2 className="text-center">Cyber Twins - <span className="font-thin">24</span></h2>
                    <img alt="Flag" loading="lazy" width="25" height="25" decoding="async"
                      srcSet={`${flagCanada} 1x, ${flagCanada} 2x`}
                      src={flagCanada} style={{ color: 'transparent' }} />
                  </div>
                  <div className="relative flex items-center">
                    <div className="text-[#ffcf23] !text-[16px] absolute top-0 left-0 font-bold">$</div>
                    <h4 className="gradient-text-2 relative pl-4">80K</h4>
                    <h5 className="text-[#ff8d3a] relative">+ Sales</h5>
                  </div>
                </div>
              </div>

              <div className="relative bg-[#141b23] p-3 rounded-lg">
                <div className="border-[1px] border-[#ffffff1a]">
                  <div className="relative">
                    <div className="w-full relative">
                      <div className="relative max-w-[100%]">
                        <div className="w-full false lg:hidden undefined" style={{ position: 'relative', paddingTop: '56.25%' }}>
                          <iframe
                            ref={mobileVideo2Ref}
                            src={mobileVideo2Url}
                            frameBorder="0" height="100%" width="100%"
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                            allowFullScreen=""
                            style={{ position: 'absolute', inset: '0px', height: '100%', width: '100%' }}></iframe>
                        </div>
                        {!mobileVideo2Playing && (
                          <div 
                            className="absolute top-0 left-0 h-full w-full bg-top bg-cover bg-[rgba(0,0,0,.1)] cursor-pointer"
                            onClick={() => handlePlay(mobileVideo2Ref, setMobileVideo2Playing)}
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
                <div className="transition-all duration-500 w-full z-40 mt-2 pointer-events-none flex items-center justify-between">
                  <div className="flex items-center gap-2 lg:mb-0">
                    <h2 className="text-center">Napier - <span className="font-thin">16</span></h2>
                    <img alt="Flag" loading="lazy" width="25" height="25" decoding="async"
                      srcSet={`${flagUSA} 1x, ${flagUSA} 2x`}
                      src={flagUSA} style={{ color: 'transparent' }} />
                  </div>
                  <div className="relative flex items-center">
                    <div className="text-[#ffcf23] !text-[16px] absolute top-0 left-0 font-bold">$</div>
                    <h4 className="gradient-text-2 relative pl-4">4K</h4>
                    <h5 className="text-[#ff8d3a] relative">+ / month</h5>
                  </div>
                </div>
              </div>

              <div className="opacity-0 pointer-events-none duration-500 transition-all absolute w-full h-full top-0 left-0 z-20 bg-[rgba(0,0,0,.9)]">
                <div className="loader absolute bot"></div>
              </div>
            </div>
            <div className="bg-[#181e27] py-4 mt-4 px-20 text-center text-white font-semibold sfpro">Load More</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;