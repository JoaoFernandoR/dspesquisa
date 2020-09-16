import React from 'react'
import { GiGamepadCross } from 'react-icons/gi'
// CSS
import './Header.scss'

const Header = () => {
    return (
    <section id="header">
        <div className="header_info">
            <GiGamepadCross size="2.5rem" className="icon"/>
            <h5> <span>Big Game</span> Survey</h5>
        </div>
    </section>
    )
}

export default Header