import React from 'react';

const FloatingButton = () => {
  return (
    <div className="hidden fixed bottom-4 left-4 lg:right-24 lg:left-auto flex z-50 lg:flex">
      <a className="w-auto" href="#">
        <div className="smallglow"></div>
        <div className="special button-container duration-500 transition-all w-full hover:w-[105%] hover:ml-[-2.5%] group">
          <button className="uppercase duration-500 transition-all">join now</button>
          <div className="left-[50%] top-[50%] w-[0px] h-[0px] bg-[#ffffff1a] rounded-full group-hover:w-[500px] group-hover:h-[500px] duration-500 transition-all absolute pointer-events-none text-center group-hover:left-[calc(50%-250px)] group-hover:top-[calc(50%-250px)]" style={{ willChange: 'height, width, top, left' }}></div>
        </div>
      </a>
    </div>
  );
};

export default FloatingButton;