import React from 'react'
import "./Layout.css"

const Layout = ({children}) => {
  return (
    <div className='nasa-grid'>{children}</div>
  )
}

export default Layout