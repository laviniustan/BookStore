import React, {useState} from 'react';
import Stars from '../stars/stars'
import img from './book.jpg';
import {BsThreeDotsVertical} from 'react-icons/bs'

import './book-card.css'

const BookCard =  () => {

    const [rating, setRating] = useState(null)
    //    console.log(rating)
    return (
        <div className="book">
            <div className="book__element">
                <div className="book__element--cardBook">
                    <div className="book__element--img">
                        <img src={img} alt="img"></img>
                    </div>

                    <div className="book__infoCard">

                        <h3 className="book__infoCard--title">Very Nica</h3>
                        <div className="book__infoCard--more">
                            <BsThreeDotsVertical size={22}/>
                        </div>
                        <h5>by Lucy Parker</h5>
                        <div className="book__infoCard--star-parent">
                            <Stars onChange={rating} onClick={setRating} />
                            <p>You rate: {rating}</p>
                        </div>

                        <p>Readers of all ages and walks of life have drawn inspiration and empowerment
                            from Elizabeth Gilbert’s books for years.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BookCard;
