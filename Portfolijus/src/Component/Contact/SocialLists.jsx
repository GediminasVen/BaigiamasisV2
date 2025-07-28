import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";


export default function SocialLists() {

    return (
        <ul className="footer-icons">
            <li className="social-icons">
                <div className="social-list-icons glow-on-hover">
                    <a href="https://www.facebook.com/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={25} />
                    </a>
                </div>
            </li>
            <li className="social-icons">
                <div className="social-list-icons glow-on-hover">
                    <a href="https://www.instagram.com/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={25} />
                    </a>
                </div>
            </li>
            <li className="social-icons">
                <div className="social-list-icons glow-on-hover">
                    <a href="https://www.linkedin.com/gvenslovaitis" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={25} />
                    </a>
                </div>
            </li>
            <li className="social-icons">
                <div className="social-list-icons glow-on-hover">
                    <a href="https://x.com" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={25} />
                    </a>
                </div>
            </li>
            <li className="social-icons">
                <div className="social-list-icons glow-on-hover">
                    <a href="https://github.com/gediminasven" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={25} />
                    </a>
                </div>
            </li>
            {/* <li className="social-icons">
                <div className="social-list-icons">
                    <a href="https://www.youtube.com/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={25} />
                    </a>
                </div>
            </li> */}
        </ul>
    );
}