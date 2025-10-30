import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify'

interface ColorFormProps {
    color: string;
    setColor: React.Dispatch<React.SetStateAction<string>>;
}

function ColorForm({ color, setColor }: ColorFormProps) {
    const [inputColor, setInputColor] = useState<string>(color);
    const colorInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!checkValidColor(inputColor)) {
            toast.warn('pick a valid color please')
            return;
        }

        setColor(inputColor);
    }

    function handleColorBoxClick() {
        colorInputRef.current?.click();
    }

    return (
        <section className="color-form">
            <form onSubmit={handleSubmit}>
                {/* Hidden native color input */}
                <input
                    ref={colorInputRef}
                    type="color"
                    value={inputColor}
                    onChange={(e) => setColor(e.target.value)}
                    style={{ display: 'none' }}
                />

                {/* Custom clickable color box */}
                <div
                    onClick={handleColorBoxClick}
                    className="color-box"
                    style={{ backgroundColor: color }}
                ></div>

                {/* Text input for hex code */}
                <input
                    className="text-input"
                    type="text"
                    value={inputColor}
                    onChange={(e) => setInputColor(e.target.value)}
                    style={{


                    }}
                />

                <button className="btn " type="submit">
                    Submit
                </button>
            </form>
        </section>
    );
}

export default ColorForm;

// ✅ Utility: Validate hex color
function checkValidColor(color: string): boolean {
    return /^#([0-9A-F]{3}){1,2}$/i.test(color);
}
