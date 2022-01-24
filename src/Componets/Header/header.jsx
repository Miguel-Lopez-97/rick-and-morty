import './header.css'
import Navigation from './Navegation/navigation';

function Header(){

    return(
        <header>
            <div className='banner'>
                <img src='https://i.imgur.com/t2gZFoh.jpeg' alt='Rick and Morty'/>
            </div>
                <Navigation/>
        </header>
    );
}

export default Header;