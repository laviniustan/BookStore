import React from 'react'
import './tab.css';



const Tabs = ({tab,onClick, activeIndex}) => {

    return (

        <div className='tab'>

            {
                tab.map((val, index) => {
                    return (
                        <div
                            className={`tab__element ${activeIndex === index
                                ? 'active'
                                : ''} `}>
                            {<p onClick={() => onClick(index)}>{val}</p>}

                        </div>
                    )
                })

            }
        </div>
    )
}
export default Tabs