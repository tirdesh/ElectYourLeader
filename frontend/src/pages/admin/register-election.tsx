// frontend/src/pages/admin/register-election.tsx

import '../../styles/tailwind.css';
import React, { useState } from 'react';
import { registerElection } from '../../services/electionService';
import Alert from '../../components/Alert';

const RegisterElection = () => {
    const [name, setName] = useState('');
    const [active, setActive] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await registerElection(name, active);
            setSuccess('Election registered successfully!');
            setName(''); // Clear input field after successful registration
            setActive(false); // Reset active checkbox
            setError(''); // Clear any previous error messages
            // Automatically clear success message after 3 seconds
            setTimeout(() => setSuccess(''), 3000);
        } catch (error) {
            setError('Failed to register election');
            console.error('Error:', error);
            setSuccess(''); // Clear any previous success messages
            // Automatically clear error message after 3 seconds
            setTimeout(() => setError(''), 3000);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Register Election</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Election Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter election name"
                            className="mt-1 block w-full py-3 px-6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="active" className="block text-sm font-medium text-gray-700">
                            Active
                        </label>
                        <input
                            id="active"
                            type="checkbox"
                            checked={active}
                            onChange={(e) => setActive(e.target.checked)}
                            className="mt-1"
                        />
                    </div>
                    {error && <Alert message={error} type="error" />}
                    {success && <Alert message={success} type="success" />}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterElection;
