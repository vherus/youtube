import { FC } from 'react'
import logo from '../../Assets/Images/logo.png'
import './Styles/Header.css'

const Header : FC = () => {
    return (
        <header>
            <div>
                <img src={logo} alt='YouTube logo' />
            </div>
            
            <div>
                Search
            </div>

            <div>
                Menu
            </div>
        </header>
    )
}

export default Header
