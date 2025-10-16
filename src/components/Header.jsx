import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsCoursesOpen(false);
    }
  };

  const toggleCourses = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setIsCoursesOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('#menu-button') && 
          !event.target.closest('#mobile-menu') && 
          !event.target.closest('#desktop-menu')) {
        setIsMenuOpen(false);
        setIsCoursesOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const MenuIcon = () => (
    <img alt="Menu Icon" loading="lazy" width="17" height="17"
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/svg%3E"
      style={{ color: 'transparent' }} />
  );

  const CloseIcon = () => (
    <svg id="close-icon" stroke="currentColor" fill="currentColor" strokeWidth="0"
      viewBox="0 0 384 512"
      className={`text-lg absolute top-[calc(50%-9px)] right-[-225px] lg:right-[-195px] ${isMenuOpen ? '' : 'hidden'}`}
      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"></path>
    </svg>
  );

  const NavIcon = ({ iconPath }) => (
    <img alt="Nav Icon" loading="lazy" width="17" height="17"
      src={`data:image/svg+xml,${encodeURIComponent(iconPath)}`}
      style={{ color: 'transparent' }} />
  );

  return (
    <div className="lg:fixed top-0 lg:mb-0 z-30 w-full pointer-events-none">
      <nav className="text-sm p-4 z-20 fixed top-0 left-0 w-full">
        <div className="w-full max-w-[1540px] mx-auto relative">
          <div className="items-center justify-between flex w-full relative">
            
            {/* Desktop Menu */}
            <div 
              id="desktop-menu"
              className={`pointer-events-none z-30 lg:pointer-events-auto duration-300 transition-all ${
                isMenuOpen ? 'opacity-100' : 'opacity-0'
              } absolute left-[-22px] top-0 border-[1px] border-[#ffffff1a] bg-[#02040EA1] backdrop-blur-xl pt-[53px] pointer-events-auto w-[352px]`}
            >
              {/* The Real World */}
              <a href="#">
                <div className="text-white text-lg sfpro capitalize min-w-[256px] py-3 border-t-[1px] border-b-[1px] border-[#ffffff1a] group hover:bg-[#D9D9D91A] backdrop-blur-xl pl-8 hover:border-[#6a6d6f] duration-500 transition-all">
                  <div className="flex gap-6 items-center">
                    <NavIcon iconPath="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>" />
                    <div className="group-hover:translate-x-[-16px] duration-500 transition-all">The Real World</div>
                  </div>
                </div>
              </a>

              {/* Courses with Dropdown */}
              <div className="relative group backdrop-blur-xl">
                <div className="text-white text-lg sfpro capitalize min-w-[256px] py-3 false border-b-[1px] border-[#ffffff1a] hover:bg-[#D9D9D91A] backdrop-blur-xl pl-8 hover:border-[#6a6d6f] duration-500 transition-all">
                  <div className="group-hover:translate-x-[-16px] duration-500 transition-all flex items-center justify-between">
                    <div className="flex gap-6 items-center">
                      <NavIcon iconPath="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z'/></svg>" />
                      Courses
                    </div>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                      viewBox="0 0 320 512"
                      className="group-hover:opacity-0 transition-all duration-500 mr-8" height="1em"
                      width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                    </svg>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 top-0 right-[-320px] bg-[#02040EA1] backdrop-blur-2xl border-[#6a6d6f] border-y-[1px] border-r-[1px] absolute w-[320px]">
                  <a href="#">
                    <div className="border-b-[1px] border-[#6a6d6f] hover:bg-[#D9D9D91A] bg-[#02040EA1] backdrop-blur-2xl border-l-[1px] pl-8 py-4 text-white sfpro text-[18px] transition-all duration-500" style={{ borderLeftColor: 'rgb(32, 35, 38)' }}>
                      <div className="flex gap-4 items-center">
                        <NavIcon iconPath="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/></svg>" />
                        <div className="hover:translate-x-[-16px] duration-500 transition-all w-full">AI Campus</div>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="border-b-[1px] border-[#6a6d6f] hover:bg-[#D9D9D91A] bg-[#02040EA1] backdrop-blur-2xl border-l-[1px] pl-8 py-4 text-white sfpro text-[18px] transition-all duration-500" style={{ borderLeftColor: 'rgb(106, 109, 111)' }}>
                      <div className="flex gap-4 items-center">
                        <NavIcon iconPath="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z'/></svg>" />
                        <div className="hover:translate-x-[-16px] duration-500 transition-all w-full">Business Campus</div>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="false hover:bg-[#D9D9D91A] bg-[#02040EA1] backdrop-blur-2xl border-l-[1px] pl-8 py-4 text-white sfpro text-[18px] transition-all duration-500" style={{ borderLeftColor: 'rgb(106, 109, 111)' }}>
                      <div className="flex gap-4 items-center">
                        <NavIcon iconPath="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z'/></svg>" />
                        <div className="hover:translate-x-[-16px] duration-500 transition-all w-full">Fitness Campus</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <a href="#">
                <div className="text-white text-lg sfpro capitalize min-w-[256px] py-3 false border-b-[1px] border-[#ffffff1a] group hover:bg-[#D9D9D91A] backdrop-blur-xl pl-8 hover:border-[#6a6d6f] duration-500 transition-all">
                  <div className="flex gap-6 items-center">
                    <NavIcon iconPath="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/></svg>" />
                    <div className="group-hover:translate-x-[-16px] duration-500 transition-all">Newsletter</div>
                  </div>
                </div>
              </a>

              {/* Downloads */}
              <a href="#">
                <div className="text-white text-lg sfpro capitalize min-w-[256px] py-3 false border-b-[1px] border-[#ffffff1a] group hover:bg-[#D9D9D91A] backdrop-blur-xl pl-8 hover:border-[#6a6d6f] duration-500 transition-all">
                  <div className="flex gap-6 items-center">
                    <NavIcon iconPath="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z'/></svg>" />
                    <div className="group-hover:translate-x-[-16px] duration-500 transition-all">Downloads</div>
                  </div>
                </div>
              </a>

              {/* Videos */}
              <a href="#">
                <div className="text-white text-lg sfpro capitalize min-w-[256px] py-3 false border-b-[1px] border-[#ffffff1a] group hover:bg-[#D9D9D91A] backdrop-blur-xl pl-8 hover:border-[#6a6d6f] duration-500 transition-all">
                  <div className="flex gap-6 items-center">
                    <NavIcon iconPath="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z'/></svg>" />
                    <div className="group-hover:translate-x-[-16px] duration-500 transition-all">Videos</div>
                  </div>
                </div>
              </a>

              {/* Blog */}
              <a href="#">
                <div className="text-white text-lg sfpro capitalize min-w-[256px] py-3 false false group hover:bg-[#D9D9D91A] backdrop-blur-xl pl-8 hover:border-[#6a6d6f] duration-500 transition-all">
                  <div className="flex gap-6 items-center">
                    <NavIcon iconPath="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z'/></svg>" />
                    <div className="group-hover:translate-x-[-16px] duration-500 transition-all">Blog</div>
                  </div>
                </div>
              </a>
            </div>

            {/* Mobile Menu */}
            <div 
              id="mobile-menu"
              className={`lg:hidden lg:pointer-events-none z-30 duration-300 transition-all ${
                isMenuOpen ? 'opacity-100' : 'opacity-0 hidden'
              } fixed left-0 top-[65px] border-[1px] border-[#ffffff1a] bg-[#02040EA1] backdrop-blur-2xl pointer-events-auto w-full h-[100vh]`}
            >
              {/* The Real World */}
              <a href="#">
                <div className="text-white text-lg sfpro capitalize min-w-[256px] py-3 border-b-[1px] border-[#ffffff1a] group hover:bg-[#202326] pl-8 hover:border-[#6a6d6f] duration-500 transition-all">
                  <div className="group-hover:translate-x-[-16px] duration-500 transition-all">
                    <div className="flex gap-6 items-center">
                      <NavIcon iconPath="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>" />
                      The Real World
                    </div>
                  </div>
                </div>
              </a>

              {/* Courses Dropdown Mobile */}
              <div className="mobile-dropdown">
                <div 
                  className="courses-trigger text-white text-lg sfpro capitalize min-w-[256px] py-3 border-b-[1px] border-[#ffffff1a] group hover:bg-[#202326] pl-8 hover:border-[#6a6d6f] duration-500 transition-all cursor-pointer"
                  onClick={toggleCourses}
                >
                  <div className="group-hover:translate-x-[-16px] duration-500 transition-all flex items-center justify-between">
                    <div className="flex gap-6 items-center">
                      <NavIcon iconPath="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z'/></svg>" />
                      Courses
                    </div>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                      viewBox="0 0 448 512"
                      className={`transition-all duration-500 mr-8 dropdown-arrow ${isCoursesOpen ? 'rotate-180' : ''}`}
                      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                    </svg>
                  </div>
                </div>
                <div className={`courses-dropdown ${isCoursesOpen ? 'opacity-100' : 'opacity-0 hidden'} bg-[#02040EA1] backdrop-blur-2xl px-4 border-b-[1px] border-b-[#6a6d6f]`}>
                  <a href="#">
                    <div className="border-b-[1px] border-[#6a6d6f] hover:bg-[#525252] pl-8 py-4 text-white sfpro text-[18px] transition-all duration-500">
                      <div className="flex gap-4 items-center">
                        <NavIcon iconPath="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/></svg>" />
                        <div className="hover:translate-x-[-16px] duration-500 transition-all w-full">AI Campus</div>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="border-b-[1px] border-[#6a6d6f] hover:bg-[#525252] pl-8 py-4 text-white sfpro text-[18px] transition-all duration-500">
                      <div className="flex gap-4 items-center">
                        <NavIcon iconPath="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z'/></svg>" />
                        <div className="hover:translate-x-[-16px] duration-500 transition-all w-full">Business Campus</div>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="false hover:bg-[#525252] pl-8 py-4 text-white sfpro text-[18px] transition-all duration-500">
                      <div className="flex gap-4 items-center">
                        <NavIcon iconPath="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z'/></svg>" />
                        <div className="hover:translate-x-[-16px] duration-500 transition-all w-full">Fitness Campus</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Newsletter Mobile */}
              <a href="#">
                <div className="text-white text-lg sfpro capitalize min-w-[256px] py-3 border-b-[1px] border-[#ffffff1a] group hover:bg-[#202326] pl-8 hover:border-[#6a6d6f] duration-500 transition-all">
                  <div className="group-hover:translate-x-[-16px] duration-500 transition-all">
                    <div className="flex gap-6 items-center">
                      <NavIcon iconPath="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/></svg>" />
                      Newsletter
                    </div>
                  </div>
                </div>
              </a>

              {/* Downloads Mobile */}
              <a href="#">
                <div className="text-white text-lg sfpro capitalize min-w-[256px] py-3 border-b-[1px] border-[#ffffff1a] group hover:bg-[#202326] pl-8 hover:border-[#6a6d6f] duration-500 transition-all">
                  <div className="group-hover:translate-x-[-16px] duration-500 transition-all">
                    <div className="flex gap-6 items-center">
                      <NavIcon iconPath="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z'/></svg>" />
                      Downloads
                    </div>
                  </div>
                </div>
              </a>

              {/* Videos Mobile */}
              <a href="#">
                <div className="text-white text-lg sfpro capitalize min-w-[256px] py-3 border-b-[1px] border-[#ffffff1a] group hover:bg-[#202326] pl-8 hover:border-[#6a6d6f] duration-500 transition-all">
                  <div className="group-hover:translate-x-[-16px] duration-500 transition-all">
                    <div className="flex gap-6 items-center">
                      <NavIcon iconPath="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z'/></svg>" />
                      Videos
                    </div>
                  </div>
                </div>
              </a>

              {/* Blog Mobile */}
              <a href="#">
                <div className="text-white text-lg sfpro capitalize min-w-[256px] py-3 false group hover:bg-[#202326] pl-8 hover:border-[#6a6d6f] duration-500 transition-all">
                  <div className="group-hover:translate-x-[-16px] duration-500 transition-all">
                    <div className="flex gap-6 items-center">
                      <NavIcon iconPath="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z'/></svg>" />
                      Blog
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Menu Button */}
            <div className="w-1/3 lg:w-1/5 relative z-40 flex">
              <div 
                id="menu-button"
                className="justify-between relative group cursor-pointer text-white flex items-center gap-4 pointer-events-auto transition-all duration-300 border-[1px] border-transparent py-1 px-2 w-auto"
                onClick={toggleMenu}
              >
                <div className="flex items-center gap-4">
                  <img alt="Menu Icon" loading="lazy" width="56" height="56" className="w-[28px] h-[28px]"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'/%3E%3C/svg%3E"
                    style={{ color: 'transparent' }} />
                  <p className="text-sm">MENU</p>
                </div>
                <CloseIcon />
              </div>
            </div>

            {/* Logo (Mobile) */}
            <div className="lg:hidden flex justify-center w-1/3">
              <img alt="Join The Real World Logo" loading="lazy" width="85" height="85" decoding="async" 
                className="lg:hidden mt-2" 
                srcSet="/_next/image/jtrw_logo.png 1x, /_next/image/jtrw_logo.png 2x" 
                src="/_next/image/jtrw_logo.png" style={{ color: 'transparent' }} />
            </div>

            {/* Profile Icon (Mobile) */}
            <div className="lg:hidden flex flex-col items-center w-28 flex justify-end pointer-events-auto p-[4px] border-[2px] border-white/40 rounded-full lg:w-auto">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" 
                className="lg:hidden h-[25px] w-[25px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" 
                style={{ color: 'rgba(113, 115, 118, 0.51)' }}>
                <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"></path>
              </svg>
            </div>

            {/* Login Button */}
            <div className="hidden lg:flex w-1/3 justify-end">
              <a className="flex justify-end pointer-events-auto p-[4px] border-[2px] border-white/40 rounded-full lg:w-auto" href="#">
                <button className="transition-all duration-500 hidden lg:block w-auto rounded-full border-white/25 border-[2px] switzer px-4 py-1">LOG IN</button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;