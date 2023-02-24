import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import "../styles/Navbar.css"
import logo from "../images/IMG_20230223_194005.png"

const links=[
    // {path:"/",title:"Home"},
    {path:"/women",title:"WOMEN"},
    {path:"/men",title:"MEN"},
    {path:"/child",title:"KIDS"},
]

const Navbar = () => {
  return (
    <>
    <div style={{position:"relative"}}>
        
      <div className='nav__bar'>
        <div>

          <Link to="/"><img src={logo} alt="" width={"180px"} height="140px" style={{paddingBottom:"17px"}}/></Link>
        </div>
        {links.map(({path,title})=>(
            <NavLink to={path}>{title}</NavLink>
        ))
        }
      </div>
    </div>
    </>
  )
}

export default Navbar