import React from 'react';
import { Link } from 'react-router-dom';

const PriceIncrease = () => {
  return (
    <section className="w-full relative mt-0 lg:mt-[120px] mb-[80px] lg:mb-[120px] z-20">
      <div style={{ opacity: 1, transform: 'translateY(0px)' }}>
        <div className="z-10 relative px-4">
          <h3 className="hidden lg:block uppercase text-center">LOCK IN YOUR PRICE</h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4">
            <img alt="Exclusive Features" loading="lazy" width="52" height="47" decoding="async"
              src="/warning.svg" style={{ color: 'transparent' }} />
            <h3 className="lg:hidden uppercase text-center mt-1 lg:mt-0">LOCK IN YOUR PRICE</h3>
            <h2 className="capitalize switzer tracking-[-1px] lg:tracking-[-3px] text-center gradient-text texture-text">
              price increase is imminent
            </h2>
          </div>
          <p className="text-center max-w-[761px] mx-auto mt-4 lg:mt-8 text-pretty">
            <span className="font-bold text-white">The price of the real world is being increased.</span><br /><br />
            Hundreds of thousands of students have already joined The Real World and are on their way to financial freedom.<br /><br />
            <span className="font-bold text-white">Lock in your spot now.</span>
          </p>
          <div className="flex mx-auto justify-center mt-4">
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
      </div>
    </section>
  );
};

export default PriceIncrease;