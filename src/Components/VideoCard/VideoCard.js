

import React from 'react'
import "./videoCard.css"

export default function VideoCard({source, title, view}) {
  return (
    <div className='card'>
       <div className='img-box'>
       <img src={source} alt="video image" className='img' />
       </div>
       <h3 className='title'>
          {title}
       </h3>
       <div className='info-box'>
          <span className='view'>
            {
               `${view}k views`
            }
          </span>
          <span className='month'>
            {
               `${view} mounth ago`
            }
          </span>
       </div>
    </div>
  )
}
