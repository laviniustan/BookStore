import React from 'react'
import './tabs.css';



const Tabs = ({tabs,onClick, activeIndex}) => {

    return (

        <div className='tabs'>

            {
                tabs.map((val, index) => {
                    return (
                        <div
                            className={`tabs__element ${activeIndex === index
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