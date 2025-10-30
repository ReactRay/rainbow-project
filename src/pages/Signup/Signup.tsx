import { useState, } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./Signup.css";
import colorVid from "../../../public/color-vid.mp4";

interface FormData {
    username: string;
    email: string;
    password: string;
    image: string;
}

function Signup() {
    const [formData, setFormData] = useState<FormData>({
        username: "",
        email: "",
        password: "",
        image: "",
    });
    const [uploading, setUploading] = useState(false);
    console.log(import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

    const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);

        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", UPLOAD_PRESET || "");
        data.append("cloud_name", CLOUD_NAME || "");

        try {
            const res = await fetch(
                `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
                { method: "POST", body: data }
            );
            const result = await res.json();
            setFormData((prev) => ({ ...prev, image: result.secure_url }));
        } catch (err) {
            console.error("Upload failed", err);
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted:", formData);
    };

    return (
        <div className="sign-up">
            <video autoPlay muted loop playsInline id="bg-video">
                <source src={colorVid} type="video/mp4" />
            </video>

            <div className="content fade-in">
                <h1 className="slide-up delay-1">Create Account</h1>
                <form
                    onSubmit={handleSubmit}
                    className="signup-form slide-up delay-2 shadow"
                >
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <label className="file-upload hover-lift">
                        {uploading ? "Uploading..." : "Upload Image"}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            hidden
                        />
                    </label>

                    {formData.image && (
                        <img
                            src={formData.image}
                            alt="preview"
                            className="preview zoom-in delay-3"
                        />
                    )}

                    <button type="submit" className="btn hover-glow mt-2">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
