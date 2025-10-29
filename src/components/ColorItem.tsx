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
            onClick={handleCopy}
            style={{
                backgroundColor: `#${color}`,
                height: '100px',
                width: '100px',
                color: textColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '10px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
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
