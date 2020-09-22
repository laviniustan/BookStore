import React, {useState, useEffect} from 'react'
import BookCard from '../../commons/components/book-card/book-card'
import Tabs from '../../commons/components/tabs/tabs'
import Header from '../../commons/components/header/header'
import Slideshow from '../../commons/components/slideshow/slideshow'

import './home.css';
import {GiConsoleController} from 'react-icons/gi';

const tabs = [
    'All Genres',
    'History',
    'Drama',
    'Fiction',
    'Technology & Engineering',
    'Biography'
];

const Home = () => {
    const [activeIdx, setActiveIdx] = useState('All Genres')
    const [books, setBook] = useState([])
   

    useEffect(() => {
        fetch('/book')
            .then(res => res.json())
            .then(setBook)

    }, [])

    return (
        
        <div className="home">
        

            <Header/>
            
            <Slideshow val={books} />
            <Tabs onClick={setActiveIdx} tabs={tabs} activeIndex={activeIdx}/>
            
            <hr/> 
            <div className="home__books">
           
                {/* {
                    console.log(books.volumeInfo.title)
                } */}
                
                {
                    activeIdx === 'All Genres'
                        ? books.map((value, index) => {

                            return <BookCard val={value} key={value.id} id={value.id}/>
                        })

                        : books.map((value, index) => {
                          return  value.volumeInfo.categories.map(elem=>{
                           
                          { if(elem===activeIdx)return <BookCard val={value} key={value.id} id={value.id}/>}
                            })
                            

                        })

                }

            </div>
        </div>
    )
}

export default Home