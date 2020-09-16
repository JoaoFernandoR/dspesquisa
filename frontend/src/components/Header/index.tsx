import React from 'react'
import { GiGamepadCross } from 'react-icons/gi'
// CSS
import './Header.scss'

const Header = () => {
    return (
    <section id="header">
        <div className="header_info">
            <GiGamepadCross size="2.5rem" className="icon"/>
            <h4> <span>Big Game</span> Survey</h4>
        </div>
    </section>
    )
}

export default Header