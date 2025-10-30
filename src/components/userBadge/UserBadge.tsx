import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import "./UserBadge.css";

interface UserBadgeProps {
    compact?: boolean;
    onClick?: () => void;
}

const UserBadge: React.FC<UserBadgeProps> = ({ compact = false, onClick }) => {
    const user = useSelector((state: RootState) => state.user.currentUser);
    console.log(user, 'badge')
    if (!user) return null;

    return (
        <div
            className={`user-badge ${compact ? "compact" : ""}`}
            onClick={onClick}
            style={{ cursor: onClick ? "pointer" : "default" }}
        >
            <img
                src={
                    user.image ||
                    user.image ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt={user.userName || "User"}
                className="user-avatar"
            />

            <div className="user-info">
                <span className="user-name">{user.userName || user.userName}</span>
                {!compact && <span className="user-email">{user.userName}</span>}
            </div>
        </div>
    );
};

export default UserBadge;
