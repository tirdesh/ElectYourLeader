// frontend/src/pages/admin/dashboard.tsx
import '../../styles/tailwind.css';

import React from 'react';
import Link from 'next/link';

const AdminDashboard = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
            <div className="flex space-x-4">
                <Link href="/admin/register-election">
                    <div className="bg-white hover:bg-gray-50 text-gray-700 py-4 px-6 rounded-lg shadow-md transition duration-200 cursor-pointer">
                        Register Election
                    </div>
                </Link>
                <Link href="/admin/register-candidate">
                    <div className="bg-white hover:bg-gray-50 text-gray-700 py-4 px-6 rounded-lg shadow-md transition duration-200 cursor-pointer">
                        Register Candidate
                    </div>
                </Link>
                <Link href="/admin/register-voter">
                    <div className="bg-white hover:bg-gray-50 text-gray-700 py-4 px-6 rounded-lg shadow-md transition duration-200 cursor-pointer">
                        Register Voter
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
