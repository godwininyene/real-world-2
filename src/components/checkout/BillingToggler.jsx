const BillingToggler = ({isYearly, toggleBilling}) => {
    return (
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
    )
}
export default BillingToggler