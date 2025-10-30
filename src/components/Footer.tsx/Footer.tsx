import "./Footer.css";
import { FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer fade-in">
            <div className="footer-content">
                <h3 className="footer-logo">🌈 Rainbow</h3>

                <p className="footer-text">
                    Made with ❤️ by <strong>Radwan Mansur</strong> — bringing color to code.
                </p>

                <div className="social-container">
                    <a
                        href="https://www.youtube.com/@agentCsharp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-glow"
                    >
                        <FaYoutube />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/radwan-mansur-1368b7232/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-glow"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/ReactRay"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-glow"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Rainbow. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
