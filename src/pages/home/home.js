import React, {useState} from 'react'
import BookCard from '../../commons/components/book-card/book-card'
import Tab from '../../commons/components/tab/tab'
import './home-style.css'

const tab = [
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

            <div className="home__tab">
                {

                    tab.map((e, idx) => {
                        return (
                            <Tab element={e} index={idx} onClick={setActiveIdx} onChange={activeIdx}/>
                        )
                    })
                }

            </div>

            <hr/>

            <div className="home__books">
                {
                    [...Array(5)].map(e => {
                        return <BookCard/>
                    })
                }
            </div>
        </div>
    )
}

export default Home