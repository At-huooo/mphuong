import React from 'react';

interface ClickMeIndicatorProps {
    text?: string;
    className?: string;
}

export const ClickMeIndicator: React.FC<ClickMeIndicatorProps> = ({ 
    text = "Click me", 
    className = "" 
}) => {
    return (
        <div className={`click-me-indicator ${className}`}>
            <span>{text}</span>
        </div>
    );
};