import React from "react";
import { useSelector } from "react-redux";
import ColorForm from "../../components/ColorForm";
import ColorList from "../../components/ColorList";
import api from "../../api/axiosConfig";
import "./demo.css";
import { toast } from "react-toastify";

function Demo() {
    const [color, setColor] = React.useState<string>(generateRandomColor);
    const user = useSelector((state: any) => state.user.currentUser);

    const handleSaveColor = async () => {
        if (!user) {
            toast.warning("Please log in to save colors!");
            return;
        }

        try {
            const payload = {
                hex: color,
                userId: user.id, // make sure your backend returns Id or id in login response
            };

            const res = await api.post("/color/add", payload);
            toast.success(`Saved ${res.data.hex} 🎨`);
        } catch (err: any) {
            console.error("Failed to save color:", err);
            toast.error("Something went wrong saving this color!");
        }
    };

    return (
        <main className="color-generator">
            <section className="color-panel">
                <h1>Color Generator</h1>
                <p>Pick a color and explore its shades and tints.</p>

                <ColorForm color={color} setColor={setColor} />

                <div className="btn-group">
                    <button
                        className="btn hover-glow"
                        onClick={() => setColor(generateRandomColor)}
                    >
                        Random Color
                    </button>

                    {user && <button className="btn hover-lift" onClick={handleSaveColor}>
                        💾 Save Color
                    </button>}
                </div>
            </section>

            <ColorList color={color} />
        </main>
    );
}

export default Demo;

export function generateRandomColor(): string {
    const randomHex = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    return `#${randomHex}`;
}
