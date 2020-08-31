import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

const BookInfo = () => {
    const location = useLocation()
    // console.log(location.state)

    return (
        <div>
            {console.log(location.state.val.volumeInfo.title)}
            {}
            <div className="details">

                <img src={location.state.val.volumeInfo.imageLinks.thumbnail}/>
                <p>title: {location.state.val.volumeInfo.title}</p>
                <p>{location.state.val.volumeInfo.subtitle}</p>
                <p>author: {location.state.val.volumeInfo.authors}</p>

                <p>{location.state.val.volumeInfo.description}</p>

            </div>
        </div>
    )
}
export default BookInfo