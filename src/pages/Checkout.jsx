import React, { useState } from 'react';

const Checkout = () => {
    const [isYearly, setIsYearly] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('');

    const plans = {
        monthly: [
            {
                name: 'EARN',
                price: '$49',
                period: '/month',
                soldOut: true,
                features: [
                    'Choose 1 Business Model',
                    'Daily Live Broadcasts',
                    'Real-Time Course Updates',
                    '3 Connected Devices',
                    'Community Access'
                ]
            },
            {
                name: 'PROSPER',
                price: '$69',
                period: '/month',
                soldOut: true,
                features: [
                    'Everything in Earn',
                    '1 Extra Business Model',
                    'Priority Support',
                    '5 Connected Devices',
                    'Exclusive Workshops'
                ]
            },
            {
                name: 'CONQUER',
                price: '$99',
                period: '/month',
                soldOut: false,
                features: [
                    'Everything in Prosper',
                    '9+ Extra Business Models',
                    'VIP Account Ranking',
                    '7 Connected Devices',
                    'Early Access to New Content'
                ]
            }
        ],
        yearly: [
            {
                name: 'EARN',
                price: '$492',
                period: '/year',
                saveAmount: 'SAVE $92',
                originalPrice: '$584',
                soldOut: true,
                features: [
                    'Choose 1 Business Model',
                    'Daily Live Broadcasts',
                    'Real-Time Course Updates',
                    '3 Connected Devices',
                    'Community Access'
                ]
            },
            {
                name: 'PROSPER',
                price: '$696',
                period: '/year',
                saveAmount: 'SAVE $132',
                originalPrice: '$828',
                soldOut: true,
                features: [
                    'Everything in Earn',
                    '1 Extra Business Model',
                    'Priority Support',
                    '5 Connected Devices',
                    'Exclusive Workshops'
                ]
            },
            {
                name: 'CONQUER',
                price: '$996',
                period: '/year',
                saveAmount: 'SAVE $122',
                originalPrice: '$1,188',
                soldOut: false,
                features: [
                    'Everything in Prosper',
                    '9+ Extra Business Models',
                    'VIP Account Ranking',
                    '7 Connected Devices',
                    'Early Access to New Content'
                ]
            }
        ]
    };

    const currentPlans = isYearly ? plans.yearly : plans.monthly;

    const handlePlanSelect = (planName) => {
        const plan = currentPlans.find(p => p.name === planName);
        if (plan && !plan.soldOut) {
            setSelectedPlan(planName);
            setShowForm(true);
        }
    };

    const PaymentForm = () => (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-3xl p-8 max-w-md w-full border border-gray-800 relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-white">Complete Payment</h3>
                    <button
                        onClick={() => setShowForm(false)}
                        className="text-gray-400 hover:text-white text-xl"
                    >
                        ✕
                    </button>
                </div>

                <div className="bg-gray-800 rounded-xl p-4 mb-6 border border-gray-700">
                    <h4 className="font-bold text-white text-lg mb-1">{selectedPlan} Plan</h4>
                    <p className="text-gray-300">
                        {isYearly ? 'Yearly Subscription' : 'Monthly Subscription'}
                    </p>
                    <p className="text-2xl font-bold text-white mt-2">
                        {currentPlans.find(plan => plan.name === selectedPlan)?.price}
                        <span className="text-lg text-gray-300">
                            {currentPlans.find(plan => plan.name === selectedPlan)?.period}
                        </span>
                    </p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            {isYearly ? 'Crypto Wallet Address' : 'Credit Card Information'}
                        </label>
                        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
                            <div className="text-center text-gray-400">
                                {isYearly ? 'Crypto payment gateway' : 'Secure card processing'}
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
                    >
                        {isYearly ? 'Pay with Crypto' : 'Pay with Card'} - {
                            currentPlans.find(plan => plan.name === selectedPlan)?.price
                        }
                        {currentPlans.find(plan => plan.name === selectedPlan)?.period}
                    </button>
                </form>

                <p className="text-center text-gray-500 text-xs mt-4">
                    Secure encrypted payment • 7-day money back guarantee
                </p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="py-2 px-4 lg:py-4 flex flex-row items-center justify-center gap-2 timer CountdownTimerComponent complete duration-300 transition-all opacity-100">

                    <div className='flex flex-row items-center gap-4'>
                        <img alt="JTRW 2.0 Upgrade In Progress" loading="lazy" width="29" height="26" decoding="async" data-nimg="1" src="/_next/image/upgrade.svg" style={{ color: 'transparent' }} />
                        <p className='uppercase text-sm font-bold text-white lg:text-2xl'> TRW 2.0 UPGRADE IN PROGRESS</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col false max-w-[1480px] mx-auto xl:px-4'>
                <div className='flex flex-col pr-[22px] pl-[23px] relative max-w-[1200px] w-full mx-auto'>
                    <div class="lg:block w-full absolute top-0 left-0 z-0 pointer-events-none"></div>
                    <div className='flex flex-col mt-[25px] text-primary-content w-full text-center items-center justify-center'>
                        <div class="glow"></div>
                        <img class="z-10 object-contain relative trw-logo mx-auto lg:mx-0 h-[65px] max-w-[65px] lg:max-w-[105px] lg:h-[105px]" src="/_next/image/trw-256.c3bb2895.png" alt="logo"/>
                        <p class="text-4xl md:text-[120px] font-bold mx-auto mt-4 font-cg texture-text leading-[38px] lg:leading-[60px]">CHOOSE YOUR PATH TO SUCCESS</p>
                        <p class="lg:text-[22px] text-[18px] mx-auto mt-4 leading-[38px] text-white/70 font-semibold">Join thousands crushing their competition and building enemies</p>
                    </div>
                   

                    {/* Toggle Switch */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-gray-900 rounded-full p-1 border border-gray-800">
                            <div className="flex items-center">
                                <button
                                    onClick={() => setIsYearly(false)}
                                    className={`px-8 py-3 rounded-full font-bold transition-all duration-200 ${!isYearly
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    Monthly
                                </button>
                                <button
                                    onClick={() => setIsYearly(true)}
                                    className={`px-8 py-3 rounded-full font-bold transition-all duration-200 ${isYearly
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    Yearly
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Save Badge */}
                    {isYearly && (
                        <div className="text-center mb-8">
                            <div className="inline-block bg-green-500 text-black font-bold px-6 py-3 rounded-full text-sm">
                                SAVE UP TO 17% WITH YEARLY
                            </div>
                        </div>
                    )}

                    {/* Pricing Cards */}
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                        {currentPlans.map((plan, index) => (
                            <div
                                key={plan.name}
                                className={`relative rounded-2xl p-6 border-2 transition-all duration-300 ${plan.soldOut
                                    ? 'border-gray-800 bg-gray-900/50 opacity-80'
                                    : 'border-yellow-500 bg-gray-900 hover:border-yellow-400 hover:transform hover:scale-[1.02]'
                                    }`}
                            >
                                {/* Sold Out Badge */}
                                {plan.soldOut && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="bg-red-500 text-white font-bold px-6 py-2 rounded-full text-sm shadow-lg">
                                            SOLD OUT
                                        </div>
                                    </div>
                                )}

                                {/* Save Amount for Yearly */}
                                {isYearly && plan.saveAmount && (
                                    <div className="text-green-400 font-bold text-center mb-3 text-sm">
                                        {plan.saveAmount}
                                    </div>
                                )}

                                {/* Plan Name */}
                                <h3 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    {plan.name}
                                </h3>

                                {/* Price */}
                                <div className="text-center mb-6">
                                    <div className="text-4xl font-bold">
                                        {plan.price}
                                        <span className="text-xl text-gray-300">{plan.period}</span>
                                    </div>
                                    {isYearly && plan.originalPrice && (
                                        <div className="text-gray-400 line-through text-lg mt-1">
                                            {plan.originalPrice}
                                        </div>
                                    )}
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Join Button */}
                                <button
                                    onClick={() => handlePlanSelect(plan.name)}
                                    disabled={plan.soldOut}
                                    className={`w-full py-4 rounded-xl font-bold transition-all duration-200 ${plan.soldOut
                                        ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] shadow-lg'
                                        }`}
                                >
                                    {plan.soldOut ? 'SOLD OUT' : `Join with ${isYearly ? 'Crypto' : 'Card'}`}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="text-center">
                        <p className="text-gray-400 mb-4 text-lg">
                            Join 155,000+ members already transforming their lives
                        </p>
                        <p className="text-gray-500 text-sm">
                            *All Prices Are Presented In USD.
                        </p>
                    </div>


                    {/* Payment Form Modal */}
                    {showForm && <PaymentForm />}
                </div>
            </div>
        </div>
    );
};

export default Checkout;