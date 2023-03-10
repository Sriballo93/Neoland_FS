import React from 'react'
import "./_layout.css"
const Layout = ({children}) => {
  return (
    <div className='f1-grid-layout'> 
        {children}
     </div>
  )
}

export default Layout