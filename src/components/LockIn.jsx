import React from 'react';
import { Link } from 'react-router-dom';

const LockIn = () => {
  return (
    <section className="w-full relative my-[120px]">
      <div style={{ opacity: 1, transform: 'translateY(0px)' }}>
        <div className="split-info">
          <figure className="mb-4 relative w-full lg:hidden">
            <img alt="Tate Smoking" loading="lazy" width="1500" height="1500" decoding="async"
              className="w-full opacity-100 relative z-10 h-[256px] lg:h-auto object-cover"
              srcSet="/_next/image/lockin.png 1x, /_next/image/lockin.png 2x"
              src="/_next/image/lockin.png" style={{ color: 'transparent' }} />
            <div className="left-fade-b pointer-events-none"></div>
            <div className="lright-fade-b pointer-events-none"></div>
            <div className="bottom-fade-b pointer-events-none"></div>
            <div className="top-fade-b pointer-events-none"></div>
          </figure>
          <div className="w-full lg:w-[600px] z-10 relative lg:pr-28 flex flex-col justify-center items-start px-4"
            style={{ placeSelf: 'center end' }}>
            <h3 className="w-full uppercase px-4 lg:px-0 text-center lg:text-left mt-3 lg:mt-0 switzer">ONE YEAR IS ALL YOU NEED</h3>
            <h2 className="mt-3 mb-6 lg:mb-8 px-4 lg:px-0 text-center lg:text-left mx-auto capitalize switzer tracking-[-1px] lg:tracking-[-3px]">
              <span className="texture-text"><span className="gradient-text-2">Lock in</span> for the next year</span>
            </h2>
            <div className="flex">
              <p className="text-center lg:text-left text-pretty switzer">
                You can get rich with just one year of focus...<br /><br />
                <span className="text-white font-medium">But only</span> if you invest focus in the right business models using the right information.<br /><br />
                In The Real World you will get access to multimillionaire professors who will give you a step-by-step path to reach your goals as fast as humanly possible.
              </p>
            </div>
            <div className="flex w-full justify-center lg:justify-start mt-8">
              <Link to='/checkout'className="relative">
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
          <figure className="relative w-full hidden lg:block">
            <img alt="Tate Smoking" loading="lazy" width="1500" height="1500" decoding="async"
              className="w-full opacity-100 relative z-10 h-[256px] lg:h-auto object-cover"
              srcSet="/_next/image/lockin.png 1x, /_next/image/lockin.png 2x"
              src="/_next/image/lockin.png" style={{ color: 'transparent' }} />
            <div className="left-fade-b pointer-events-none"></div>
            <div className="lg:hidden right-fade-b pointer-events-none"></div>
            <div className="bottom-fade-b pointer-events-none"></div>
            <div className="top-fade-b pointer-events-none"></div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default LockIn;