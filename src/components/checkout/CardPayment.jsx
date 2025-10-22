import InputField from "../common/InputField"
import { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaCheck, FaPhone } from "react-icons/fa";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "../../lib/axios";

const CardPayment = ({ isYearly }) => {
    const [errors, setErrors] = useState({})
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const refId = searchParams.get('refid'); // This will be null if refid doesn't exist
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});
        let goTo;

        const formData = new FormData(e.target);
        const dataToSend = Object.fromEntries(formData)
        // Add referral Id to the data if it exists
        if (refId) {
            dataToSend.referralId = refId;
        }
        try {
            const res = await axios.post('api/v1/users/signup', dataToSend);

            if (res.data.status === 'success') {
                toast.success('Account created successfully! You will be redirected shortly');
                e.target.reset();
                localStorage.setItem("user", JSON.stringify(res.data.data.user));
                if (res.data.data.user.role === 'user') {
                    goTo = '/investor/dashboard'
                }
                if (res.data.data.user.role === 'admin') {
                    goTo = '/admin/dashboard'
                }
                setTimeout(() => {
                    navigate(goTo)
                }, 3000)
            }
        } catch (err) {
            // Extract errors from the backend response
            if (err.response?.data?.errors) {
                setErrors(err.response.data.errors);
            } else {
                // For unexpected errors, set a generic error
                setErrors({ general: 'An unexpected error occurred' });
                console.log('Unexpected Error:', err);
            }
            toast.error(err.response?.data?.message || 'Error creating account');
            console.log(err);

        } finally {
            setProcessing(false);
        }
    };
    
    return (
        <div id="card-payment" className="rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold texture-text mb-6">
                PERSONAL INFORMATION
            </h3>

            <form onSubmit={handleSubmit}>
                {errors.general && (
                    <div className="text-red-500 text-sm mb-4 text-center">
                        {errors.general}
                    </div>
                )}


                {/* First name and last name */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                    <InputField
                        name="firstName"
                        placeholder="John"
                        label="Firstname"
                        icon={<FaUser className="text-text-light" />}
                        uncontrolled={true}
                        error={errors.firstName}
                        disabled={processing}
                    />
                    <InputField
                        name="lastName"
                        placeholder="Doe"
                        label="Lastname"
                        icon={<FaUser className="text-text-light" />}
                        uncontrolled={true}
                        error={errors.lastName}
                        disabled={processing}
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
                        disabled={processing}
                    />

                    <InputField
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        label="Email Address"
                        icon={<FaEnvelope className="text-text-light" />}
                        uncontrolled={true}
                        error={errors.email}
                        disabled={processing}
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
                        disabled={processing}
                    />

                    <InputField
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        label="Password"
                        icon={<FaLock className="text-text-light" />}
                        uncontrolled={true}
                        error={errors.password}
                        disabled={processing}
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
                        disabled={processing}
                    />
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
                        disabled={processing}
                        required
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

                <button
                    type="submit"
                    disabled={processing}
                    className={`w-full text-[#060E15] font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                        processing 
                            ? 'cursor-not-allowed opacity-70' 
                            : 'cursor-pointer hover:scale-[1.05] hover:scale-105'
                    }`}
                    style={{ 
                        background: processing 
                            ? 'linear-gradient(109.78deg, #cccccc -13.37%, #999999 38.96%, #666666 138.03%)'
                            : 'linear-gradient(109.78deg, rgb(255, 255, 255) -13.37%, rgb(236, 200, 112) 38.96%, rgb(134, 114, 64) 138.03%)'
                    }}
                >
                    {processing ? (
                        <>
                            <div className="w-6 h-6 border-2 border-[#060E15] border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-xl">Processing...</span>
                        </>
                    ) : (
                        <>
                            <span>💳</span>
                            <span className="text-xl">Enter The Real World</span>
                        </>
                    )}
                </button>
            </form>

            {/* Footer */}
            <footer className="p-4 text-right text-xs">
                <p>Copyright © 2025 The Real World</p>
            </footer>
        </div>
    )
}

export default CardPayment