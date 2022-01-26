import './header.css';
import { Outlet } from 'react-router';
import Navigation from './Navegation/Navigation';

function Header(){

    return(
        <>
        <header>
            <div className='banner'>
                <img src='https://i.imgur.com/t2gZFoh.jpeg' alt='Rick and Morty'/>
            </div>
                <Navigation/>
        </header>
        <Outlet />
        </>
    );
}

export default Header;