import React from 'react'

const Array = () => {
    const array=[{
        "name": "Koromon",
        "img": "https://digimon.shadowsmith.com/img/koromon.jpg",
        "level": "In Training"
      },
      {
        "name": "Tsunomon",
        "img": "https://digimon.shadowsmith.com/img/tsunomon.jpg",
        "level": "In Training"
      },
      {
        "name": "Yokomon",
        "img": "https://digimon.shadowsmith.com/img/yokomon.jpg",
        "level": "In Training"
      },];
  
    return (
    <div>
        {array.map((digimon)=>(
            <div className='digimon' key={digimon.name}>
                <img src={digimon.img} alt={digimon.name}/>
                <h1>{digimon.name}</h1>
                <p>{digimon.level}</p>
            </div>
        ))}
    </div>
    // {imageList.map((img) => (
    //     <Image source={img.src} description={img.alt} key={img.src} />
    //   ))}
  )
}

export default Array
