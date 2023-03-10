import React from 'react'
import "./_layout.css"

const Layout = ({children}) => {
  return (
    <div className='layout'>
        {children}
    </div>
  )
}

export default Layout;