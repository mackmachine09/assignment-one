import React from 'react'
import '../Components_Css/Image.css'
import Image1 from '../Assets/mic2.jpg'
const Image =()=>{
    return(
        <div className="image-section">
            <div className="image">
                <img src={Image1}/>       
            </div>
        </div>
    )
}

export default Image