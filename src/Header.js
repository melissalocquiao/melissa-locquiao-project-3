import logo from './logo.png';

function Header(props) {
    return (
        <header className="Header">
            <span className="background-image" role="img" aria-label="Cake with gold leaf and fresh florals"> </span>
            <div className="wrapper">
                <div className="logo">
                    <img src={logo} alt={"mel's cookie dough co. logo"}></img>
                </div>
            </div>
            <h1>Mel's Cookie Dough Co.</h1>
        </header>
    );
}

export default Header;