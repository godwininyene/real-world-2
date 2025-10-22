import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import images from assets
import buttonImage from '../assets/images/button.png';
import methodsIcon from '../assets/images/methods.svg';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Is this program suitable for women?',
      answer: 'The Real World is suitable for any person, regardless of gender, who aspire to learn. The Real World has a very large female membership base and have made some of our greatest success stories!'
    },
    {
      question: 'How quickly will I make my money back?',
      answer: 'It depends on how seriously you take The Real World. But many students made their money back in a couple of weeks. Note: Everything taught within The Real World is for education purposes only. It is up to each student to implement and do the work. The The Real World team doesn\'t guarantee any profits or financial success.'
    },
    {
      question: 'Do I need money once I\'m inside The Real World?',
      answer: 'Not necessarily. Once inside The Real World, many of our students chose copywriting and freelancing, which are businesses without money requirements, and saw great success.'
    },
    {
      question: 'Does my age really not matter?',
      answer: 'No, but we encourage anyone under the age of 18 to consult a parent or guardian before signing up for The Real World. Instead of getting the newest videogames just to find them boring in a week, you can join our community, start your business and shock your friends and family by becoming the kid who\'s leveling up in real life.'
    },
    {
      question: 'I know nothing about the skills you teach. Is it a problem?',
      answer: 'Of course not. This is a mentoring program, and you are here to learn from us. Just follow our step-by-step lessons and guidance, and you will start a profitable business.'
    },
    {
      question: 'I don\'t have a lot of time available, can I still apply?',
      answer: 'The methods we teach are designed for rapid execution. So all you need is a minimum of 30 minutes a day to listen to your professors and apply what you\'ve learned.'
    },
    {
      question: 'I live in X country. Is it a problem?',
      answer: 'Not at all. At The Real World, we teach how to make money, so it doesn\'t matter where you are. Your location will only change the currency of your earnings.'
    },
    {
      question: 'Will I get access to all the courses once I join?',
      answer: 'Yes, when you join The Real World you get access to all of our courses, not just one.'
    },
    {
      question: 'Still have questions?',
      answer: 'Click the blue circle on the bottom right of your screen. Ask anything about The Real World to the Live Chat.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full relative mb-14">
      <div style={{ opacity: 1, transform: 'translateY(0px)' }}>
        <div className="z-10 relative flex flex-col items-center px-4">
          <h3 className="uppercase text-center mb-3">STILL THINKING?</h3>
          <h2 className="text-center mb-8 capitalize switzer tracking-[-1px] lg:tracking-[-3px] !text-[44px] lg:!text-[55px]">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <div className="max-w-[856px] mx-auto fade-in">
            <article className="w-full flex flex-col rounded-xl faqlist gap-3">
              {faqs.map((faq, index) => (
                <div key={index} className="faq">
                  <div
                    className="w-full flex items-center justify-between p-6 cursor-pointer bg-[#0C1021] border-b-[1px] border-[#FFFFFF1A] faq-title rounded-md faqheader"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h6 className="small text-white">{faq.question}</h6>
                    <div className="text-slate-500">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                      </svg>
                    </div>
                  </div>
                  <div 
                    className={`overflow-hidden transition-all duration-200 ${
                      openIndex === index ? 'h-auto p-6' : 'h-0 p-0'
                    }`}
                  >
                    <p className={`text-white transition-all duration-500 ${
                      openIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </article>
          </div>
          <div className="flex justify-center relative flex-col">
            <div className="flex justify-center mt-4">
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
            <div className="flex flex-row items-center gap-2 justify-center mt-[25px] px-4">
              <img alt="Access 12+" loading="lazy" width="22" height="22" decoding="async"
                src={methodsIcon} style={{ color: 'transparent' }} />
              <p className="xsmall">
                <span className="text-white font-bold text-lg">Access 12+</span> wealth creation methods
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;