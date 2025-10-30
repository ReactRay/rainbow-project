
import './nav.css'
import logo from '../assets/rainbow2.svg.svg'
import { useNavigate } from 'react-router-dom'

function Nav() {

    const navigate = useNavigate();
    return (
        <div className='navbar-container'>
            <img src={logo} alt="Logo" className="logo" />

            <nav className="navbar">
                <a href="#" className=" " onClick={() => navigate('/')}>Home</a>
                <a href="#" className=" " onClick={() => navigate('/demo')}>Demo</a>
                <a href="#" className=" " >Posts</a>
                <a href="#" className=" " onClick={() => navigate('/signup')}>Join Us</a>
            </nav>
        </div>
    )
}

export default Nav
