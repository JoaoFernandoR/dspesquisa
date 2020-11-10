import React from 'react'

import loading from '../../assets/reload.gif'

const Loading = () => {
    return (
        <div style={{'display' : 'flex', 'alignItems' : 'center', 'justifyContent' : 'center', 'height': '100vh', 'backgroundColor' : '#F1F2F3'}}>
            <img src={loading} alt="" />
        </div>
    )
}

export default Loading