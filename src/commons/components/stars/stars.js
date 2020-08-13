import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa';
import './stars.css';

const Star = ({onClick, onChange}) => {

    
    const [hover, setHover] = useState(null)

       
    return (

        <div className="star-component">
            {
                [...Array(5)].map((star, i) => {
                    let val = i + 1
                    
                let color= val <= (hover || onChange)
                    ? "gold"
                    : "#CCCCCC"
                    
                    return (

                        <FaStar
                            key={val}
                            size={30}
                            className="star-img "
                            color={color}
                            onMouseEnter={() => setHover(val)}
                            onMouseLeave={() => setHover(null)}
                            onClick={() => {
                                onClick(val);
                          

                            }}/>

                    )
                })
            }

        </div>
    )

}

export default Star