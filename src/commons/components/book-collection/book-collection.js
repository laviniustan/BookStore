import React,{useState,useEffect} from 'react'


let BookCollection=()=>{
    const [book, setBook] = useState([])
    const [ count, setCount ] = useState(0)

    useEffect(()=>{
           fetch('/book')
           .then(res=>res.json())
           .then(setBook)
           
       },[count])

    return(
        <div>
                   

                {
                   book.map(e=>{
                       return <h1>{e}</h1>
                       })
                }
     
        </div>
    )
}
export default BookCollection;