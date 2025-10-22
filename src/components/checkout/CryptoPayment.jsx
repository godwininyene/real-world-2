import InputField from "../common/InputField"
import { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaCheck, FaPhone } from "react-icons/fa";
const CryptoPayment = ({ handleNetworkSelect, currentNetwork, currentToken }) => {
    const [errors, setErrors] = useState({})
    return (
        <div
            id="crypto-payment"
            className="rounded-lg p-6 mb-8"
        >
            <h3 className="text-2xl font-bold texture-text mb-6">
                PERSONAL INFORMATION
            </h3>

            {/* Network Selection */}
            {/* <div className="mb-6">
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
            </div> */}

            {/* Token Selection - Ethereum */}
            {/* <div
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
            </div> */}

            {/* Token Selection - Solana */}
            {/* <div
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
            </div> */}

            {/* First name and last name */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                <InputField
                    name="firstName"
                    placeholder="John"
                    label="Firstname"
                    icon={<FaUser className="text-text-light" />}
                    uncontrolled={true}
                    error={errors.firstName}
                />
                <InputField
                    name="lastName"
                    placeholder="Doe"
                    label="Lastname"
                    icon={<FaUser className="text-text-light" />}
                    uncontrolled={true}
                    error={errors.lastName}
                />
            </div>

            {/* Username and email */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                <InputField
                    name="username"
                    type="text"
                    placeholder="johndoe123"
                    label="Username"
                    icon={<FaUser className="text-text-light" />}
                    uncontrolled={true}
                    error={errors.username}
                />

                <InputField
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    label="Email Address"
                    icon={<FaEnvelope className="text-text-light" />}
                    uncontrolled={true}
                    error={errors.email}
                />
            </div>

            {/* Phone and Password */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                <InputField
                    name="phone"
                    placeholder="+1290090888"
                    label="Phone number"
                    icon={<FaPhone className="text-text-light" />}
                    uncontrolled={true}
                    error={errors.phone}
                />

                <InputField
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    label="Password"
                    icon={<FaLock className="text-text-light" />}
                    uncontrolled={true}
                    error={errors.password}
                />
            </div>

            {/* Password Confirm */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                <InputField
                    name="passwordConfirm"
                    type="password"
                    placeholder="••••••••"
                    label="Confirm Password"
                    icon={<FaLock className="text-text-light" />}
                    uncontrolled={true}
                    error={errors.passwordConfirm}
                />
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

            <button
                className="w-full cursor-pointer hover:scale-[1.05]  text-[#060E15] font-bold py-4 rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                style={{ background: 'linear-gradient(109.78deg, rgb(255, 255, 255) -13.37%, rgb(236, 200, 112) 38.96%, rgb(134, 114, 64) 138.03%)' }}
            >
                <span>💳</span>
                <span className="text-xl">Enter The Real World</span>
            </button>

            {/* Footer */}
            <footer className="p-4 text-right text-xs">
                <p>Copyright © 2025 The Real World</p>
            </footer>
        </div>
    )
}
export default CryptoPayment