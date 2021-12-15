import { useState } from "react";

import riotLogo from "../Images/riotgames-logo-white-s.png";
import pegiLogo from "../Images/pegi.jpg";

const Footer = () => {
    const [toggleClass, setToggle] = useState(false);

    const handleDisplayList = () => {
        setToggle(!toggleClass);
    };

    return (
        <footer>
            <div className="footer__container">
                <div className="footer__legal">
                    <div
                        onClick={handleDisplayList}
                        className="legal-component"
                    >
                        <ul
                            className={`legal-list ${
                                toggleClass ? "active" : null
                            }`}
                        >
                            <li>
                                <a href="#">Support</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Terms of use</a>
                            </li>
                            <li>
                                <a href="#">Cookie Policy</a>
                            </li>
                            <li>
                                <a href="#">Cookie preference</a>
                            </li>
                        </ul>
                        <div className="legal-title">
                            Legal
                            <span
                                className={`${
                                    !toggleClass ? "arrow-up" : "arrow-down"
                                }`}
                            ></span>
                        </div>
                    </div>
                </div>
                <div className="footer__riot-logo">
                    <a
                        href="https://www.riotgames.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={riotLogo} alt="Logo Riot" />
                    </a>
                </div>
                <div className="footer__ratings">
                    <a
                        href="https://www.pegi.info"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={pegiLogo} alt="Logo Pegi" />
                    </a>
                </div>
            </div>
            <div className="footer__copyright">
                <p className="copyright__paragraph">
                    This site is protected by hCaptcha and its
                    <a
                        href="https://hcaptcha.com/privacy"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Privacy Notice
                    </a>
                    and
                    <a
                        href="https://hcaptcha.com/terms"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Terms of Service
                    </a>
                    apply.
                </p>
                <p className="copyright__paragraph">
                    © 2021 Riot Games, inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
