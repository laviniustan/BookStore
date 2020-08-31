import React, {useState, useEffect} from 'react';
import Stars from '../stars/stars'
import img from './book.jpg';
import {BsThreeDotsVertical} from 'react-icons/bs'
import {useHistory} from 'react-router-dom'

import './book-card.css'

const BookCard = ({val, key, id}) => {
    let history = useHistory()

    const [rating, setRating] = useState(null)

    const url = () => {
        console.log(id, key)
        history.push({
            pathname: `/book/:${id}`,
            state: {
                id: id,
                val: val
            }
        })
    }

    return (
        <div className="book">
            <div className="book__element">
                <div className="book__element--cardBook">
                    <div className="book__element--img">
                        <img src={val.volumeInfo.imageLinks.thumbnail} alt="img" onClick={url}></img>
                    </div>

                    <div className="book__infoCard">

                        <h3 className="book__infoCard--title">{val.volumeInfo.title}</h3>
                        <div className="book__infoCard--more">
                            <BsThreeDotsVertical size={22}/>
                        </div>
                        <h5>{val.volumeInfo.authors}</h5>
                        <div className="book__infoCard--star-parent">
                            <Stars onChange={rating} onClick={setRating}/>
                            <p>{val.volumeInfo.averageRating}</p>
                            <p>You rate: {rating}</p>
                        </div>

                        <p>{val.volumeInfo.description}</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BookCard;
