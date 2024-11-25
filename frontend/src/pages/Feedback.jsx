import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Feedback = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    suggestions: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const emojis = ["😞", "😐", "🙂", "😊", "😁"];
  const handleEmojiClick = (index) => setSelectedEmoji(index);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.experience) {
      alert("Please fill out all required fields!");
      return;
    }
    setSubmitted(true);
  };

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Faster stagger timing
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Faster duration
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <AnimatePresence>
        {!submitted ? (
          <motion.div
            key="form"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-semibold text-gray-800 mb-6"
            >
              Share Your Feedback
            </motion.h2>
            <form onSubmit={handleSubmit}>
              <motion.div variants={itemVariants} className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your Name"
                  required
                />
              </motion.div>
              <motion.div variants={itemVariants} className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your Email"
                  required
                />
              </motion.div>
              <motion.div variants={itemVariants} className="mb-4">
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tell us about your experience{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Share your experience"
                  rows="4"
                  required
                ></textarea>
              </motion.div>
              <motion.div variants={itemVariants} className="mb-4">
                <label
                  htmlFor="suggestions"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Any suggestions for improvement? (Optional)
                </label>
                <textarea
                  id="suggestions"
                  name="suggestions"
                  value={formData.suggestions}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your suggestions"
                  rows="4"
                ></textarea>
              </motion.div>
              <motion.div variants={itemVariants} className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How would you rate your experience?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex justify-between">
                  {emojis.map((emoji, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      type="button"
                      className={`text-3xl p-3 rounded-full transition ${
                        selectedEmoji === index
                          ? "bg-green-100 text-green-600"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={() => handleEmojiClick(index)}
                    >
                      {emoji}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
              >
                Submit Feedback
              </motion.button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="thank-you"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <motion.div variants={itemVariants}>
              <FaCheckCircle className="text-green-500 text-6xl mb-4" />
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-gray-800 mb-2"
            >
              Thank You for Your Feedback!
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 mb-4">
              We greatly appreciate your input and will use it to improve our
              services.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600">
              If you have more suggestions, feel free to reach out anytime!
            </motion.p>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition"
              onClick={() => setSubmitted(false)}
            >
              Submit Another Feedback
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Feedback;