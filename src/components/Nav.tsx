import "./nav.css";
import logo from "../assets/rainbow2.svg.svg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { logout } from "../redux/userSlice";
import { useState } from "react";
import { Menu, X, Home, MonitorPlay, FileText, UserPlus, User, LogOut } from "lucide-react";
import UserBadge from "./userBadge/UserBadge";
import { toast } from "react-toastify";

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
        toast.success("Good bye");
    };

    const NavItem = ({
        icon: Icon,
        label,
        onClick,
    }: {
        icon: any;
        label: string;
        onClick: () => void;
    }) => (
        <a onClick={onClick} className="nav-link">
            <Icon size={18} style={{ marginRight: "6px" }} />
            {label}
        </a>
    );

    return (
        <header className="navbar-container">
            <div className="logo-profile">
                <img
                    src={logo}
                    alt="Logo"
                    className="logo"
                    onClick={() => navigate("/")}
                />
                {currentUser && <UserBadge compact onClick={() => navigate("/profile")} />}
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
                <NavItem icon={Home} label="Home" onClick={() => navigate("/")} />
                <NavItem icon={MonitorPlay} label="Demo" onClick={() => navigate("/demo")} />
                {currentUser && (
                    <NavItem icon={FileText} label="Posts" onClick={() => navigate("/posts")} />
                )}

                {!currentUser ? (
                    <NavItem icon={UserPlus} label="Join Us" onClick={() => navigate("/signup")} />
                ) : (
                    <>
                        <NavItem icon={User} label="Profile" onClick={() => navigate("/profile")} />
                        <NavItem icon={LogOut} label="Logout" onClick={handleLogout} />
                    </>
                )}
            </nav>

            {/* Mobile Nav */}
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <NavItem icon={Home} label="Home" onClick={() => { navigate("/"); setMenuOpen(false); }} />
                <NavItem icon={MonitorPlay} label="Demo" onClick={() => { navigate("/demo"); setMenuOpen(false); }} />
                {currentUser && (
                    <NavItem icon={FileText} label="Posts" onClick={() => { navigate("/posts"); setMenuOpen(false); }} />
                )}
                {!currentUser ? (
                    <NavItem icon={UserPlus} label="Join Us" onClick={() => { navigate("/signup"); setMenuOpen(false); }} />
                ) : (
                    <>
                        <NavItem icon={User} label="Profile" onClick={() => { navigate("/profile"); setMenuOpen(false); }} />
                        <NavItem icon={LogOut} label="Logout" onClick={handleLogout} />
                    </>
                )}
            </div>
        </header>
    );
}

export default Nav;
