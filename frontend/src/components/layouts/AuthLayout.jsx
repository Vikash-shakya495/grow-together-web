import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <Outlet /> {/* This renders the child components */}
        </div>
    );
};

export default AuthLayout;
