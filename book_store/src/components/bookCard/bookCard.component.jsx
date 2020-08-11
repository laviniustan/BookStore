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
                
              
                <h3 className="title">Very Nica</h3>
                <div className="more">
                   <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
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
