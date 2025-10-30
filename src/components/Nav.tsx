import "./nav.css";
import logo from "../assets/rainbow2.svg.svg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { logout } from "../redux/userSlice";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // install: npm i lucide-react
import UserBadge from "./userBadge/UserBadge";

function Nav() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootState) => state.user.currentUser);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/");
        setMenuOpen(false);
    };

    return (
        <header className="navbar-container">
            <div className="logo-profile">
                <img
                    src={logo}
                    alt="Logo"
                    className="logo "
                    onClick={() => navigate("/")}
                />
                {currentUser && (
                    <>
                        <UserBadge compact onClick={() => navigate("/profile")} />
                    </>
                )}

            </div>


            {/* Hamburger Icon */}
            <button
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Desktop Nav */}
            <nav className="navbar desktop-nav">
                <a onClick={() => navigate("/")}>Home</a>
                <a onClick={() => navigate("/demo")}>Demo</a>
                {currentUser && <a onClick={() => navigate("/posts")}>Posts</a>}

                {!currentUser ? (
                    <a onClick={() => navigate("/signup")}>Join Us</a>
                ) : (
                    <>
                        <a onClick={() => navigate("/profile")}>
                            {"Profile"}
                        </a>
                        <a onClick={handleLogout}>Logout</a>
                    </>
                )}
            </nav>

            {/* Mobile Nav */}
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <a onClick={() => { navigate("/"); setMenuOpen(false); }}>Home</a>
                <a onClick={() => { navigate("/demo"); setMenuOpen(false); }}>Demo</a>
                {currentUser && (
                    <a onClick={() => { navigate("/posts"); setMenuOpen(false); }}>Posts</a>
                )}
                {!currentUser ? (
                    <a onClick={() => { navigate("/signup"); setMenuOpen(false); }}>Join Us</a>
                ) : (
                    <>
                        <a onClick={() => { navigate("/profile"); setMenuOpen(false); }}>
                            {currentUser.userName || "Profile"}
                        </a>
                        {currentUser && (
                            <>
                                <UserBadge compact onClick={() => navigate("/profile")} />
                                <a onClick={handleLogout}>Logout</a>
                            </>
                        )}
                    </>
                )}
            </div>
        </header>
    );
}

export default Nav;
