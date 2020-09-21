import React, {useState, useEffect} from 'react';
import BookCard from '../book-card/book-card'

let BookCollection = () => {
    const [book, setBook] = useState([])
   

    useEffect(() => {
        fetch('/book')
            .then(res => res.json())
            .then(setBook)

    },0)
    console.log("hello")
    return (
        <div>
            
            {console.log(book)}
            {book.map(e => console.log(e.volumeInfo))}

        </div>
    )
}
export default BookCollection;