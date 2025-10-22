import React from 'react';
import { Link } from 'react-router-dom';

// Import images from assets
import last1 from '../assets/images/last1.png';
import last2 from '../assets/images/last2.png';
import last3 from '../assets/images/last3.png';
import last1Icon from '../assets/images/last1_icon.svg';
import last2Icon from '../assets/images/last2_icon.svg';
import last3Icon from '../assets/images/last3_icon.svg';
import buttonImage from '../assets/images/button.png';

const LastChance = () => {
  return (
    <div className="mt-20">
      <section className="w-full relative mb-[80px] lg:mb-[196px] z-20">
        <div style={{ opacity: 1, transform: 'translateY(0px)' }}>
          <div className="z-10 relative px-4">
            <h2 className="uppercase text-center gradient-text capitalize switzer tracking-[-1px] lg:tracking-[-3px]">
              This is your <span className="gradient-text-2">last chance</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-[1200px] mx-auto mt-4 lg:mt-24">
              
              {/* Card 1 */}
              <article className="border-[1px] border-[rgba(255,255,255,.27)] rounded-[25px] relative chance mt-12 lg:mt-0">
                <div className="lg:block w-full absolute top-0 left-0 z-0 pointer-events-none overflow-hidden h-[80%] rounded-t-[25px]">
                  <img alt="You're running out of time" loading="lazy" width="936" height="1492" decoding="async"
                    className="w-full object-cover h-full"
                    srcSet={`${last1} 1x, ${last1} 2x`}
                    src={last1} style={{ color: 'transparent' }} />
                  <div className="top-fade-b pointer-events-none"></div>
                  <div className="bottom-fade-b pointer-events-none"></div>
                  <div className="right-fade-b pointer-events-none"></div>
                  <div className="left-fade-b pointer-events-none"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex justify-center mt-[-40px]">
                    <div className="number rounded-full switzer">1</div>
                  </div>
                  <figure className="mt-6 lg:mt-[90px]">
                    <img alt="You're running out of time" loading="lazy" width="51" height="51" decoding="async"
                      className="mx-auto" src={last1Icon} style={{ color: 'transparent' }} />
                  </figure>
                  <div className="title capitalize px-4 switzer">You're running out of time</div>
                  <div className="w-full h-[1px]"
                    style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0) 100%)' }}>
                  </div>
                  <div className="py-4 px-4 text-center text-pretty switzer">
                    <p>The world will change forever in 2025. They are developing more ways to <span className="font-bold text-white">trap you.</span><br /><br /><span className="font-bold text-white">What have you been doing to prepare?</span><br /><br />You must understand, it's now or never.</p>
                  </div>
                </div>
              </article>

              {/* Card 2 */}
              <article className="border-[1px] border-[rgba(255,255,255,.27)] rounded-[25px] relative chance mt-12 lg:mt-0">
                <div className="lg:block w-full absolute top-0 left-0 z-0 pointer-events-none overflow-hidden h-[80%] rounded-t-[25px]">
                  <img alt="imminent Ai takeover" loading="lazy" width="936" height="1492" decoding="async"
                    className="w-full object-cover h-full"
                    srcSet={`${last2} 1x, ${last2} 2x`}
                    src={last2} style={{ color: 'transparent' }} />
                  <div className="top-fade-b pointer-events-none"></div>
                  <div className="bottom-fade-b pointer-events-none"></div>
                  <div className="right-fade-b pointer-events-none"></div>
                  <div className="left-fade-b pointer-events-none"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex justify-center mt-[-40px]">
                    <div className="number rounded-full switzer">2</div>
                  </div>
                  <figure className="mt-6 lg:mt-[90px]">
                    <img alt="imminent Ai takeover" loading="lazy" width="51" height="51" decoding="async"
                      className="mx-auto" src={last2Icon} style={{ color: 'transparent' }} />
                  </figure>
                  <div className="title capitalize px-4 switzer">imminent Ai takeover</div>
                  <div className="w-full h-[1px]"
                    style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0) 100%)' }}>
                  </div>
                  <div className="py-4 px-4 text-center text-pretty switzer">
                    <p>Imagine there was a potion that you could apply to your business,<br /><br /><span className="font-bold text-white">And it helped you 10x output OVERNIGHT.</span><br /><br />You can have a robot make money for you while you SLEEP... Yet you have chosen not to take action.</p>
                  </div>
                </div>
              </article>

              {/* Card 3 */}
              <article className="border-[1px] border-[rgba(255,255,255,.27)] rounded-[25px] relative chance mt-12 lg:mt-0">
                <div className="lg:block w-full absolute top-0 left-0 z-0 pointer-events-none overflow-hidden h-[80%] rounded-t-[25px]">
                  <img alt="you need to learn a skill" loading="lazy" width="936" height="1492" decoding="async"
                    className="w-full object-cover h-full"
                    srcSet={`${last3} 1x, ${last3} 2x`}
                    src={last3} style={{ color: 'transparent' }} />
                  <div className="top-fade-b pointer-events-none"></div>
                  <div className="bottom-fade-b pointer-events-none"></div>
                  <div className="right-fade-b pointer-events-none"></div>
                  <div className="left-fade-b pointer-events-none"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex justify-center mt-[-40px]">
                    <div className="number rounded-full switzer">3</div>
                  </div>
                  <figure className="mt-6 lg:mt-[90px]">
                    <img alt="you need to learn a skill" loading="lazy" width="51" height="51" decoding="async"
                      className="mx-auto" src={last3Icon} style={{ color: 'transparent' }} />
                  </figure>
                  <div className="title capitalize px-4 switzer">you need to learn a skill</div>
                  <div className="w-full h-[1px]"
                    style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0) 100%)' }}>
                  </div>
                  <div className="py-4 px-4 text-center text-pretty switzer">
                    <p>Just imagine...<br /><br />The doors that open when you invest in yourself—higher income, greater freedom, and the ability to create the life you want.<br /><br /><span className="font-bold text-white">Don't wait for success to find you. Take control.</span></p>
                  </div>
                </div>
              </article>

            </div>
            <div className="flex justify-center w-full mt-4">
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
      </section>
    </div>
  );
};

export default LastChance;