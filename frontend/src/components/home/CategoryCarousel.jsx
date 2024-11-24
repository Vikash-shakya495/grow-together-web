import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../redux/mentorSlice"; // Redux action
import { useNavigate } from "react-router-dom";

const categories = [
    { name: "Frontend Developer", mentorsAvailable: 12, image: "https://abbtech.az/storage/uploads/files/1687508692_1615533694-frontendd.svg" },
    { name: "Backend Developer", mentorsAvailable: 8, image: "https://ddi-dev.com/uploads/backend-is.png" },
    { name: "Data Science", mentorsAvailable: 15, image: "https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/DATA%20SCIENCE%20MODEL.jpg?itok=Uw9IQgUd" },
    { name: "Graphic Designer", mentorsAvailable: 10, image: "https://img.freepik.com/free-photo/people-working-together-animation-studio_23-2149207990.jpg?semt=ais_hybrid" },
    { name: "FullStack Developer", mentorsAvailable: 5, image: "https://www.thinknexttraining.com/images/Full-Stack-Development-Course-in-Chandigargh-mob-min.jpg" },
    { name: "AI/ML", mentorsAvailable: 7, image: "https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2022/09/29160306/Number-Theory4.png" },
    { name: "UI/UX", mentorsAvailable: 20, image: "https://www.addwebsolution.com/app/uploads/2024/04/difference-between-ui-ux-design.webp" },
    { name: "App Developer", mentorsAvailable: 13, image: "https://ideausher.com/wp-content/uploads/2022/07/covr-image-50_result.webp" },
];

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleCategoryClick = (category) => {
        dispatch(setSelectedCategory(category.name)); // Dispatch selected category
        navigate("/mentor-category"); // Navigate to the mentors page
    };

    return (
        <div className="w-full md:w-5/6 mx-auto my-6">
            <div className="relative">
                <div className="flex overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 8}%)` }}
                    >
                        {categories.map((category, index) => (
                            <div key={index} className="flex justify-center gap-12 items-center p-4 w-full">
                                <div
                                    className="relative w-[300px] bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer"
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold">{category.name}</h3>
                                        <p className="text-sm text-gray-500">{category.mentorsAvailable} Mentors Available</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
                    className="absolute -left-20 top-1/2 -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-full"
                >
                    &#8249;
                </button>
                <button
                    onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, categories.length - 1))}
                    className="absolute -right-20 top-1/2 -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-full"
                >
                    &#8250;
                </button>
            </div>
        </div>
    );
};

export default CategoryCarousel;
