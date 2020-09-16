import React from 'react'
import { BsController} from 'react-icons/bs'
import { Link } from 'react-router-dom'
// import data from '../../data/games'
// CSS
import './Home.scss'

const Home = () => {
    return (
    <section id="home">
        <div className='container_home'>
            <div className="container_division">
                <h1 className="title"> Quais jogos a galera gosta mais ?</h1>
                <h2 className="subtitle"> Clique no botão abaixo e saiba quais são os jogos que os gamers mais preferem</h2>
                <div className="button_box">
                    <div>
                        <h2>Quero saber quais são ?</h2>
                    </div>
                    <Link to='/tables'> <BsController size='3rem'/> </Link>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home