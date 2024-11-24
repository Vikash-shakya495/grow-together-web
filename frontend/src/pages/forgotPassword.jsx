import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [step, setStep] = useState(1); // 1: Enter email, 2: Verify OTP, 3: Reset password
    const [error, setError] = useState(''); // Error state for handling error messages
    const [message, setMessage] = useState(''); // Success message state

    const handleSendOtp = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/forgot-password/send-otp', {
                email,
            });
            setMessage(response.data.message); // Display success message
            setError(''); // Clear error message
            setStep(2); // Move to OTP verification step after sending OTP
        } catch (err) {
            // Log only the relevant parts of the error
            if (err.response) {
                // Server responded with a status other than 2xx
                setError(err.response.data.error || 'Something went wrong');
            } else if (err.request) {
                // Request was made but no response received
                setError('No response from server');
            } else {
                // An error occurred in setting up the request
                setError(err.message);
            }
        }
    };

    const handleVerifyOtp = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/forgot-password/verify-otp', { email, otp });
            if (response.status === 200) {
                toast.success('OTP verified successfully!');
                setStep(3); // Move to reset password step after successful OTP verification
            }
        } catch (error) {
            console.error(error);
            toast.error('Invalid OTP. Please try again.');
        }
    };

    const handleResetPassword = async () => {
        if (newPassword !== confirmPassword) {
            toast.error('Passwords do not match!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/forgot-password/reset', {
                email,
                newPassword,
            });
            if (response.status === 200) {
                toast.success('Password reset successfully!');
                setStep(1); // Reset the process back to step 1
                setEmail('');
                setOtp('');
                setNewPassword('');
                setConfirmPassword('');
            }
        } catch (error) {
            console.error(error);
            toast.error('Failed to reset password. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Toaster />
            <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
                <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
                    Forgot Password
                </h2>
                {error && <div className="text-red-500 text-center mb-4">{error}</div>} {/* Display error message */}
                {message && <div className="text-green-500 text-center mb-4">{message}</div>} {/* Display success message */}

                {step === 1 && (
                    <div>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300 mb-4"
                            required
                        />
                        <button
                            onClick={handleSendOtp}
                            className="w-full bg-teal-300 hover:bg-teal-400 py-2 rounded-lg shadow-lg transition transform hover:scale-95"
                        >
                            Send OTP
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full px-4 py-2 rounded bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300 mb-4"
                            required
                        />
                        <button
                            onClick={handleVerifyOtp}
                            className="w-full bg-teal-300 hover:bg-teal-400 py-2 rounded-lg shadow-lg transition transform hover:scale-95"
                        >
                            Verify OTP
                        </button>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300 mb-4"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300 mb-4"
                            required
                        />
                        <button
                            onClick={handleResetPassword}
                            className="w-full bg-teal-300 hover:bg-teal-400 py-2 rounded-lg shadow-lg transition transform hover:scale-95"
                        >
                            Reset Password
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ForgotPassword;
