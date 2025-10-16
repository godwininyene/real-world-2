import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full relative z-10 mt-8 lg:mt-16 px-4 undefined">
      <div className="max-w-[1236px] mx-auto flex flex-col lg:flex-row justify-between py-[24px] border-t-[1px] border-[#FFFFFF1A]">
        <div className="my-4 lg:my-16 gap-8 flex flex-col">
          <div className="mt-4 lg:mt-0 flex flex-col lg:flex-row items-center gap-4 lg:gap-[32px]">
            <a href="#">
              <p className="hover:underline text-white">Terms & Conditions</p>
            </a>
            <div className="hidden lg:block w-[1px] h-[20px] bg-white/5"></div>
            <div className="lg:hidden w-[200px] h-[1px] bg-white/5"></div>
            <a href="#">
              <p className="hover:underline text-white">Privacy Policy</p>
            </a>
            <div className="hidden lg:block w-[1px] h-[20px] bg-white/5"></div>
            <div className="lg:hidden w-[200px] h-[1px] bg-white/5"></div>
            <div className="lg:hidden">
              <a href="#">
                <p className="hover:underline text-white">Download</p>
              </a>
            </div>
            <div className="lg:hidden w-[200px] h-[1px] bg-white/5"></div>
            <a href="#">
              <p className="hover:underline text-white">Manage Membership</p>
            </a>
          </div>
          <div className="lg:hidden w-[200px] h-[1px] bg-white/5 mx-auto"></div>
          <div className="lg:hidden gap-8 flex flex-col">
            <div>
              <div className="text-white/50 text-[12px] text-center sfpro">SUPPORT</div>
              <a href="#">
                <p className="hover:underline text-center text-white">support@jointherealworld.com</p>
              </a>
            </div>
            <a href="#">
              <div className="bg-[#181e27] py-4 text-white font-semibold sfpro text-center w-52 mx-auto">Log In</div>
            </a>
          </div>
          <p className="w-full text-white/50 max-w-xl px-4 lg:px-0 !text-[14px] lg:!text-[16px] text-center lg:text-left">
            Everything taught within The Real World is for education purposes only. It is up to each student to implement and do the work.<br /><br />
            The The Real World team doesn't guarantee any profits or financial success.
          </p>
        </div>
        <div className="hidden lg:block my-16 flex flex-col">
          <div className="relative">
            <p className="text-white/50 small">SUPPORT</p>
            <a href="#">
              <p className="hover:underline">support@jointherealworld.com</p>
            </a>
          </div>
          <div className="relative mt-8">
            <a href="#">
              <div className="bg-[#181e27] py-4 px-20 text-white font-semibold sfpro text-center">Log In</div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;