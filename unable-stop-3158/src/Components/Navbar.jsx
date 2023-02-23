import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import "../styles/Navbar.css"
import logo from "../images/THE APNA STORE.png"

const links=[
    {path:"/",title:"Home"},
    {path:"/women",title:"WOMEN"},
    {path:"/men",title:"MEN"},
    {path:"/child",title:"KIDS"},
]

const Navbar = () => {
  return (
    <>
    <div>
        
      <div className='nav__bar'>
      <div>

<Link to="/"><img src={logo} alt="" width={"100px"} height="100px"/></Link>
    </div>
      {links.map(({path,title})=>(
            <NavLink to={path}>{title}</NavLink>
        ))

        }
      </div>
    </div>
    <div>
        <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/home-landing-web/Homepage-banner-Ajio.jpg?w=1440&dpr=1.3" width={"100%"} alt="" />
        
    </div>
    <div>
        <div style={{width:"100%",height:"80px",fontSize:"30px",fontWeight:"500",textAlign:"center",fontFamily:"sans-serif",paddingTop:"18px", backgroundColor:"red", color:"#fff"}}>
            <h1>HOMEGROWN INDIAN BRAND</h1>
        </div>
        <div style={{width:"100%",height:"100px",fontSize:"50px",fontFamily:"sans-serif",textAlign:"center"}}>
            <h1>Over 5.5 Million Happy Customers</h1>
        </div>
        <div>

        </div>
    </div>
    </>
  )
}

export default Navbar