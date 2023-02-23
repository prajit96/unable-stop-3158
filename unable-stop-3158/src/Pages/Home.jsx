import React from 'react'

const Home = () => {
  return (
    <div>
        <div style={{width:"100%",height:"80%",paddingTop:"100px"}}>
        <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/home-landing-web/Homepage-banner-Ajio.jpg?w=1440&dpr=1.3" width={"100%"} alt="" />
        
    </div>
    <div>
        <div style={{width:"100%",height:"80px",fontSize:"30px",fontWeight:"600",textAlign:"center",fontFamily:"sans-serif",paddingTop:"18px", backgroundColor:"red", color:"#fff"}}>
            <h1>HOMEGROWN INDIAN BRAND</h1>
        </div>
        <div style={{width:"100%",height:"100px",marginTop:"15px",fontSize:"50px",fontFamily:"sans-serif",textAlign:"center"}}>
            <h1>Over 5.5 Million Happy Customers</h1>
        </div>
        <div style={{backgroundColor:"#E6E7E8", width:"100%",height:"500px"}}>
          <div style={{display:"flex", marginLeft:"150px", justifyContent:"space-around" }}>
            <div>
              <h3 style={{marginTop:"32px",fontWeight:"700",fontSize:"22px",color:"#Ed2E30",fontFamily:"sans-serif"}}>NEED HELP</h3>
              <div className='hover' style={{fontWeight:"700",fontSize:"18px",color:"#58595B",}}>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>Contact Us</p>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>Track Order</p>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>Returns & Refunds</p>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>FAQs</p>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>My Account</p>
              </div>
            </div>
            <div>
              <h3 style={{marginTop:"32px",fontWeight:"700",fontSize:"22px",color:"#Ed2E30",fontFamily:"sans-serif"}}>COMPANY</h3>
              <div className='hover' style={{fontWeight:"700",fontSize:"18px",color:"#58595B"}}>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>About Us</p>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>Careers</p>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>Stores Near Me</p>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>From The Soul</p>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>Souled Army</p>
              </div>
            </div>
            <div>
              <h3 style={{marginTop:"32px",fontWeight:"700",fontSize:"22px",color:"#Ed2E30",fontFamily:"sans-serif"}}>MORE INFO</h3>
              <div className='hover' style={{fontWeight:"700",fontSize:"18px",color:"#58595B"}}>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>T&C</p>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>Privacy Policy</p>
              <p style={{marginTop:"15px",marginBottom:"10px"}}>Sitemap</p>
              </div>
            </div>
            
          </div>
          <div>
            <p style={{fontSize:"20px",fontWeight:"700",color:"#58595B",fontFamily:"sans-serif",textAlign:"center",paddingTop:"15px"}}>EXPERIENCE THE SOULED STORE APP</p>
          </div>
          <div style={{display:"flex",width:"150px",marginLeft:"650px",marginTop:"15px",gap:"20px"}}>
          <img src="https://tss-static-images.gumlet.io/icons/play-store.png" alt="playstore" />
          <img src="https://tss-static-images.gumlet.io/icons/app-store.png" alt="applestore" />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Home



