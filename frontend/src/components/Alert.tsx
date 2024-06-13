// frontend/src/components/Alert.tsx

import React from 'react';

type AlertProps = {
    message: string;
    type: 'success' | 'error';
};

const Alert: React.FC<AlertProps> = ({ message, type }) => {
    const alertClass = type === 'success' ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700';

    return (
        <div className={`border px-4 py-3 rounded relative ${alertClass}`} role="alert">
            <span className="block sm:inline">{message}</span>
        </div>
    );
};

export default Alert;
