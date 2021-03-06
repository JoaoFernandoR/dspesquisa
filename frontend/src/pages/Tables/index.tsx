import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
// Types
import { RecordsResponse, RecordItem } from './types'
// CSS
import './Tables.scss'
// Componentes
import Pagination from './Pagination'
import Filters from '../../components/Filters'
import Loading from '../Loading'


const Tables = () => {

    const [data, setData] = useState<RecordsResponse>()
    const [activePage, setActivePage] = useState(0)

    useEffect( () => {
        const fetchData = async() => {
            await axios({
                method: 'GET',
                url : `https://dspesquisa1.herokuapp.com/record?linesPerPage=12&page=${activePage + 1}`
            }).then((result) => {
                setData(result.data)
            })
            .catch((err) => console.log(err.error))
        }
        fetchData()
    }, [activePage])

    const renderItem = () => {
        return (
            data?.data.map((item:RecordItem, index:number) => {
                return (
                    <tr key={index}>
                    <td> {moment(item.moment).format('DD/MM/YYYY HH:mm')} </td>
                    <td> {item.name} </td>
                    <td> {item.age} </td>
                    <td> {item.gamePlatform} </td>
                    <td> {item.genreName} </td>
                    <td> {item.gameTitle } </td>
                </tr>                    
                )
            })
        )
    }

    const handlePagination = (index:number) => {
        setActivePage(index)
    }

    if (data === undefined) {
        return <Loading />
    }
    else {
        return (
        <section id="tables">
            <div className="container_table">
                <Filters link='/charts' linkText='Ver gráficos'/>
                <table cellPadding='0' cellSpacing='0' className="table">
                    <thead>
                        <tr>
                            <th> INSTANTE</th>
                            <th> NOME </th>
                            <th> IDADE </th>
                            <th> PLATAFORMA </th>
                            <th> GÊNERO </th>
                            <th> TÍTULO DO GAME </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderItem()}
                    </tbody>
                </table>    
                <Pagination 
                    activePage={activePage}
                    totalPages={data?.results}
                    goToPage={handlePagination}/>
            </div>
        </section>
    )
    }
}

export default Tables