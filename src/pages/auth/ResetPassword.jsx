import { FaArrowLeft } from 'react-icons/fa'
import InputField from "../../components/common/InputField";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoLogInOutline } from 'react-icons/io5';
import axios from "../../lib/axios";

const ResetPassword = () => {
    const [processing, setProcessing] = useState(false);
    const searchParams = new URLSearchParams(document.location.search)
    const token = searchParams.get('t')

    const [formData, setFormData] = useState({
        password: '',
        passwordConfirm: ''
    });

    const [errors, setErrors] = useState({
        general: '',
        password: '',
        passwordConfirm: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear field-specific error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
        if (errors.general) {
            setErrors(prev => ({ ...prev, general: '' }));
        }
    }

    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        
        // Basic validation
        if (formData.password !== formData.passwordConfirm) {
            setErrors(prev => ({ 
                ...prev, 
                passwordConfirm: 'Passwords do not match' 
            }));
            return;
        }

        setProcessing(true);
        setErrors({ general: '', password: '', passwordConfirm: '' }); // Clear previous errors
        
        try {
            const response = await axios.patch(`api/v1/users/resetPassword/${token}`, {
                password: formData.password,
                passwordConfirm: formData.passwordConfirm
            });
            
            if (response.data.status === 'success') {
                localStorage.setItem("user", JSON.stringify(response.data.data.user));
                
                
                if (response.data.data.user.role === 'user') {
                    navigate('/investor/dashboard');
                } else if (response.data.data.data.user.role === 'admin') {
                    navigate('/admin/dashboard');
                } else {
                    // Default redirect if role is not specified
                    navigate('/dashboard');
                }
            }

        } catch (err) {
            if (err.response?.data?.errors) {
                // Handle field-specific errors from API
                const apiErrors = err.response.data.errors;
                setErrors(prev => ({
                    ...prev,
                    password: apiErrors.password || '',
                    passwordConfirm: apiErrors.passwordConfirm || ''
                }));
            } else if (err.response?.data?.message) {
                // Handle general API error messages
                setErrors(prev => ({ 
                    ...prev, 
                    general: err.response.data.message 
                }));
            } else if (err.request) {
                // Network error - no response received
                setErrors(prev => ({ 
                    ...prev, 
                    general: 'Network error. Please check your connection and try again.' 
                }));
            } else {
                // Unexpected error
                setErrors(prev => ({ 
                    ...prev, 
                    general: 'An unexpected error occurred. Please try again.' 
                }));
            }
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className='w-full max-w-[95vw] md:max-w-md'>
            <Link to='/' className='mb-1 flex items-center active gap-1'>
                <FaArrowLeft />
                Back
            </Link>
            <div className='my-3 text-center text-xl font-bold'>
                Reset Your Password
            </div>
            
            {/* General error message */}
            {errors.general && (
                <div className="mb-3 p-3 text-center font-medium text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    {errors.general}
                </div>
            )}

            <form onSubmit={submit} className='form-control flex flex-col'>
                <InputField
                    name="password"
                    type="password"
                    placeholder="Enter your new password"
                    label="New Password"
                    icon={<FaLock className="text-text-light" />}
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                />

                <InputField
                    name="passwordConfirm"
                    type="password"
                    placeholder="Confirm password"
                    label="Confirm Password"
                    icon={<FaLock className="text-text-light" />}
                    value={formData.passwordConfirm}
                    onChange={handleChange}
                    error={errors.passwordConfirm}
                />
                
                <button
                    disabled={processing}
                    className={`relative flex items-center justify-center gap-2 mt-6 border transition-colors duration-200 px-4 py-2 rounded-lg font-medium ${
                        processing
                            ? 'bg-gray-600 border-gray-600 text-gray-300 cursor-not-allowed'
                            : 'border-primary bg-primary text-black hover:bg-primary-light hover:border-primary-light cursor-pointer'
                    }`}
                >
                    {processing ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Processing...</span>
                        </>
                    ) : (
                        <>
                            <IoLogInOutline className="text-lg" />
                            <span>Reset Password</span>
                        </>
                    )}
                </button>
            </form>
        </div>
    )
}

export default ResetPassword