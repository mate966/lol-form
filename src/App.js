import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./css/main.css";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import Header from "./Components/Header";
import BackgroundComponent from "./Components/BackgroundComponent";
import DateOfBirth from "./Components/DateOfBirth";
import Registration from "./Components/Registration";

function App() {
    return (
        <Router>
            <div className="app-component">
                <Header />
                <Routes>
                    <Route
                        path="/lol-form"
                        exact
                        element={
                            <>
                                <Signup />
                                <BackgroundComponent />
                            </>
                        }
                    />
                    <Route path="date-of-birth" element={<DateOfBirth />} />
                    <Route path="registration" element={<Registration />} />
                </Routes>
                <Footer className="footer-component" />
            </div>
        </Router>
    );
}

export default App;
