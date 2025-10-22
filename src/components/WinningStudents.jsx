import React from 'react';
import { Link } from 'react-router-dom';

// Import all testimonial images
import t1 from '../assets/images/t1.png';
import t2 from '../assets/images/t2.png';
import t3 from '../assets/images/t3.png';
import t4 from '../assets/images/t4.png';
import t5 from '../assets/images/t5.png';
import t6 from '../assets/images/t6.png';
import t7 from '../assets/images/t7.png';
import t8 from '../assets/images/t8.png';
import t9 from '../assets/images/t9.png';
import t10 from '../assets/images/t10.png';
import t11 from '../assets/images/t11.png';
import t12 from '../assets/images/t12.png';
import t13 from '../assets/images/t13.png';
import t14 from '../assets/images/t14.png';
import t15 from '../assets/images/t15.png';
import t16 from '../assets/images/t16.png';
import t17 from '../assets/images/t17.png';
import t18 from '../assets/images/t18.png';
import t19 from '../assets/images/t19.png';
import t20 from '../assets/images/t20.png';

// Import other images
import winningSwirl from '../assets/images/winning_swirl.png';
import buttonImage from '../assets/images/button.png';
import studentsImage from '../assets/images/students.png';

const WinningStudents = () => {
  const testimonials = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20];

  const renderTestimonialColumns = (isMobile = false) => {
    if (isMobile) {
      return (
        <div className="testimonial-column gap-4 flex-col flex" style={{ width: '100%' }}>
          {testimonials.map((testimonial, index) => (
            <img key={index} alt="Testimonial Snapshot" loading="lazy" width="400" height="400" decoding="async"
              className="w-full h-auto cursor-pointer w-full"
              src={testimonial} style={{ color: 'transparent' }} />
          ))}
        </div>
      );
    }

    return (
      <>
        <div className="testimonial-column gap-4 flex-col flex" style={{ width: '33.3333%' }}>
          {[0, 3, 6, 9, 12, 15, 18].map(index => (
            <img key={index} alt="Testimonial Snapshot" loading="lazy" width="300" height="300" decoding="async"
              className="w-[100%] cursor-pointer bg-background-b p-[1px] rounded-lg hover:scale-105 duration-300 transition-all"
              src={testimonials[index]} style={{ color: 'transparent' }} />
          ))}
        </div>
        <div className="testimonial-column gap-4 flex-col flex" style={{ width: '33.3333%' }}>
          {[1, 4, 7, 10, 13, 16, 19].map(index => (
            <img key={index} alt="Testimonial Snapshot" loading="lazy" width="300" height="300" decoding="async"
              className="w-[100%] cursor-pointer bg-background-b p-[1px] rounded-lg hover:scale-105 duration-300 transition-all"
              src={testimonials[index]} style={{ color: 'transparent' }} />
          ))}
        </div>
        <div className="testimonial-column gap-4 flex-col flex" style={{ width: '33.3333%' }}>
          {[2, 5, 8, 11, 14, 17, 3].map(index => (
            <img key={index} alt="Testimonial Snapshot" loading="lazy" width="300" height="300" decoding="async"
              className="w-[100%] cursor-pointer bg-background-b p-[1px] rounded-lg hover:scale-105 duration-300 transition-all"
              src={testimonials[index]} style={{ color: 'transparent' }} />
          ))}
        </div>
      </>
    );
  };

  return (
    <section className="w-full relative mb-[80px] lg:mb-[196px] z-50">
      <div className="lg:block w-full absolute top-0 left-0 z-0 max-h-[1900px] bg-background-b">
        <div className="top-fade-b pointer-events-none"></div>
        <div className="left-fade-b pointer-events-none"></div>
        <div className="right-fade-b pointer-events-none"></div>
        <div className="bottom-fade-b pointer-events-none"></div>
      </div>
      <div className="z-10 relative px-4">
        <h3 className="uppercase text-center mb-3 switzer">the real world wins</h3>
        <h2 className="capitalize text-center relative max-w-[320px] lg:max-w-full mx-auto">
          <span className="gradient-text texture-text relative capitalize switzer tracking-[-1px] lg:tracking-[-3px]">
            our students are winning
            <img alt="Winning Circle Swirl" loading="lazy" width="327" height="142" decoding="async"
              className="absolute bottom-[-5px] lg:bottom-[-10px] lg:right-[-60px] w-40 lg:w-auto right-[-15px]"
              srcSet={`${winningSwirl} 1x, ${winningSwirl} 2x`}
              src={winningSwirl} style={{ color: 'transparent' }} />
          </span>
        </h2>
        <div className="relative mt-8 lg:mt-10">
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="max-w-[1200px] mx-auto">
              <div className="w-full hidden lg:grid lg:grid-cols-3 gap-4">
                {renderTestimonialColumns()}
              </div>
              <div className="w-full grid grid-cols-1 lg:hidden gap-4">
                {renderTestimonialColumns(true)}
              </div>
              <div className="absolute bottom-[-100px] left-0 w-full h-[100px] lg:h-[600px] pointer-events-none"
                style={{ background: 'linear-gradient(360deg, rgb(2, 4, 14) 70%, transparent 100%)' }}>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:mt-[-300px] z-20 relative">
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
          <div className="flex flex-row items-center gap-2 justify-center px-4 mt-4">
            <img alt="Enrolled People" loading="lazy" width="70" height="30" decoding="async"
              srcSet={`${studentsImage} 1x, ${studentsImage} 2x`}
              src={studentsImage} style={{ color: 'transparent' }} />
            <p className="xsmall switzer">
              <span className="text-white font-bold">155,000+</span> like-minded students
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinningStudents;