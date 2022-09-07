import React from 'react'
import '../Components_Css/Heading.css'
import Image1 from '../Assets/mic1.png'

const Heading =()=>{
    return(
        <div className='heading_section'>
           <img className="heading_image" src={Image1}/>
           <h1>Podcasts</h1>
        </div>
    )
}

export default Heading