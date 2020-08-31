import React, {useState, useEffect} from 'react';
import BookCard from '../book-card/book-card'

let BookCollection = () => {
    const [book, setBook] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch('/book')
            .then(res => res.json())
            .then(setBook)

    }, [count])

    return (
        <div>

            {console.log(book)}
            {book.map(e => console.log(e.volumeInfo))}

        </div>
    )
}
export default BookCollection;