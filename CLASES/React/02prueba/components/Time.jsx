import React from 'react'

const Time = () => {
    const x = 16;
const time = (x >= 6 && x < 12) ? "Buenos días" : (x >= 12 && x < 20) ? "Buenas tardes" : "Buenas noches";
 return <div>
            {time}
        </div> 
}


export default Time
