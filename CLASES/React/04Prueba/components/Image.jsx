import React from 'react'

const Image = ({src, alt, height, width}) => {
  return (
    <div>
    <img src={src} alt={alt} height={height} width={width}/>
    </div>
  )
}

export default Image
