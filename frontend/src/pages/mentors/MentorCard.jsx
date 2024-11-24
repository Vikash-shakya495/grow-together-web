import React from "react";
import { NavLink } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";

const MentorCard = ({ mentor }) => {
    return (
        <motion.div
            key={mentor.id}
            className="group shadow-lg p-4 rounded-xl bg-teal-100 mt-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="relative">
                {/* Mentor Image */}
                <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-4/5 mx-auto h-64 object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-teal-100 to-transparent p-4">
                    <h3 className="text-xl font-semibold mt-20">{mentor.name}</h3>
                    <span className="text-sm text-red-400">{mentor.category}</span>
                </div>
            </div>

            <div className="mt-4">
                {/* Mentor Location */}
                <h6 className="text-base font-medium flex items-center">
                    <CiLocationOn /> {mentor.location}
                </h6>
            </div>

            <div className="mt-6">
                {/* Message Mentor Button */}
                <NavLink to={`/mentor/${mentor.id}`}>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="w-full py-2 px-4 text-white font-medium rounded-lg bg-gray-800 text-teal-300 hover:from-green-500 hover:to-green-700 focus:outline-none"
                    >
                        Message Mentor
                    </motion.button>
                </NavLink>
            </div>
        </motion.div>
    );
};

export default MentorCard;
