import React, {useState} from 'react'
import BookCard from '../../commons/components/book-card/book-card'
import Tab from '../../commons/components/tab/tab'
import './home.css'


const Home = () => {
    const [activeIdx, setActiveIdx] = useState(null)

    return (
        <div className="home">

            <div >
 
                            <Tab onClick={setActiveIdx} activeIndex={activeIdx}/>
    

            </div>

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