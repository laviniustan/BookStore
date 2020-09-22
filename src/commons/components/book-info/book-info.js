import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import Header from '../header/header'

const BookInfo = () => {
 
    // const location = useLocation()  const { id } = useParams();
    // console.log(location) const location = useLocation();

    const [isLoading, setIsLoading] = useState(false);
    const [info, setInfo] = useState({})
    useEffect( () => {
      
        
         fetch('/book/id')
            .then(res => res.json())
            .then(setInfo)
        

    }, [])



    return (

        <div>
            <Header />

            {
                Object.keys(info).length === 0 
                    ? (<div>Load...</div>)
                    : (
                        <div className="details">
                        <img src={info.volumeInfo.imageLinks.thumbnail}/>
                        <p>{info.volumeInfo.subtitle}</p>
                        <p>author: {info.volumeInfo.authors}</p>
                        <p >{info.volumeInfo.description}</p>
                        <p>title{info.volumeInfo.title}</p>
                        </div>
                        
                    )
             }

            
        </div>
    )

}
export default withRouter(BookInfo)