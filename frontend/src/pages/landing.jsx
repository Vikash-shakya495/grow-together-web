import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const today = new Date();
    const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };
    const optionsDate = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedTime = today.toLocaleTimeString([], optionsTime).toUpperCase();
    const formattedDate = today.toLocaleDateString([], optionsDate);

    const navigate = useNavigate();

    function login() {
        navigate('/login');
    }

    function signup() {
        navigate('/signup');
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-transparent">
            <div className="flex flex-col items-center justify-center w-5/6 md:w-1/2">
                <p>{formattedTime} | {formattedDate}</p>
                <p className="text-transparent text-[70px] font-megrim bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-fuchsia-500 bg-clip-text animate-gradientCycle">
                    Introducing TalentSwap
                </p>
                <p className="text-center font-open-sans text-base font-light mt-2">
                    Connecting learners and tutors for success!
                </p>
                <div className="flex justify-center items-center gap-5 mt-6">
                    <button
                        className="bg-gray-600 bg-opacity-35 flex items-center justify-center text-white w-32 h-8 rounded-full shadow-md hover:scale-90 hover:shadow-lg transform transition duration-300 ease-in-out"
                        onClick={login}
                    >
                        Login 🡭
                    </button>
                    <button
                        className="bg-gray-600 bg-opacity-35 flex items-center justify-center text-white w-32 h-8 rounded-full shadow-md hover:scale-90 hover:shadow-lg transform transition duration-300 ease-in-out"
                        onClick={signup}
                    >
                        Sign Up 🡭
                    </button>
                </div>
                <br />
                <p className="font-open-sans text-sm font-light text-justify leading-relaxed mt-4">
                    Welcome to TalentSwap, the ultimate platform for peer-to-peer learning and skill exchange! 
                    Whether you're looking to sharpen your skills or share your expertise, TalentSwap connects you 
                    with a vibrant community of learners and tutors. Access curated courses, video tutorials, and 
                    interactive discussions that help you grow and expand your knowledge. Create and manage your 
                    own courses, upload videos, and help others achieve their learning goals, or explore a diverse 
                    range of subjects created by your peers. With course-specific chat features and collaborative 
                    discussions, TalentSwap offers a dynamic, engaging environment where you can swap talents, 
                    share expertise, and learn at your own pace. Start your journey today and discover a world of 
                    possibilities.
                </p>
            </div>
        </div>
    );
};

export default Landing;
