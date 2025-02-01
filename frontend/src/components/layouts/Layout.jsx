import React from "react";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen">
                <Outlet /> {/* This renders the child components   */}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
