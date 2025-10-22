import React from 'react';
// Import images from assets
import jtrwLogo from '../assets/images/jtrw_logo.png';
import mmFlag from '../assets/images/mm.png';
import heroIcon from '../assets/images/hero_icon.svg';

const PurchasePopup = () => {
  return (
    <div className="fixed z-[9999] bottom-4 left-4 flex flex-col gap-3 pointer-events-none" aria-live="polite" aria-atomic="true">
      <div className="pu_purchase-popup blue pointer-events-auto shadow-xl rounded-xl p-1 pr-4 flex gap-3 items-center border transition-opacity duration-300 opacity-100" role="status" style={{ minWidth: '280px' }}>
        <div className="absolute top-2 right-2 text-sm opacity-60 hover:opacity-100 z-10 w-auto cursor-pointer text-white" aria-label="Dismiss">✕</div>
        <div className="pu_content flex-1">
          <div className="pu_text-wrap pu_large leading-tight flex items-center gap-2">
            <img alt="Package" loading="lazy" width="20" height="18" decoding="async" 
              srcSet={`${jtrwLogo} 1x, ${jtrwLogo} 2x`}
              src={jtrwLogo} style={{ color: 'transparent' }} />
            <p className="font-semibold">Welcome to The Real World</p>
          </div>
          <div className="pu_text-wrap pu_small text-sm mt-0.5 flex items-center gap-2">
            <p>Ronan from Myanmar</p>
            <img className="pu_flag w-5 h-4 object-cover" alt="Myanmar Flag" src={mmFlag} />
          </div>
          <div className="pu_text-wrap mt-1 flex items-center gap-2">
            <p>Purchased TRW</p>
            <img className="pu_member-icon w-5 h-5" alt="The Real World Icon" src={heroIcon} />
            <p>Membership!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePopup;