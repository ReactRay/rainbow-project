import { useEffect, useState } from "react";
import api from "../../api/axiosConfig";
import "./Posts.css";
import ColorList from "../../components/ColorList";
import { toast } from "react-toastify";

interface PostColor {
    id: string;
    hex: string;
    createdAt: string;
    user: {
        id: string;
        userName: string;
        email: string;
        userImage?: string;
    };
}

const ITEMS_PER_PAGE = 4;

function Posts() {
    const [colors, setColors] = useState<PostColor[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchAllColors = async () => {
            try {
                const res = await api.get("/color/all");
                setColors(res.data);
                toast.success('Enjoy the Rainbow!')
            } catch (err) {
                console.error("Failed to fetch posts", err);
            }
        };
        fetchAllColors();
    }, []);

    const totalPages = Math.ceil(colors.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentColors = colors.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };


    return (
        <div className="posts-container fade-in">
            <h1 className="page-title slide-up delay-1">🎨 Explore Color Palettes</h1>

            <div className="posts-grid slide-up delay-2">
                {currentColors.length === 0 ? (
                    <p className="no-posts">No colors shared yet.</p>
                ) : (
                    currentColors.map((item) => (
                        <div key={item.id} className="post-card shadow hover-lift">
                            <div className="user-badge">
                                <img
                                    src={
                                        item.user?.userImage ||
                                        "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                    }
                                    alt={item.user.userName}
                                    className="user-avatar"
                                />
                                <div>
                                    <h4>{item.user.userName}</h4>
                                    <p>{item.user.email}</p>
                                </div>
                            </div>

                            <ColorList color={item.hex} />

                            <div className="post-footer">
                                <span className="hex-tag">{item.hex}</span>
                                <span className="date">
                                    {new Date(item.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {totalPages > 1 && (
                <div className="pagination fade-in delay-3">
                    <button
                        className="btn"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        ⬅ Prev
                    </button>
                    <span className="page-info">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        className="btn"
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        Next ➡
                    </button>
                </div>
            )}
        </div>
    );
}

export default Posts;
