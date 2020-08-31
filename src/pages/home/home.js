import React, {useState, useEffect} from 'react'
import BookCard from '../../commons/components/book-card/book-card'
import Tabs from '../../commons/components/tabs/tabs'
import Header from '../../commons/components/header/header'

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
    const [book, setBook] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch('/book')
            .then(res => res.json())
            .then(setBook)

    }, [count])

    return (
        <div className="home">

            <Header/>

            <Tabs onClick={setActiveIdx} tabs={tabs} activeIndex={activeIdx}/>

            <hr/> 
            <div className="home__books">
                {
                    activeIdx === 'All Genres'
                        ? book.map((e, index) => {

                            return <BookCard val={e} key={e.id} id={e.id}/>
                        })

                        : book.map((e, index) => {
                          return  e.volumeInfo.categories.map(elem=>{
                           
                          { if(elem===activeIdx)return <BookCard val={e} key={e.id} id={e.id}/>}
                            })
                            

                        })

                }

            </div>
        </div>
    )
}

export default Home