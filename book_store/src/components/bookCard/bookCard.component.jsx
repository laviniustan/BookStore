import React from 'react';
import Stars from '../starts/starts.components'
import img from './book1.jpg';

import './bookCard.style.scss'

const BookCard =()=>(
<div>
    <div className="element">
        <div className="cardBook">
            <div className="img">
            <img src={img} alt="img"></img>
            </div>

            <div className="infoCard">
                
                <div>
                <h3 className="title">Very Nica</h3>
               
                </div>
                <h5>by Lucy Parker</h5>
                <div className="star">
                     <Stars />
                </div>
               
                <p>Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years.</p>
            </div>
            
        </div>
    </div>

</div>
)

export default BookCard;
