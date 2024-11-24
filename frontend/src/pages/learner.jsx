import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MdOutlineStar } from "react-icons/md";
import Carousel from '../components/carousel.jsx';
import toast, { Toaster } from 'react-hot-toast';

function Learner() {
    const [enrolled, setEnrolled] = useState([]);
    const [trending, setTrending] = useState([]);
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();

    function handleEnrolled(item) {
        navigate(`/course/${item}`);
    }

    useEffect(() => {
        async function getOfferedList() {
            axios.post('http://localhost:5000/api/getCourseList', { email: user.email }, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        setEnrolled(res.data.enrolled);
                        setTrending(res.data.trending);
                    } else {
                        toast.error('Server error');
                    }
                })
                .catch(() => {
                    toast.error('Something went wrong!');
                });
        }
        getOfferedList();
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">
            <div><Toaster /></div>
            <div className="flex flex-col justify-start items-center h-full w-5/6 mt-12">
                <div className="h-5/6 w-full p-6 rounded-lg">
                    <div className="w-full">
                        <h2 className="text-gray-800 text-2xl font-semibold mb-4">Trending Courses</h2>
                        <Carousel trending={trending} />
                    </div>
                    <div className="w-full mt-8">
                        <h2 className="text-gray-800 text-2xl font-semibold mb-4">Enrolled Courses</h2>
                        <ul className="w-full space-y-4">
                            {enrolled.map((item, index) => (
                                <li
                                    key={index}
                                    className="bg-gray-100 shadow-sm p-4 rounded-lg cursor-pointer hover:shadow-md transition"
                                    onClick={() => handleEnrolled(item.courseId)}
                                >
                                    <img
                                        src={`/images/${item.category}.jpg`}
                                        className="w-full h-40 rounded-lg object-cover"
                                        loading="lazy"
                                        alt="Course"
                                    />
                                    <div className="text-gray-800 mt-2">
                                        <p className="font-semibold text-lg">{item.courseName}</p>
                                        <p className="text-sm text-gray-600">By {item.courseTutor}</p>
                                        <p className="flex items-center text-sm text-gray-600">
                                            {item.rating}
                                            <MdOutlineStar className="text-yellow-500 ml-1" /> /5
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Learner;
