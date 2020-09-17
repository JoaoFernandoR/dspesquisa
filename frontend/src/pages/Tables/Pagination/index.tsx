import React from 'react'
// CSS
import './Pagination.scss'

type Props = {
    totalPages?: number;
    goToPage: Function;
    activePage: Number;
}

const Pagination = ({totalPages = 0, goToPage, activePage} : Props) => {

    const paginationItems = Array.from(Array(totalPages).keys())

    return (
    <section id="pagination">
        {paginationItems.map(item => (
            <button className={`pagination-item ${activePage === item ? 'active' : 'inactive'}`}
            onClick={() => goToPage(item)}
            key={item}> {item + 1} </button>
        ))}
    </section>
    )
}

export default Pagination