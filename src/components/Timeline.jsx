import React from 'react';
import { Link } from 'react-router-dom';

const Timeline = () => {
  return (
    <section className="w-full relative z-20 mt-24 lg:mt-[144px] mb-[126px] flex flex-col items-center timeline">
      <div className="lg:block w-full absolute top-0 left-0 z-0 max-h-[1728px] h-full lg:h-auto">
        <img alt="Background 1" loading="lazy" width="1729" height="1728" decoding="async"
          className="w-full h-[2000px] lg:h-[1450px] h-full object-cover"
          srcSet="/_next/image/bg_2.png 1x, /_next/image/bg_2.png 2x"
          src="/_next/image/bg_2.png" style={{ color: 'transparent' }} />
        <div className="top-fade-b pointer-events-none"></div>
        <div className="left-fade-b pointer-events-none"></div>
        <div className="right-fade-b pointer-events-none"></div>
        <div className="bottom-fade-b pointer-events-none"></div>
      </div>
      <div style={{ opacity: 1, transform: 'translateY(0px)' }}>
        <div className="max-w-[1236px] mx-auto flex flex-col items-center">
          <h3 className="uppercase switzer text-center lg:text-[16px] mb-3">A STEP-BY-STEP PATH</h3>
          <h2 className="mb-8 text-center lg:px-4 max-w-[668px] capitalize switzer tracking-[-1px] lg:tracking-[-3px] !text-[44px] lg:!text-[55px]">
            <span className="gradient-text texture-text">Tools To Maximize Your Income</span>
          </h2>
        </div>
        <div className="relative">
          <div className="trail">
            <div className="highlight" style={{ height: '1087px' }}></div>
            <div className="ball" style={{ top: '1087px' }}>
              <img alt="Arrow down" loading="lazy" width="22" height="22" decoding="async"
                className="absolute top-0 left-[-5px] max-w-[300px]"
                srcSet="/_next/image/arrowdown.png 1x, /_next/image/arrowdown.png 2x"
                src="/_next/image/arrowdown.png" style={{ color: 'transparent' }} />
            </div>
          </div>
          
          {/* Step 1 */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-12 pl-4 lg:pl-0">
            <figure className="lg:w-1/2 flex justify-center relative px-4 lg:px-0 w-full">
              <div className="hidden lg:block newglow left-[-200px] z-0 top-20"></div>
              <div className="w-full lg:hidden" style={{ position: 'relative' }}>
                <iframe
                  src="https://iframe.cloudflarestream.com/9bc26ced3b9506adb256cae26dc98852?muted=true&preload=metadata&loop=true&autoplay=true&controls=false"
                  frameBorder="0" height="240px" width="100%"
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen=""
                  style={{ position: 'absolute', inset: '0px', height: '100%', width: '100%' }}></iframe>
              </div>
              <div className="border-[1px] border-white/25 rounded-[25px] bg-white/10 px-20 hidden lg:block w-[520px] h-[320px] relative pointer-events-none">
                <img alt="Vital Life Lessons Imagery" loading="lazy" width="348" height="384" decoding="async"
                  className="absolute z-10 max-h-[224px] lg:max-h-[320px] object-contain pointer-events-none"
                  srcSet="/_next/image/group1_2.png 1x, /_next/image/group1_2.png 2x"
                  src="/_next/image/group1_2.png" style={{ color: 'transparent' }} />
              </div>
            </figure>
            <div className="lg:w-1/2 lg:pl-16 px-4 lg:pr-0">
              <div className="flex gap-4 px-4 lg:px-0 mb-3 lg:mb-0">
                <img alt="SVG Icon" loading="lazy" width="38" height="26" decoding="async"
                  className="fill-white" src="/vital_lessons.svg" style={{ color: 'transparent' }} />
                <h2 className="gradient-text capitalize subtitle switzer">Vital Life Lessons</h2>
              </div>
              <div className="step mt-2 duration-500 transition-all">
                <img alt="Checkmark Icon" loading="lazy" width="20" height="15" decoding="async"
                  src="/check2.svg" style={{ color: 'transparent' }} />
                <p className="text-pretty switzer">World-class custom built learning application</p>
              </div>
              <div className="step mt-2 duration-500 transition-all">
                <img alt="Checkmark Icon" loading="lazy" width="20" height="15" decoding="async"
                  src="/check2.svg" style={{ color: 'transparent' }} />
                <p className="text-pretty">Scale from <span className="font-bold text-white">Zero to $10k/month quickly</span></p>
              </div>
              <div className="step mt-2 duration-500 transition-all">
                <img alt="Checkmark Icon" loading="lazy" width="20" height="15" decoding="async"
                  src="/check2.svg" style={{ color: 'transparent' }} />
                <p className="text-pretty switzer">Master key skills for <span className="font-bold text-white">wealth generation</span></p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col lg:flex-row items-center justify-between mt-16 gap-4 lg:gap-12 pl-4 lg:pl-0">
            <figure className="lg:w-1/2 flex justify-center relative px-4 lg:px-0 w-full">
              <div className="hidden lg:block newglow left-[-200px] z-0 top-0"></div>
              <div className="w-full lg:hidden" style={{ position: 'relative' }}>
                <iframe
                  src="https://iframe.cloudflarestream.com/4afe2b75ae428d3bf3a5632a7b795915?muted=true&preload=metadata&loop=true&autoplay=true&controls=false"
                  frameBorder="0" height="240px" width="100%"
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen=""
                  style={{ position: 'absolute', inset: '0px', height: '100%', width: '100%' }}></iframe>
              </div>
              <div className="border-[1px] border-white/25 rounded-[25px] bg-white/10 hidden lg:block w-[520px] h-[320px] relative pointer-events-none">
                <img alt="Vital Life Lessons Imagery" loading="lazy" width="540" height="330" decoding="async"
                  className="absolute z-10 max-h-[224px] lg:max-h-[320px] object-contain pointer-events-none"
                  srcSet="/_next/image/group2_2.png 1x, /_next/image/group2_2.png 2x"
                  src="/_next/image/group2_2.png" style={{ color: 'transparent' }} />
              </div>
            </figure>
            <div className="lg:w-1/2 lg:pl-16 px-4 lg:pr-0">
              <div className="flex gap-4 px-4 lg:px-0 mb-3 lg:mb-0">
                <img alt="SVG Icon" loading="lazy" width="38" height="26" decoding="async"
                  className="fill-white" src="/private_network.svg" style={{ color: 'transparent' }} />
                <h2 className="gradient-text capitalize subtitle switzer">Private Network</h2>
              </div>
              <div className="step mt-2 duration-500 transition-all">
                <img alt="Checkmark Icon" loading="lazy" width="20" height="15" decoding="async"
                  src="/check2.svg" style={{ color: 'transparent' }} />
                <p className="text-[21px] text-pretty switzer">
                  <span className="font-bold text-white">Celebrate your wins</span> with people who understand
                </p>
              </div>
              <div className="step mt-2 duration-500 transition-all">
                <img alt="Checkmark Icon" loading="lazy" width="20" height="15" decoding="async"
                  src="/check2.svg" style={{ color: 'transparent' }} />
                <p className="text-pretty switzer">Access knowledge updated by the hour</p>
              </div>
              <div className="step mt-2 duration-500 transition-all">
                <img alt="Checkmark Icon" loading="lazy" width="20" height="15" decoding="async"
                  src="/check2.svg" style={{ color: 'transparent' }} />
                <p className="text-pretty switzer">Network with <span className="font-bold text-white">155,000+ students</span></p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col lg:flex-row items-center justify-between mt-16 gap-4 lg:gap-12 pl-4 lg:pl-0">
            <figure className="lg:w-1/2 flex justify-center relative px-4 lg:px-0 w-full">
              <div className="hidden lg:block newglow left-[-200px] z-0 top-0"></div>
              <div className="w-full lg:hidden" style={{ position: 'relative' }}>
                <iframe
                  src="https://iframe.cloudflarestream.com/8d61a47f30b8a090dc62aa9072bbe520?muted=true&preload=metadata&loop=true&autoplay=true&controls=false"
                  frameBorder="0" height="240px" width="100%"
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen=""
                  style={{ position: 'absolute', inset: '0px', height: '100%', width: '100%' }}></iframe>
              </div>
              <div className="border-[1px] border-white/25 rounded-[25px] bg-white/10 hidden lg:block w-[520px] h-[320px] relative pointer-events-none">
                <img alt="Vital Life Lessons Imagery" loading="lazy" width="891" height="1003" decoding="async"
                  className="absolute z-10 max-h-[224px] lg:max-h-[480px] object-contain w-[540px] top-[-40px] pointer-events-none"
                  srcSet="/_next/image/group3_2.png 1x, /_next/image/group3_2.png 2x"
                  src="/_next/image/group3_2.png" style={{ color: 'transparent' }} />
              </div>
            </figure>
            <div className="lg:w-1/2 lg:pl-16 px-4 lg:pr-0">
              <div className="flex gap-4 px-4 lg:px-0 mb-3 lg:mb-0">
                <img alt="SVG Icon" loading="lazy" width="28" height="40" decoding="async"
                  className="fill-white" src="/multimillion.svg" style={{ color: 'transparent' }} />
                <h2 className="gradient-text capitalize subtitle leading-[32px] switzer">Access To Multi-Millionaires</h2>
              </div>
              <div className="step mt-2 duration-500 transition-all">
                <img alt="Checkmark Icon" loading="lazy" width="20" height="15" decoding="async"
                  src="/check2.svg" style={{ color: 'transparent' }} />
                <p className="text-pretty switzer">Mentors are <span className="font-bold text-white">hyper-successful</span> in their field</p>
              </div>
              <div className="step mt-2 duration-500 transition-all">
                <img alt="Checkmark Icon" loading="lazy" width="20" height="15" decoding="async"
                  src="/check2.svg" style={{ color: 'transparent' }} />
                <p className="text-pretty switzer">Make <span className="font-bold text-white">ambitious friends</span> on the way</p>
              </div>
              <div className="step mt-2 duration-500 transition-all">
                <img alt="Checkmark Icon" loading="lazy" width="20" height="15" decoding="async"
                  src="/check2.svg" style={{ color: 'transparent' }} />
                <p className="text-pretty switzer">Live calls every single day</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center relative mt-8">
          <Link to='/checkout' className="px-4 relative">
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
          <div className="flex lg:flex-row items-center gap-2 justify-center px-4 mt-4">
            <img alt="Cash Icon" loading="lazy" width="24" height="24" decoding="async"
              src="/methods.svg" style={{ color: 'transparent' }} />
            <p className="xsmall switzer">
              <span className="text-white font-extrabold text-lg"> Access 12+</span> wealth creation methods
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;