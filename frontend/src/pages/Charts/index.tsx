import React, {useEffect, useState} from 'react'
import Chart from 'react-apexcharts'
import axios from 'axios'
// Charts Options
import { barOptions, pieOptions } from './chart-options'
import { buildBarSeries, getGenderChartData, getPlatformChartData } from './helpers'
// CSS
import './Charts.scss'
// Components
import Filters from '../../components/Filters'

type PieChartData = {
  labels: string[];
  series: number[]
}

const initialData = {
  labels: [],
  series: []
}

const Charts = () => {

  const [games, setGames] = useState([])
  const [records, setRecords] = useState([])
  const [genderData, setGenderData] = useState<PieChartData>(initialData)
  const [platformData, setPlatformData] = useState<PieChartData>(initialData)


  useEffect( () => {
    const fetchData = async() => {
        const Promise1 = await axios({
            method: 'GET',
            url : `http://localhost:3333/games`
        })
        const Promise2 = await axios({
          method: 'GET',
          url : `http://localhost:3333/record`
      })
      Promise.all([Promise1, Promise2]).then((values) => {
        setGames(values[0].data.data)
        setRecords(values[1].data.data)
        setGenderData(getGenderChartData(values[1].data.data))
        setPlatformData(getPlatformChartData(values[1].data.data))
      })
    }
    fetchData()
  }, [])
  
  return (
  <section id='charts'>
    <div className='charts_container'>
        <Filters link='/tables' linkText='Ver Tabela'/>
        <div className="chart_container_2">
          <div className='chart_left'>
            <h1 className="title">
              Jogos mais votados
            </h1>
            <div className='main_graphic'>
              <Chart options={barOptions} series={[{data : buildBarSeries(games, records)}]} type="bar" width='100%' height={500}/>
            </div>
          </div>
        <div className='chart_2'>
          <div className='chart'>
            <h2 className='title'> Plataformas </h2>
            <div>
              <Chart options={{...pieOptions, labels: genderData.labels}} series={genderData.series} type="donut" width='100%' height='250'/>
            </div>
          </div>
          <div className='chart'>
            <h2 className='title'> Gêneros </h2>
            <div>
              <Chart options={{...pieOptions, labels: platformData.labels}} series={platformData.series} type="donut" width='100%' height='250'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Charts