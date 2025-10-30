import { useState, } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./Login.css";
import colorVid from "../../../public/color1.mp4";
import { Link } from "react-router-dom";

import api from "../../api/axiosConfig";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'


interface LoginData {
    email: string;
    password: string;
}

function Login() {
    const [formData, setFormData] = useState<LoginData>({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    const navigator = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await api.post("/auth/login", formData);
            const user = res.data;

            dispatch(loginSuccess(user));
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", user.token);
            navigator("/profile");
            toast.success('Welcome' + user.userName)


        } catch (err) {
            console.error("Login failed:", err);
            alert("Invalid credentials");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    return (
        <div className="login-page">
            <video autoPlay muted loop playsInline id="bg-video">
                <source src={colorVid} type="video/mp4" />
            </video>

            <div className="content fade-in">
                <h1 className="slide-up delay-1">Welcome Back</h1>
                <form onSubmit={handleSubmit} className="login-form slide-up delay-2 shadow">
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
                    <button disabled={loading} type="submit" className="btn hover-glow mt-2">
                        {loading ? "Logging in..." : "Log In"}
                    </button>


                    <Link to='/signup'>Sign up instead</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
