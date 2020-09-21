import React, {useState, useEffect} from 'react'
import {useLocation,useParams, withRouter} from 'react-router-dom'

const BookInfo = () => {
    const [info,setInfo]=useState({})
    // const location = useLocation()
    //  const { id } = useParams();
    //  console.log(location)
    // const location = useLocation(); 
       
 
       
    useEffect(() => {
        fetch('/book/id')
            .then(res => res.json())
            .then(setInfo)
        // const id = this.props.match.params.id;
        // this.fetchData(id);
        // console.log(id)
        // const currentPath = location.pathname;
        // console.log(id)
        // console.log(currentPath)
    // const searchParams = new URLSearchParams(location.search);

    },0)

    // console.log(id)
    //  console.log(info)
    // for(let elem of info){
    //     console.log(elem)
    // }
    {
        console.log(info.volumeInfo)
        // console.log(info.volumeInfo)
    } 
        return (
       
            <div>
            {
                console.log(info.volumeInfo.title)
             
            }
    
                {
                   
                }       
                 
                {/* <div className="details">
    
                    <img src={location.state.val.volumeInfo.imageLinks.thumbnail}/>
                    
                    <p>{location.state.val.volumeInfo.subtitle}</p>
                    <p>author: {location.state.val.volumeInfo.authors}</p>
    
                    <p >{location.state.val.volumeInfo.description}</p>
                    <p ></p>
    
                </div> */}
                {/* <p>title: {info.volumeInfo.title}</p> */}
            </div>
        )
            
    
}
export default withRouter(BookInfo)