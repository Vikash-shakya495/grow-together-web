import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../App.css"
import {
  FaStar,
  FaBell,
  FaUser,
  FaCalendarAlt,
  FaSignOutAlt,
  FaCog,
  FaDesktop,
  FaChalkboardTeacher,
  FaBookOpen,
  FaVideo,
  FaExclamationCircle,
  FaEnvelope,
} from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MentorDashboard = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const [date, setDate] = useState(new Date());
  const [showNotifications, setShowNotifications] = useState(false); // State to control the visibility of the notifications popup

  // Chart Data
  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Activity",
        data: [12, 19, 10, 15, 22, 30, 25],
        backgroundColor: "#6366F1",
        borderRadius: 8,
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Performance",
        data: [65, 59, 80, 81, 56, 55, 70],
        borderColor: "#22C55E",
        tension: 0.4,
        fill: false,
        pointBackgroundColor: "#22C55E",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: "#ffffff", font: { size: 14 } },
      },
    },
    scales: {
      x: { ticks: { color: "#ffffff" }, grid: { color: "rgba(255,255,255,0.1)" } },
      y: { ticks: { color: "#ffffff" }, grid: { color: "rgba(255,255,255,0.1)" } },
    },
  };

  // Reviews Data
  const reviews = [
    { name: "Alice", message: "Amazing mentorship session!", stars: 5 },
    { name: "Bob", message: "Learned a lot, thank you!", stars: 4 },
    { name: "Charlie", message: "Could improve clarity.", stars: 3 },
    { name: "Diana", message: "Very helpful session.", stars: 5 },
    { name: "Eve", message: "Good guidance overall.", stars: 4 },
    { name: "Frank", message: "Not what I expected.", stars: 2 },
    { name: "Grace", message: "Excellent tips shared!", stars: 5 },
    { name: "Hank", message: "Average session.", stars: 3 },
    { name: "Ivy", message: "Helpful advice.", stars: 4 },
    { name: "Jake", message: "Would recommend!", stars: 5 },
  ];

  // Notifications Data
  const notifications = [
    { icon: <FaExclamationCircle />, text: "New session scheduled for tomorrow at 4 PM." },
    { icon: <FaEnvelope />, text: "You have a message from Alice." },
    { icon: <FaStar />, text: "Bob rated your session 4 stars." },
    { icon: <FaDesktop />, text: "New feature update available." },
    { icon: <FaCog />, text: "Reminder: Update your profile details." },
    { icon: <FaChalkboardTeacher />, text: "Diana completed the mentorship survey." },
  ];

  // Pages for Sidebar (Updated)
  const pages = ["Dashboard", "Notifications", "Settings"];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 flex flex-col">
        <h1 className="text-xl font-bold mb-6">Mentorise</h1>
        <nav className="space-y-4">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`p-2 rounded block w-full text-left ${currentPage === page ? "bg-gray-700" : "hover:bg-gray-700"}`}
            >
              {page}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{currentPage}</h2>
          <FaBell
            onClick={() => setShowNotifications(!showNotifications)} // Toggle notification popup visibility
            className="text-2xl text-gray-400 hover:text-white cursor-pointer"
          />
        </div>

        {/* Dashboard Content */}
        {currentPage === "Dashboard" && (
          <>
            {/* Activity and Performance Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-4 rounded shadow">
                <h3 className="text-lg font-semibold mb-4">Activity</h3>
                <div className="h-64">
                  <Bar data={barData} options={chartOptions} />
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded shadow">
                <h3 className="text-lg font-semibold mb-4">Performance</h3>
                <div className="h-64">
                  <Line data={lineData} options={chartOptions} />
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded shadow">
                <h3 className="text-lg font-semibold mb-4">Calendar</h3>
                <Calendar
                  onChange={setDate}
                  value={date}
                  className="bg-gray-700 text-white border-none rounded-lg"
                />
              </div>
            </div>

            {/* Upcoming Meetings */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Upcoming Meetings</h3>
              <div className="flex space-x-6 overflow-x-auto">
                <div className="bg-gray-700 p-4 rounded shadow w-80">
                  <h4 className="font-bold text-lg">Introduction to JavaScript</h4>
                  <p className="text-gray-400">Meeting Time: 3 PM</p>
                  <button className="bg-blue-600 text-white p-2 rounded mt-2 flex items-center">
                    <FaVideo className="mr-2" /> Join Meeting
                  </button>
                </div>
                <div className="bg-gray-700 p-4 rounded shadow w-80">
                  <h4 className="font-bold text-lg">Robotics Fundamentals</h4>
                  <p className="text-gray-400">Meeting Time: 5 PM</p>
                  <button className="bg-blue-600 text-white p-2 rounded mt-2 flex items-center">
                    <FaVideo className="mr-2" /> Join Meeting
                  </button>
                </div>
              </div>
            </div>

            {/* Student Reviews */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Student Reviews</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded shadow flex">
                    <FaUser className="text-4xl text-gray-500 mr-4" />
                    <div>
                      <h4 className="font-bold">{review.name}</h4>
                      <p className="text-gray-400 mb-2">{review.message}</p>
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <FaStar
                              key={i}
                              className={`${
                                i < review.stars ? "text-yellow-400" : "text-gray-400"
                              }`}
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Notifications Content */}
        {currentPage === "Notifications" && (
          <div className="bg-gray-800 p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Notifications</h3>
            <ul>
              {notifications.map((notification, index) => (
                <li
                  key={index}
                  className="bg-gray-700 p-3 rounded mb-2 flex items-center"
                >
                  <span className="mr-3 text-xl">{notification.icon}</span>
                  <span>{notification.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Settings Content */}
        {currentPage === "Settings" && (
          <div className="bg-gray-800 p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Settings</h3>
            <button className="bg-red-600 text-white p-3 rounded flex items-center w-[100px] justify-center hover:bg-red-700 transition duration-300 ease-in-out">
              <FaSignOutAlt className="mr-2" size={20} /> Logout
            </button>
          </div>
        )}
      </div>

      {/* Notifications Popup */}
      {showNotifications && (
        <div className="fixed top-0 right-0 mt-12 mr-6 bg-gray-800 p-4 rounded shadow-lg w-80 max-h-96 overflow-auto z-10">
          <h3 className="text-lg font-semibold mb-4">Notifications</h3>
          <div className="space-y-4">
            {notifications.map((notification, index) => (
              <div key={index} className="flex items-center space-x-4">
                {notification.icon}
                <p>{notification.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorDashboard;