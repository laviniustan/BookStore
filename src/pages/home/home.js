import React, {useState} from 'react'
import BookCard from '../../commons/components/book-card/book-card'
import Tabs from '../../commons/components/tabs/tabs'
import Header from '../../commons/components/header/header'
import './home.css'

const tabs = [
    'All Genres',
    'Business',
    'Science',
    'Fiction',
    'Philosophy',
    'Biography'
]

const Home = () => {
    const [activeIdx, setActiveIdx] = useState(null)

    return (
        <div className="home">

            <Header/>

            <Tabs onClick={setActiveIdx} tabs={tabs} activeIndex={activeIdx}/>

            <hr/>

            <div className="home__books">
                {
                    activeIdx === 0
                        ? [...Array(5)].map(e => {
                            return <BookCard/>
                        })
                        : <p>{activeIdx}</p>

                }
            </div>
        </div>
    )
}

export default Home