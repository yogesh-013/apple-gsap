import {navLinks} from "../constants";

const NavBar = () => {
    return (
        <header className="app-header">
            <nav className="app-nav">
                <button className="app-button">
                    <img className="app-img" src="/logo.svg" alt="Apple logo" />
                </button>

                <ul className="app-ul">
                    {navLinks.map(({ label }) => (
                        <li key={label}>
                            <a className="app-a" href={label}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button className="app-button">
                        <img className="app-img" src="/search.svg" alt="Search" />
                    </button>
                    <button className="app-button">
                        <img className="app-img" src="/cart.svg" alt="Cart" />
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar