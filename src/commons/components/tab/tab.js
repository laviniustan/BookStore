import React from 'react'
import './tab-style.css'


const Tab =({element, index,onClick,onChange})=>{

    
    return (
        
        <div className='tab'>
            
            <div  className={`${onChange===index?'active':''} `}>
            {
                <p onClick={()=>onClick(index)}>{element}</p>
                }
                
                {onChange===index?<p>activ</p>:''}

            </div>
         
        </div>
    )
}
export default Tab