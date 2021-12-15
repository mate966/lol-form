import logo from "../Images/lol-logo.png";

const Header = () => {
    return (
        <header className="header-component">
            <a
                href="https://www.leagueoflegends.com/en-gb/"
                target="_blank"
                rel="noreferrer"
            >
                <img src={logo} alt="Logo" className="header__logo" />
            </a>
        </header>
    );
};

export default Header;
