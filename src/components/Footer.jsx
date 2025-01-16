import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center bg-primary text-primary-content p-4">
            <aside>
                <FaCode size={42} />
                <p className="font-bold">
                    C. Schinner
                    <br />
                    Providing reliable tech since 2022
                </p>
                <p>
                    Copyright © {new Date().getFullYear()} - All right reserved
                </p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <FaGithub size={24} />
                    </a>
                    <a>
                        <FaLinkedin size={24} />
                    </a>
                    <a>
                        <SiGmail size={24} />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
