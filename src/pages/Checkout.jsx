import React, { useState, useEffect } from "react";

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
    <div className="bg-[#060E15] min-h-screen text-white checkout-page">
      {/* Background */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1A25] to-[#060E15]" />
      </div>
      <div style={{ position: "absolute", zIndex: -1 }}>
        <img
          alt="Background Texture"
          loading="lazy"
          width="1920"
          height="1531"
          decoding="async"
          className="w-full h-[100%] absolute top-0 left-0 z-0 pointer-events-none opacity-5"
          style={{ color: "transparent" }}
          srcSet="/checkout/_next/v2_bg1.bbc102ec.png 1x, /checkout/_next/v2_bg1.bbc102ec.pn 2x"
          src="/checkout/_next/v2_bg1.bbc102ec.pn"
        />
        <img
          alt="Background Overlay"
          loading="lazy"
          width="3930"
          height="2281"
          decoding="async"
          className="w-full lg:w-full h-[800px] lg:h-auto mx-auto"
          style={{ color: "transparent" }}
          src="/checkout/_next/static/media/v2_bg_overlay.559958a0.svg"
        />
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
              src="/checkout/_next/static/media/upgrade.53187437.svg"
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
        <header className="text-center mb-12 mt-12">
          <div className="glow" />
          <img
            src="/checkout/_next/static/media/trw-256.c3bb2895.png"
            alt="TRW Logo"
            className="w-16 h-16 mx-auto mb-6"
          />
          <h1 className="text-4xl lg:text-6xl font-bold texture-text mb-4">
            CHOOSE YOUR PATH TO SUCCESS
          </h1>
          <p className="text-lg lg:text-xl text-gray-400">
            Join thousands crushing their competition and building enemies
          </p>
        </header>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <span
            className={`text-xl ${!isYearly
              ? "text-white font-bold"
              : "text-gray-400"}`}
          >
            Monthly
          </span>
          <div
            className={`w-20 h-10 rounded-full border border-[#FFFFFF26] p-1 cursor-pointer ${isYearly
              ? "toggle-bg-yearly"
              : "toggle-bg-monthly"}`}
            onClick={toggleBilling}
          >
            <div
              className={`w-8 h-8 rounded-full border border-[#58636D69] transition-all duration-300 ${isYearly
                ? "toggle-knob-yearly transform translate-x-10"
                : "toggle-knob-monthly transform translate-x-0"}`}
            />
          </div>
          <span
            className={`text-xl ${isYearly
              ? "text-white font-bold"
              : "text-gray-400"}`}
          >
            Yearly
          </span>
        </div>

        {/* Savings Banner */}
        <div
          className={`flex justify-center mb-12 transition-all duration-300 ${isYearly
            ? ""
            : "hidden"}`}
        >
          <div className="toggle-bg-monthly border border-[#FFFFFF26] rounded-full px-8 py-3 flex items-center gap-4">
            <span>✨</span>
            <span className="text-lg font-semibold">
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
            className={`pricing-plan monthly bg-gradient-to-br from-gray-600/25 to-gray-800/25 border border-red-600 rounded-lg p-6 relative opacity-50 ${isYearly
              ? "hidden"
              : ""}`}
          >
            <div className="absolute top-4 right-0 bg-red-500 text-white px-4 py-1 rounded-l-full text-sm">
              SOLD OUT
            </div>
            <div className="text-center">
              <h3 className="text-xl text-gray-400 uppercase font-bold mb-4">
                Earn
              </h3>
              <div className="text-2xl font-bold mb-6">
                <span className="text-lg">$</span>49<span className="text-lg text-gray-400">
                  /month
                </span>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                ✓ Choose 1 Business Model
              </li>
              <li className="flex items-center gap-2">
                ✓ Daily Live Broadcasts
              </li>
              <li className="flex items-center gap-2">
                ✓ Real-Time Course Updates
              </li>
              <li className="flex items-center gap-2">✓ 3 Connected Devices</li>
              <li className="flex items-center gap-2">✓ Community Access</li>
            </ul>
          </div>

          {/* Earn Plan - Yearly */}
          <div
            className={`pricing-plan yearly bg-gradient-to-br from-gray-600/25 to-gray-800/25 border border-red-600 rounded-lg p-6 relative opacity-50 ${!isYearly
              ? "hidden"
              : ""}`}
          >
            <div className="absolute top-4 right-0 bg-red-500 text-white px-4 py-1 rounded-l-full text-sm">
              SOLD OUT
            </div>
            <div className="flex absolute top-0 left-0 w-full justify-center">
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase -translate-y-1/2">
                Save $96
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl text-gray-400 uppercase font-bold mb-4">
                Earn
              </h3>
              <div className="text-2xl font-bold mb-6">
                <span className="text-lg">$</span>492<span className="text-lg text-gray-400">/year</span>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                ✓ Choose 1 Business Model
              </li>
              <li className="flex items-center gap-2">
                ✓ Daily Live Broadcasts
              </li>
              <li className="flex items-center gap-2">
                ✓ Real-Time Course Updates
              </li>
              <li className="flex items-center gap-2">✓ 3 Connected Devices</li>
              <li className="flex items-center gap-2">✓ Community Access</li>
            </ul>
          </div>

          {/* Prosper Plan - Monthly */}
          <div
            className={`pricing-plan monthly bg-gradient-to-br from-gray-600/25 to-gray-800/25 border border-red-600 rounded-lg p-6 relative opacity-50 ${isYearly
              ? "hidden"
              : ""}`}
          >
            <div className="absolute top-4 right-0 bg-red-500 text-white px-4 py-1 rounded-l-full text-sm">
              SOLD OUT
            </div>
            <div className="text-center">
              <h3 className="text-xl text-gray-400 uppercase font-bold mb-4">
                Prosper
              </h3>
              <div className="text-2xl font-bold mb-6">
                <span className="text-lg">$</span>69<span className="text-lg text-gray-400">
                  /month
                </span>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">✓ Everything in Earn</li>
              <li className="flex items-center gap-2">
                ✓ 1 Extra Business Model
              </li>
              <li className="flex items-center gap-2">✓ Priority Support</li>
              <li className="flex items-center gap-2">✓ 5 Connected Devices</li>
              <li className="flex items-center gap-2">✓ Exclusive Workshops</li>
            </ul>
          </div>

          {/* Prosper Plan - Yearly */}
          <div
            className={`pricing-plan yearly bg-gradient-to-br from-gray-600/25 to-gray-800/25 border border-red-600 rounded-lg p-6 relative opacity-50 ${!isYearly
              ? "hidden"
              : ""}`}
          >
            <div className="absolute top-4 right-0 bg-red-500 text-white px-4 py-1 rounded-l-full text-sm">
              SOLD OUT
            </div>
            <div className="flex absolute top-0 left-0 w-full justify-center">
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase -translate-y-1/2">
                Save $132
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl text-gray-400 uppercase font-bold mb-4">
                Prosper
              </h3>
              <div className="text-2xl font-bold mb-6">
                <span className="text-lg">$</span>696<span className="text-lg text-gray-400">/year</span>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">✓ Everything in Earn</li>
              <li className="flex items-center gap-2">
                ✓ 1 Extra Business Model
              </li>
              <li className="flex items-center gap-2">✓ Priority Support</li>
              <li className="flex items-center gap-2">✓ 5 Connected Devices</li>
              <li className="flex items-center gap-2">✓ Exclusive Workshops</li>
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
              <li className="flex items-center gap-2">
                ✓ Everything in Prosper
              </li>
              <li className="flex items-center gap-2">
                ✓ 9+ Extra Business Models
              </li>
              <li className="flex items-center gap-2">✓ VIP Account Ranking</li>
              <li className="flex items-center gap-2">✓ 7 Connected Devices</li>
              <li className="flex items-center gap-2">
                ✓ Early Access to New Content
              </li>
            </ul>
            <button
              onClick={() => handlePaymentMethodSelect("card")}
              className="payment-btn card w-full bg-gradient-to-r from-[#1E2E3C] to-[#0E1923] border border-gray-700 rounded-lg py-3 px-4 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
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
            <div className="flex absolute top-0 left-0 w-full justify-center">
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase -translate-y-1/2">
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
              <li className="flex items-center gap-2">
                ✓ Everything in Prosper
              </li>
              <li className="flex items-center gap-2">
                ✓ 9+ Extra Business Models
              </li>
              <li className="flex items-center gap-2">✓ VIP Account Ranking</li>
              <li className="flex items-center gap-2">✓ 7 Connected Devices</li>
              <li className="flex items-center gap-2">
                ✓ Early Access to New Content
              </li>
            </ul>
            <button
              onClick={() => handlePaymentMethodSelect("crypto")}
              className="payment-btn crypto w-full bg-gradient-to-r from-[#1E2E3C] to-[#0E1923] border border-gray-700 rounded-lg py-3 px-4 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>
                <img
                  alt="Crypto"
                  loading="lazy"
                  width="98"
                  height="110"
                  decoding="async"
                  className="w-8 h-8 group-hover:text-white transition-all duration-500 text-white/70"
                  srcSet="/checkout/_next/pay-with-crypto.png 1x, /checkout/_next/pay-with-crypto.png 2x"
                  src="/checkout/_next/pay-with-crypto.png"
                  style={{ color: "transparent" }}
                />
              </span>
              <span>Join with Crypto</span>
            </button>
          </div>
        </div>

        {/* Students Counter */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span>👥</span>
          <p className="text-lg">
            Join <span className="text-[#ECC870]">155,000+</span> members
            already transforming their lives
          </p>
        </div>

        {/* Payment Methods Section */}
        <div
          id="payment-section"
          className={currentPaymentMethod ? "" : "hidden"}
        >
          {/* Card Payment Form */}
          {currentPaymentMethod === "card" &&
            <div id="card-payment" className="bg-[#0D1A25] rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold texture-text mb-6">
                CARD INFORMATION
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                <div className="relative">
                  <label className="block text-sm font-medium mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    className="w-full bg-[#0D1A25] border border-gray-600 rounded-lg px-12 py-3"
                    placeholder="xxxx xxxx xxxx xxxx"
                  />
                  <span className="absolute left-4 bottom-3">💳</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      className="w-full bg-[#0D1A25] border border-gray-600 rounded-lg px-4 py-3"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      CVC
                    </label>
                    <input
                      type="text"
                      name="cvc"
                      className="w-full bg-[#0D1A25] border border-gray-600 rounded-lg px-4 py-3"
                      placeholder="xxx"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Billing Address
                </label>
                <input
                  type="text"
                  name="billingAddress"
                  className="w-full bg-[#0D1A25] border border-gray-600 rounded-lg px-4 py-3"
                  placeholder="Billing Address"
                />
              </div>

              {/* User Information */}
              <div className="mb-6">
                <h4 className="text-2xl font-bold texture-text mb-4">
                  YOUR INFORMATION
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full bg-[#0D1A25] border border-gray-600 rounded-lg px-4 py-3"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      className="w-full bg-[#0D1A25] border border-gray-600 rounded-lg px-4 py-3"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
              </div>

              {/* Total and Agreement */}
              <div className="bg-[#0D1A25] rounded-lg p-6 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold">Total Due:</span>
                  <span className="text-2xl font-bold text-[#ECC870] monthly-total">
                    {isYearly ? "$996 / year" : "$99 / month"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <input
                  type="checkbox"
                  name="termsAgreement"
                  className="w-5 h-5"
                />
                <span className="text-gray-400">
                  I accept the{" "}
                  <a href="#" className="underline">
                    Terms and Conditions
                  </a>{" "}
                  and
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>, and agree to pay{" "}
                  {isYearly
                    ? "$996 USD every year"
                    : "$99 USD every month"}{" "}
                  until I cancel.
                </span>
              </div>

              <button className="w-full bg-gradient-to-r from-white to-[#ECC870] text-[#060E15] font-bold py-4 rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                <span>💳</span>
                <span className="text-xl">Enter The Real World</span>
              </button>
            </div>}

          {/* Crypto Payment Form */}
          {currentPaymentMethod === "crypto" &&
            <div
              id="crypto-payment"
              className="bg-[#0D1A25] rounded-lg p-6 mb-8"
            >
              {/* Network Selection */}
              <div className="mb-6">
                <h4 className="text-2xl font-bold texture-text mb-4">
                  Select Network & Token
                </h4>
                <div className="flex border border-gray-600 rounded-lg overflow-hidden">
                  <button
                    onClick={() => handleNetworkSelect("ethereum")}
                    className={`network-btn flex-1 ${currentNetwork ===
                    "ethereum"
                      ? "bg-[#3A4D5E]"
                      : "bg-[#0D1A25]"} py-4 flex items-center justify-center gap-2`}
                  >
                    <span>⧫</span>
                    <span
                      className={
                        currentNetwork === "ethereum"
                          ? "font-bold text-white"
                          : ""
                      }
                    >
                      Ethereum
                    </span>
                  </button>
                  <button
                    onClick={() => handleNetworkSelect("solana")}
                    className={`network-btn flex-1 ${currentNetwork === "solana"
                      ? "bg-[#3A4D5E]"
                      : "bg-[#0D1A25]"} py-4 flex items-center justify-center gap-2`}
                  >
                    <span>◎</span>
                    <span
                      className={
                        currentNetwork === "solana"
                          ? "font-bold text-white"
                          : ""
                      }
                    >
                      Solana
                    </span>
                  </button>
                </div>
              </div>

              {/* Token Selection - Ethereum */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6 ${currentNetwork !==
                "ethereum"
                  ? "hidden"
                  : ""}`}
              >
                <button
                  onClick={() => handleTokenSelect("usdt")}
                  className={`token-btn ${currentToken === "usdt"
                    ? "bg-[#3A4D5E]"
                    : "bg-[#0D1A25]"} border border-gray-600 rounded-lg p-4 flex items-center justify-center gap-2`}
                >
                  <span>💰</span>
                  <span
                    className={
                      currentToken === "usdt" ? "font-bold text-white" : ""
                    }
                  >
                    USDT<span className="text-sm">(ERC-20)</span>
                  </span>
                </button>
                <button
                  onClick={() => handleTokenSelect("usdc")}
                  className={`token-btn ${currentToken === "usdc"
                    ? "bg-[#3A4D5E]"
                    : "bg-[#0D1A25]"} border border-gray-600 rounded-lg p-4 flex items-center justify-center gap-2`}
                >
                  <span>💰</span>
                  <span
                    className={
                      currentToken === "usdc" ? "font-bold text-white" : ""
                    }
                  >
                    USDC<span className="text-sm">(ERC-20)</span>
                  </span>
                </button>
                <button
                  onClick={() => handleTokenSelect("native")}
                  className={`token-btn ${currentToken === "native"
                    ? "bg-[#3A4D5E]"
                    : "bg-[#0D1A25]"} border border-gray-600 rounded-lg p-4 flex items-center justify-center gap-2`}
                >
                  <span>⧫</span>
                  <span
                    className={
                      currentToken === "native" ? "font-bold text-white" : ""
                    }
                  >
                    ETH<span className="text-sm">(ERC-20)</span>
                  </span>
                </button>
              </div>

              {/* Token Selection - Solana */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6 ${currentNetwork !==
                "solana"
                  ? "hidden"
                  : ""}`}
              >
                <button
                  onClick={() => handleTokenSelect("usdt")}
                  className={`token-btn ${currentToken === "usdt"
                    ? "bg-[#3A4D5E]"
                    : "bg-[#0D1A25]"} border border-gray-600 rounded-lg p-4 flex items-center justify-center gap-2`}
                >
                  <span>💰</span>
                  <span
                    className={
                      currentToken === "usdt" ? "font-bold text-white" : ""
                    }
                  >
                    USDT<span className="text-sm">(Solana)</span>
                  </span>
                </button>
                <button
                  onClick={() => handleTokenSelect("usdc")}
                  className={`token-btn ${currentToken === "usdc"
                    ? "bg-[#3A4D5E]"
                    : "bg-[#0D1A25]"} border border-gray-600 rounded-lg p-4 flex items-center justify-center gap-2`}
                >
                  <span>💰</span>
                  <span
                    className={
                      currentToken === "usdc" ? "font-bold text-white" : ""
                    }
                  >
                    USDC<span className="text-sm">(Solana)</span>
                  </span>
                </button>
                <button
                  onClick={() => handleTokenSelect("native")}
                  className={`token-btn ${currentToken === "native"
                    ? "bg-[#3A4D5E]"
                    : "bg-[#0D1A25]"} border border-gray-600 rounded-lg p-4 flex items-center justify-center gap-2`}
                >
                  <span>◎</span>
                  <span
                    className={
                      currentToken === "native" ? "font-bold text-white" : ""
                    }
                  >
                    SOL<span className="text-sm">(Solana)</span>
                  </span>
                </button>
              </div>

              {/* User Information */}
              <div className="mb-6">
                <h4 className="text-2xl font-bold texture-text mb-4">
                  YOUR INFORMATION
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="cryptoEmail"
                      className="w-full bg-[#0D1A25] border border-gray-600 rounded-lg px-4 py-3"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="cryptoFullName"
                      className="w-full bg-[#0D1A25] border border-gray-600 rounded-lg px-4 py-3"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
              </div>

              {/* Total and Agreement */}
              <div className="bg-[#0D1A25] rounded-lg p-6 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold">Total Due:</span>
                  <span className="text-2xl font-bold text-[#ECC870]">
                    $996 / year
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <input type="checkbox" name="cryptoTerms" className="w-5 h-5" />
                <span className="text-gray-400">
                  I accept the{" "}
                  <a href="#" className="underline">
                    Terms and Conditions
                  </a>{" "}
                  and
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                </span>
              </div>

              <button className="w-full bg-gradient-to-r from-white to-[#ECC870] text-[#060E15] font-bold py-4 rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                <span>💰</span>
                <span className="text-xl">Join with 996.00 USDT (ERC-20)</span>
              </button>
            </div>}
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm mt-8">
          <p>Copyright © 2025 The Real World</p>
        </footer>
      </main>
    </div>
  );
};

export default Checkout;
