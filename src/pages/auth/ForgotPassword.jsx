import { FaArrowLeft } from 'react-icons/fa'
import InputField from "../../components/common/InputField";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoLogInOutline } from 'react-icons/io5';
import axios from "../../lib/axios";

const ForgotPassword = () => {
    const [processing, setProcessing] = useState(false);
    const [message, setMessage] = useState()
    const[error, setError] = useState("")
    const [formData, setFormData] = useState({
        email: '',
    });


    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const submit = async (e) => {
        e.preventDefault();
        setProcessing(true)
        try {
            let data = new FormData(e.target)
            let jsonData = Object.fromEntries(data);
            const response = await axios.post('api/v1/users/forgotPassword', jsonData);
            if (response.data.status == 'success') {
                setMessage(response.data.message)
            }

        } catch (err) {
            if (err.response && err.response.data.message) {
                setError(err.response.data.message);
                console.log(err.response.data.message);
            } else {
                setError('No response received from the server.');
                console.log('Unexpected Error:', err);
            }
        } finally {
            setProcessing(false);
        }
    };
    return (

        <div className='w-full max-w-[95vw] md:max-w-md'>
            <Link to='/login' className='mb-1 flex items-center active gap-1'>
                <FaArrowLeft />
                Back to login
            </Link>
            <div className='my-3 text-center text-xl font-bold'>
                Reset your password
            </div>
            {message && (
                <div className="mb-3 text-center font-medium text-sm text-green-600 dark:green-red-400">
                    {message}
                </div>
            )}

            {error && (
                <div className="mb-3 text-center font-medium text-sm text-red-600 dark:text-red-400">
                    {error}
                </div>
            )}

            <form onSubmit={submit} className='form-control flex flex-col'>
                <InputField
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    label="Email Address"
                    icon={<FaEnvelope className="text-text-light" />}
                    value={formData['email' || " "]}
                    onChange={handleChange}
                />


                <button
                    disabled={processing}
                    className={`relative flex items-center justify-center gap-2 mt-6 border transition-colors duration-200 px-4 py-2 rounded-lg font-medium ${processing
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
                            <span className='uppercase'>Send Password Reset Email</span>
                        </>
                    )}
                </button>
            </form>
        </div>

    )
}

export default ForgotPassword