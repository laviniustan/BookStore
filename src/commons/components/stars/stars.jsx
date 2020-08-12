import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import './stars.css';

const Star=({parentCallback})=>{
    
        const[rating, setRating]=useState(null)
        const[hover,setHover]=useState(null)
    //    console.log(rating)
        return(
            
            <div  className="star-component">
            {[...Array(5)].map((star, i)=>{
                let val=i+1
                return (   <label >
                                            <input 
                                                type="radio"
                                                name="star" 
                                                value={val} 
                                                onClick={() =>{setRating(val);parentCallback(val); } } 
                                               

                                                />
                                                

                                                <FaStar  
                                                    size={30} 
                                                    className="star-img star" 
                                                    color={ val <= (hover||rating) ? "gold":"white" }
                                                    onMouseEnter={()=>setHover(val)}
                                                    onMouseLeave={()=>setHover(null)}
                                                    />
                                           
                                        </label>)})
            }
                
            </div>
        )
   
}

export default Star