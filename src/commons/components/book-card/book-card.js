import React, {useState,useEffect} from 'react';
import Stars from '../stars/stars'
import img from './book.jpg';
import {BsThreeDotsVertical} from 'react-icons/bs'
import {useHistory } from 'react-router-dom'

import './book-card.css'

const BookCard =  ({val,key}) => {
    let history=useHistory()

    const [rating, setRating] = useState(null)

    const url=()=>{
        console.log(val,key)
     history.push(`/book/:${val}`)
    }
    return (
        <div className="book">
            <div className="book__element">
                <div className="book__element--cardBook">
                    <div className="book__element--img">
                        <img src={img} alt="img" onClick={url}></img>
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
