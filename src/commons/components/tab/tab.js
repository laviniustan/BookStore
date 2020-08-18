import React from 'react'
import './tab-style.css'
const tab = [
    'All Genres',
    'Business',
    'Science',
    'Fiction',
    'Philosophy',
    'Biography'
]

const Tab = ({element, index, onClick, activeIndex}) => {

    return (

        <div className='tab'>

            <div
                className={`tab__element ${activeIndex === index
                    ? 'active'
                    : ''} `}>
                {<p onClick={() => onClick(index)}>{element}</p>}


            </div>

        </div>
    )
}
export default Tab