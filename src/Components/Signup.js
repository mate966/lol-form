import React, { useState } from "react";
import { Link } from "react-router-dom";

import divider from "../Images/divider.png";

const Main = () => {
    const [inputClass, setInputClass] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [emailAlert, setEmailAlert] = useState(false);

    const handleClick = () => {
        setInputClass(!inputClass);
    };

    const handleEmailInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleForm = (e) => {
        e.preventDefault();
        setEmailAlert(true);
    };

    return (
        <>
            <div className="signup-component">
                <div className="signup__header">
                    <h1 className="signup__heading">Your legend starts here</h1>
                    <h4 className="signup__subheading">
                        First, let's get your email.
                    </h4>
                </div>
                <div className="signup__divider">
                    <img
                        src={divider}
                        alt="Divider"
                        className="signup__divider-img"
                    />
                </div>
                <form className="signup__form">
                    <div onClick={handleClick} className="signup__input">
                        <label
                            className={!inputClass ? "signup__centered" : null}
                        >
                            <span>Enter email here</span>
                        </label>
                        <input
                            type="email"
                            className="signup__email"
                            value={inputValue}
                            onChange={handleEmailInput}
                        />
                        <div className="signup__error-icon"></div>
                        <div className="signup__error-valid">
                            <ul>
                                <li>Please enter a valid email address</li>
                            </ul>
                        </div>
                    </div>
                    <div className="signup__button">
                        {inputValue ? (
                            <Link to="/date-of-birth">
                                <button>Start</button>
                            </Link>
                        ) : (
                            <button onClick={handleForm}>Start</button>
                        )}
                    </div>
                </form>
                <div className="signup__already-registered">
                    already registeder?
                    <a href="https://signup.euw.leagueoflegends.com/en/signup/redownload?page_referrer=index">
                        click to download
                    </a>
                </div>
                <div className="signup__region">
                    <label
                        htmlFor="select-region"
                        className="signup__region-label"
                    >
                        Region:
                    </label>
                    <div className="signup__control-select">
                        <select id="select-region">
                            <option value="">EU West (English)</option>
                            <option value="">
                                EU Północ i Wschód (Polish)
                            </option>
                        </select>
                    </div>
                </div>
                <div className="signup__progress-bar">
                    <div className="steps">
                        <div className="step active">
                            <div className="step-label">Step 1</div>
                        </div>
                        <div className="step-line"></div>
                        <div className="step">
                            <div className="step-label">Step 2</div>
                        </div>
                        <div className="step-line"></div>
                        <div className="step">
                            <div className="step-label">Step 3</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
