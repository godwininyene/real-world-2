import React, { useState, useEffect } from "react";
import Header from "../components/checkout/Header";
import BillingToggler from "../components/checkout/BillingToggler";
import Students from "../components/checkout/Students";
import CardPayment from "../components/checkout/CardPayment";
import CryptoPayment from "../components/checkout/CryptoPayment";

// Import images from assets
// import v2Bg1 from "./../assets/images/v2_bg1.bbc102ec.png";
// import v2BgOverlay from "./../assets/images/v2_bg_overlay.559958a0.svg";
import upgradeIcon from "./../assets/images/upgrade.53187437.svg";
import checkIcon from "./../assets/images/check.svg";
import payWithCrypto from "./../assets/images/pay-with-crypto.png";

const Checkout = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [currentPaymentMethod, setCurrentPaymentMethod] = useState(null);
  const [currentNetwork, setCurrentNetwork] = useState("ethereum");
  const [currentToken, setCurrentToken] = useState("usdt");

  useEffect(() => {
    import("../assets/styles/checkout.css");
    return () => {
      const styleTags = document.querySelectorAll(
        'link[href*="checkout.css"], style[data-vite-dev-id*="checkout.css"]'
      );
      styleTags.forEach(tag => tag.remove());
    };
  }, []);

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  const handlePaymentMethodSelect = method => {
    setCurrentPaymentMethod(method);

    // Use requestAnimationFrame instead of setTimeout with string
    setTimeout(() => {
      const paymentSection = document.getElementById("payment-section");
      if (paymentSection) {
        paymentSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, 100);
  };

  const handleNetworkSelect = network => {
    setCurrentNetwork(network);
  };

  const handleTokenSelect = token => {
    setCurrentToken(token);
  };

  // Remove the useEffect that adds style element to avoid CSP issues
  // Instead, add the CSS to your checkout.css file

  return (
    <div className="bg-[#060E15] min-h-screen text-white checkout-page w-full overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1A25] to-[#060E15]" />
      </div>
      <div style={{ position: "absolute", zIndex: -1 }}>
        {/* <img
          alt="Background Texture"
          loading="lazy"
          width="1920"
          height="1531"
          decoding="async"
          className="w-full h-[100%] absolute top-0 left-0 z-0 pointer-events-none opacity-5"
          style={{ color: "transparent" }}
          srcSet={`${v2Bg1} 1x, ${v2Bg1} 2x`}
          src={v2Bg1}
        />
        <img
          alt="Background Overlay"
          loading="lazy"
          width="3930"
          height="2281"
          decoding="async"
          className="w-full lg:w-full h-[800px] lg:h-auto mx-auto"
          style={{ color: "transparent" }}
          src={v2BgOverlay}
        /> */}
      </div>

      <article
        className="opacity-100 duration-500 transition-all"
        style={{
          position: "absolute",
          top: "0px",
          width: "100%",
          left: "0px"
        }}
      >
        <div className="py-2 px-4 lg:py-4 flex flex-row items-center justify-center gap-2 timer CountdownTimerComponent complete duration-300 transition-all opacity-100">
          <div className="flex flex-row items-center gap-4">
            <img
              alt="JTRW 2.0 Upgrade In Progress"
              loading="lazy"
              width="29"
              height="26"
              decoding="async"
              src={upgradeIcon}
              style={{ color: "transparent" }}
            />
            <p className="uppercase text-sm font-bold text-white lg:text-2xl">
              TRW 2.0 UPGRADE IN PROGRESS
            </p>
          </div>
        </div>
      </article>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <Header />
        {/* Billing Toggle */}
        <BillingToggler isYearly={isYearly} toggleBilling={toggleBilling} />


        {/* Savings Banner */}
        <div
          className={`flex justify-center mb-12 transition-all duration-300`}
        >
          <div className="toggle-bg-monthly border border-[#FFFFFF26] rounded-full px-8 py-3 my-4 flex items-center gap-4">
            <span className="text-2xl">✨</span>
            <span className="text-white texture-text text-[14px] lg:text-[25px] font-semibold">
              SAVE UP TO <span className="text-[#ECC870]">17%</span> WITH YEARLY
            </span>
          </div>
        </div>

        {/* Pricing Plans */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
          id="pricing-plans"
        >
          {/* Earn Plan - Monthly */}
          <div
            className={`pricing-plan monthly bg-gradient-to-br from-gray-600/25 to-gray-800/25 border  rounded-lg p-6 relative  ${isYearly
              ? "hidden"
              : ""}`}
            style={{ borderColor: 'rgb(151, 0, 8)' }}
          >

            <div className="absolute top-4 right-0 pl-3 pr-6 p-2 bg-red-500 rounded-l-full">
              SOLD OUT
            </div>
            <div className="text-center">
              <h3 className="text-[22px] text-gray-400 uppercase font-bold my-4">
                Earn
              </h3>
              <div className="text-[28px] font-bold mb-6 opacity-60">
                <span className="text-[22px]">$</span>
                49
                <span className="text-[22px] text-gray-400 opacity-70">
                  /month
                </span>
              </div>
            </div>
            <ul className="space-y-3 opacity-50">
              <li className="flex items-start md:items-center  text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                /> Choose 1 Business Model
              </li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                /> Daily Live Broadcasts
              </li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                />Real-Time Course Updates
              </li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                />3 Connected Devices</li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                /> Community Access</li>
            </ul>
          </div>

          {/* Earn Plan - Yearly */}
          <div
            className={`pricing-plan yearly bg-gradient-to-br from-gray-600/25 to-gray-800/25 border rounded-lg p-6 relative ${!isYearly
              ? "hidden"
              : ""}`}
            style={{ borderColor: 'rgb(151, 0, 8)' }}
          >

            <div className="absolute top-4 right-0 pl-3 pr-6 p-2 bg-red-500 rounded-l-full">
              SOLD OUT
            </div>

            <div className="flex absolute  -top-4 left-0 w-full justify-center">
              <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase -translate-y-1/2">
                Save $96
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-[22px] text-gray-400 uppercase font-bold my-4">
                Earn
              </h3>
              <div className="text-[28px] font-bold mb-6 opacity-60">
                <span className="text-[22px]">$</span>
                492
                <span className="text-[22px] text-gray-400 opacity-70">
                  /myear
                </span>
              </div>
            </div>

            <ul className="space-y-3 opacity-50">
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                /> Choose 1 Business Model
              </li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                /> Daily Live Broadcasts
              </li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                /> Real-Time Course Updates
              </li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                /> 3 Connected Devices</li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                />Community Access</li>
            </ul>
          </div>

          {/* Prosper Plan - Monthly */}
          <div
            className={`pricing-plan monthly bg-gradient-to-br from-gray-600/25 to-gray-800/25 border  rounded-lg p-6 relative  ${isYearly
              ? "hidden"
              : ""}`}
            style={{ borderColor: 'rgb(151, 0, 8)' }}
          >

            <div className="absolute top-4 right-0 pl-3 pr-6 p-2 bg-red-500 rounded-l-full">
              SOLD OUT
            </div>
            <div className="text-center">
              <h3 className="text-[22px] text-gray-400 uppercase font-bold my-4">
                Prosper
              </h3>
              <div className="text-[28px] font-bold mb-6 opacity-60">
                <span className="text-[22px]">$</span>
                69
                <span className="text-[22px] text-gray-400 opacity-70">
                  /month
                </span>
              </div>
            </div>
            <ul className="space-y-3 opacity-50">
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                /> Everything in Earn</li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                /> 1 Extra Business Model
              </li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                /> Priority Support</li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                /> 5 Connected Devices</li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                /> Exclusive Workshops</li>
            </ul>
          </div>

          {/* Prosper Plan - Yearly */}
          <div
            className={`pricing-plan yearly bg-gradient-to-br from-gray-600/25 to-gray-800/25 border  rounded-lg p-6 relative ${!isYearly
              ? "hidden"
              : ""}`}
            style={{ borderColor: 'rgb(151, 0, 8)' }}
          >

            <div className="absolute top-4 right-0 pl-3 pr-6 p-2 bg-red-500 rounded-l-full">
              SOLD OUT
            </div>
            <div className="flex absolute -top-4 left-0 w-full justify-center">
              <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase -translate-y-1/2">
                Save $132
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-[22px] text-gray-400 uppercase font-bold my-4">
                Prosper
              </h3>
              <div className="text-[28px] font-bold mb-6 opacity-60">
                <span className="text-[22px]">$</span>
                696
                <span className="text-[22px] text-gray-400 opacity-70">
                  /year
                </span>
              </div>
            </div>
            <ul className="space-y-3 opacity-50">
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                /> Everything in Earn</li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                />
                1 Extra Business Model
              </li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                />
                Priority Support
              </li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                /> 5 Connected Devices
              </li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                />Exclusive Workshops</li>
            </ul>
          </div>

          {/* Conquer Plan - Monthly */}
          <div
            className={`pricing-plan monthly bg-gradient-to-br from-white/5 via-pink-500/5 to-yellow-500/5 border border-pink-400 rounded-lg p-6 relative ${isYearly
              ? "hidden"
              : ""}`}
          >
            <div className="text-center">
              <h3 className="text-xl text-gray-400 uppercase font-bold mb-4">
                Conquer
              </h3>
              <div className="text-2xl font-bold mb-6">
                <span className="text-lg">$</span>99<span className="text-lg text-gray-400">
                  /month
                </span>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                />
                Everything in Prosper
              </li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                />
                9+ Extra Business Models
              </li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                />
                VIP Account Ranking
              </li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                />
                7 Connected Devices
              </li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                />
                Early Access to New Content
              </li>
            </ul>
            <button
              onClick={() => handlePaymentMethodSelect("card")}
              className="text-[16px] py-2 px-4 text-white/70 hover:scale-[1.05] flex flex-grow items-center justify-between border-[1px] font-bold border-[#243749] hover:text-white rounded-lg translate-y-0 hover:translate-y-[-1px] cursor-pointer group w-full transition-all duration-500"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 group-hover:text-white transition-all duration-500 text-white/70"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </span>
              <span>Join with Card</span>
            </button>
          </div>

          {/* Conquer Plan - Yearly */}
          <div
            className={`pricing-plan yearly bg-gradient-to-br from-white/5 via-pink-500/5 to-yellow-500/5 border border-pink-400 rounded-lg p-6 relative ${!isYearly
              ? "hidden"
              : ""}`}
          >
           
            <div className="flex absolute -top-4 left-0 w-full justify-center">
              <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase -translate-y-1/2">
                Save $192
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl text-gray-400 uppercase font-bold mb-4">
                Conquer
              </h3>
              <div className="text-2xl font-bold mb-6">
                <span className="text-lg">$</span>996<span className="text-lg text-gray-400">/year</span>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                />
                Everything in Prosper
              </li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                />
                9+ Extra Business Models
              </li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                />
                VIP Account Ranking
              </li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                />
                7 Connected Devices
              </li>
              <li className="flex items-start md:items-center text-white text-[14px] lg:text-[16px]">
                <img alt="check icon"
                  loading="lazy" width="21" height="17" decoding="async" data-nimg="1"
                  className="mr-2 w-[12px] md:w-[15px] translate-y-[5px] md:translate-y-0"
                  src={checkIcon} style={{ color: 'transparent' }}
                />
                Early Access to New Content
              </li>
            </ul>
            <button
              onClick={() => handlePaymentMethodSelect("crypto")}
              className="payment-btn crypto w-full bg-gradient-to-r from-[#1E2E3C] to-[#0E1923] border border-gray-700 hover:scale-[1.05] cursor-pointer rounded-lg py-2 px-4 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>
                <img
                  alt="Crypto"
                  loading="lazy"
                  width="98"
                  height="110"
                  decoding="async"
                  className="w-8 h-8 group-hover:text-white transition-all duration-500 text-white/70"
                  srcSet={`${payWithCrypto} 1x, ${payWithCrypto} 2x`}
                  src={payWithCrypto}
                  style={{ color: "transparent" }}
                />
              </span>
              <span>Join with Crypto</span>
            </button>
          </div>
        </div>

        {/* Students Counter */}
        <Students />
        <p className="mt-4 pb-4">
          *All Prices Are Presented In USD.
        </p>


        {/* Payment Methods Section */}
        <div
          id="payment-section"
          className={`mt-4 ${currentPaymentMethod ? "" : "hidden"}`}
        >
          {/* Card Payment Form */}
          {(currentPaymentMethod === "card" || currentPaymentMethod === 'crypto') &&
            <CardPayment isYearly={isYearly} />
          }

          {/* Crypto Payment Form */}
          {/* {currentPaymentMethod === "crypto" &&
            <CryptoPayment
              handleNetworkSelect={handleNetworkSelect}
              currentNetwork={currentNetwork}
              currentToken={currentToken}
            />

          } */}
        </div>
      </main>
    </div>
  );
};

export default Checkout;