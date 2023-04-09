import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    const activeLinkFunction = (e) => e.isActive ? 'active-link' : '';

    return (
        <header className="header">
            <div className="header-logo">
                {/* <img src="" alt="logo" /> */}
                <p>Logo</p>
            </div>
            <div className="links">
                <ul>
                    <li> <NavLink to="/" className={activeLinkFunction}>Home</NavLink> </li>
                    <li> <NavLink to="/support" className={activeLinkFunction}>Support</NavLink> </li>
                    <li> <NavLink to="/about" className={activeLinkFunction}>About</NavLink> </li>
                    <li> 
                        <Link className='profile-link' to="/profile">
                            <img src={require('../imgs/free-icon-user-483361 1.png')} alt="" />
                        </Link> 
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;