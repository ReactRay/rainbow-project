import React from 'react';

interface ColorItemProps {
    color?: string;
    index?: number;
}

function ColorItem({ color = '000000', index = 0 }: ColorItemProps) {
    const textColor = index > 10 ? '#fff' : '#000';

    const handleCopy = () => {
        navigator.clipboard.writeText(`#${color}`);
        alert(`Copied: #${color}`);
    };


    return (
        <div
            style={{ backgroundColor: '#' + color, color: textColor, fontWeight: 400, letterSpacing: '4px' }}
            onClick={handleCopy}
            className='color-item stagger-fade hover-lift'
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.25)';
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 6px rgba(0,0,0,0.15)';
            }}
        >
            #{color}
        </div>
    );
}

export default ColorItem;
