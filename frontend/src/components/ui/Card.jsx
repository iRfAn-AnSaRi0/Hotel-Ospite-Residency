import Recact from 'react';

const card = ({ children, className = "" }) => {
    return (
        <div className={`bg-background border border-border rounded-lg shadow-card p-4 ${className}`}>
            {children}
        </div>
    )
}

export default card;