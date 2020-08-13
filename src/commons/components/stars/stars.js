import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa';
import './stars.css';

const Star = ({parentCallback, rating}) => {

    
    const [hover, setHover] = useState(null)

    return (

        <div className="star-component">
            {
                [...Array(5)].map((star, i) => {
                    let val = i + 1
                    return (

                        <FaStar
                            key={val}
                            size={30}
                            className="star-img "
                            color={val <= (hover || rating)
                                ? "gold"
                                : "white"}
                            onMouseEnter={() => setHover(val)}
                            onMouseLeave={() => setHover(null)}
                            onClick={() => {
                                parentCallback(val);
                          

                            }}/>

                    )
                })
            }

        </div>
    )

}

export default Star