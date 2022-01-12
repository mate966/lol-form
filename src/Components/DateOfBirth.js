import { Link } from "react-router-dom";

import BirthdayBackgroundComponent from "./BirthdayBackgroundComponent";

const DateOfBirth = () => {
    return (
        <>
            <BirthdayBackgroundComponent />
            <div className="signup-component">
                <header>
                    <h1 className="signup__heading scene">
                        When were you born?
                    </h1>
                </header>
                <form className="signup__form">
                    <div className="date-picker">
                        <div className="error-list-component">
                            <ul className="error-list">
                                <li className="error-list-item">
                                    Please choose a valid date
                                </li>
                            </ul>
                        </div>
                        <div className="datefield-component datefield-select">
                            <select name="day">
                                <option selected disabled defaultValue="true">
                                    Day
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                        </div>
                        <div className="datefield-component datefield-select">
                            <select name="month" id="month">
                                <option selected disabled defaultValue="true">
                                    Month
                                </option>
                                <option value="1">January</option>
                                <option value="1">February</option>
                                <option value="1">March</option>
                                <option value="1">April</option>
                                <option value="1">May</option>
                                <option value="1">June</option>
                                <option value="1">July</option>
                                <option value="1">August</option>
                                <option value="1">September</option>
                                <option value="1">October</option>
                                <option value="1">November</option>
                                <option value="1">December</option>
                            </select>
                        </div>
                        <div className="datefield-component datefield-select">
                            <select name="day" id="days">
                                <option selected disabled defaultValue="true">
                                    Day
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                        </div>
                    </div>
                    <div className="signup__button">
                        <Link to="/registration">
                            <button>Next</button>
                        </Link>
                    </div>
                </form>
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
                        <div className="step">
                            <div className="step-label">Step 1</div>
                        </div>
                        <div className="step-line"></div>
                        <div className="step active">
                            <div className="step-label active">Step 2</div>
                        </div>
                        <div className="step-line"></div>
                        <div className="step">
                            <div className="step-label">Step 3</div>
                        </div>
                    </div>
                </div>
                {/* <BackgroundComponent /> */}
            </div>
        </>
    );
};

export default DateOfBirth;
