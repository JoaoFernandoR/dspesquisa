import React from 'react'
import { GiGamepadCross } from 'react-icons/gi'
import { Link} from 'react-router-dom'
// CSS
import './Header.scss'

const Header = () => {
    return (
    <section id="header">
        <Link to='/' className="header_info">
            <GiGamepadCross size="2.5rem" className="icon"/>
            <h4> <span>Big Game</span> Survey</h4>
        </Link>
    </section>
    )
}

export default Header