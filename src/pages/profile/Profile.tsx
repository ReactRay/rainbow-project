import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import api from "../../api/axiosConfig";
import "./Profile.css";
import ColorList from "../../components/ColorList";

interface ColorItem {
    id: string;
    hex: string;
    createdAt: string;
    user?: {
        id: string;
        userName: string;
        email: string;
        userImage?: string;
    };
}

function Profile() {
    const user = useSelector((state: any) => state.user.currentUser);
    const [colors, setColors] = useState<ColorItem[]>([]);
    console.log(colors, 'colors')
    useEffect(() => {
        const fetchColors = async () => {
            try {
                if (!user?.id) return;

                const res = await api.get(`/color/${user.id}`);
                setColors(res.data);
            } catch (err) {
                console.error("Failed to fetch colors", err);
            }
        };
        fetchColors();
    }, [user]);
    console.log(user.id)
    return (
        <div className="profile-container fade-in">
            <div className="profile-header shadow hover-lift">
                <img
                    src={
                        user?.image ||
                        "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    alt="Profile"
                    className="profile-avatar"
                />
                <div className="profile-info">
                    <h2>{user?.userName}</h2>
                    <p>{user?.email}</p>
                </div>
            </div>

            <h3 className="section-title slide-up delay-1">
                🎨 My Saved Colors
            </h3>

            <div className="color-grid slide-up delay-2">
                {colors.length === 0 ? (
                    <p className="no-colors">You haven’t saved any colors yet.</p>
                ) : (
                    colors.map((c) => (
                        <div key={c.id} className="color-card hover-glow">
                            <ColorList color={c.hex} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Profile;
