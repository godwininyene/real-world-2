import { FaArrowLeft } from 'react-icons/fa'
import InputField from "../../components/common/InputField";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { IoLogInOutline } from 'react-icons/io5';
import axios from "../../lib/axios";

const Login = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    let pathname = searchParams.get("redirectTo") || null
    const message = searchParams.get("message") || null;
    const [processing, setProcessing] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState();
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        let goTo;
        setProcessing(true)
        try {
            const response = await axios.post('api/v1/users/login', formData);
            if (response.data.status == 'success') {
                localStorage.setItem("user", JSON.stringify(response.data.data.user));
                if (response.data.data.user.role === 'user') {
                    goTo = pathname || '/investor/dashboard'
                }
                if (response.data.data.user.role === 'admin') {
                    goTo = pathname || '/admin/dashboard'
                    console.log('True');
                }
                navigate(goTo)
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
            <Link to='/' className='mb-1 flex items-center active gap-1'>
                <FaArrowLeft />
                Back
            </Link>
            <div className='my-3 text-center text-xl font-bold'>
                Sign in to your account
            </div>
            {error && (
                <div className="mb-3 text-center font-medium text-sm text-red-600 dark:text-red-400">
                    {error}
                </div>
            )}

            {message && (
                <h2 className="text-[#cc0000] text-center mb-3 dark:text-red-400">
                    {message}
                </h2>
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
                    classNames='mb-4'
                />

                <InputField
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    label="Password"
                    icon={<FaLock className="text-text-light" />}
                    value={formData['password' || " "]}
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
                            <span>Login</span>
                        </>
                    )}
                </button>
            </form>

            <div className='flex justify-end'>
                <Link to='/forgot-password' className='mt-3 self-start text-xs text-accent'>
                    Forgot your password?
                </Link>
            </div>
        </div>

    )
}

export default Login