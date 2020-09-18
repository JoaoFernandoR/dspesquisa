import React from 'react'
import { Link } from 'react-router-dom'
// CSS
import './Filters.scss'

type Props = {
    link: string;
    linkText: string
}

const Filters = ({link, linkText} : Props) => {
    return (
    <section id="filter_container">
        <Link to={link}>
            {linkText}
        </Link>
    </section>
    )
}

export default Filters