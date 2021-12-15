import { Link } from "react-router-dom";

import BackgroundComponent from "./BackgroundComponent";

const Registration = () => {
    return (
        <div className="signup-component">
            <BackgroundComponent />
            <header>
                <h1 className="signup__heading scene">When were you born?</h1>
            </header>
            <form className="signup__form">
                <div>1</div>
                <div className="signup__button">
                    <Link to="/registration">
                        <button>Next</button>
                    </Link>
                </div>
            </form>
            <div className="signup__region">
                <label htmlFor="select-region" className="signup__region-label">
                    Region:
                </label>
                <div className="signup__control-select">
                    <select id="select-region">
                        <option value="">EU West (English)</option>
                        <option value="">EU Północ i Wschód (Polish)</option>
                    </select>
                </div>
            </div>
            <div className="signup__progress-bar">
                <div className="steps">
                    <div className="step">
                        <div className="step-label">Step 1</div>
                    </div>
                    <div className="step-line"></div>
                    <div className="step">
                        <div className="step-label">Step 2</div>
                    </div>
                    <div className="step-line"></div>
                    <div className="step active">
                        <div className="step-label">Step 3</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
