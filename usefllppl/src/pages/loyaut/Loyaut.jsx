import './Loyaut.scss'
import { Outlet } from 'react-router-dom';
import Navbar from '../nav-bar/Navbar.jsx';
import Footer from '../footer/Footer.jsx';

const Loyaut = () => {
    return (
        <div className='wrapper'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Loyaut;