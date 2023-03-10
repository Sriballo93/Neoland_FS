import React from 'react'
import "./_figure.css"

const Figure = ({data}) => {


  return (
<div className='figureContainer'>
    <figure className='fig_Apod'>
        <img src={data.url} alt={data.title}/>
        <div className='window'>
            <h3 className='title'>{data.title}</h3>
            <div className='window_pane'>{data.explanation}</div>
            <div className='details-bar'>
                <span>{data.date}</span>
                <span>{data.copyright}</span>
            </div>
        </div>
    </figure>
    </div>
  )
}

export default Figure