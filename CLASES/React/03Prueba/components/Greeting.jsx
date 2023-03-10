import React from 'react'


 export const Greeting = ({name}) => {
 
    // const {name} = props; //Esto con destructuring pasandole por argumento props
    return (
    <div>
    {/* <h1>Como esta el pana {props.name}?</h1> Sin ddestructuring*/}
    <h1>Como esta el pana {name}?</h1>
    </div>
  )
}

export default Greeting;
