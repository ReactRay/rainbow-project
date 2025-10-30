import "./nav.css";
import logo from "../assets/rainbow2.svg.svg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { logout } from "../redux/userSlice";

function Nav() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootState) => state.user.currentUser);

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div className="navbar-container">
            <img
                src={logo}
                alt="Logo"
                className="logo hover-lift"
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
            />

            <nav className="navbar">
                <a onClick={() => navigate("/")} >
                    Home
                </a>
                <a onClick={() => navigate("/demo")} >
                    Demo
                </a>
                {currentUser && <a onClick={() => navigate("/posts")} >
                    Posts
                </a>}

                {!currentUser ? (
                    <a onClick={() => navigate("/signup")} >
                        Join Us
                    </a>
                ) : (
                    <>
                        <a onClick={() => navigate("/profile")} >
                            {currentUser.username || "Profile"}
                        </a>
                        <a onClick={handleLogout} >
                            Logout
                        </a>
                    </>
                )}
            </nav>
        </div>
    );
}

export default Nav;
