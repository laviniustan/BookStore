import React, { useState } from 'react'
import BookCard from '../../commons/components/book-card/book-card'
import Tab from '../../commons/components/tab/tab'

const tab=['All Genres', 'Business','Science','Fiction','Philosophy','Biography']
  



const Home=()=>{
    const [activeIdx,setActiveIdx]=useState(null)
    // const activeElement=(e)=>{
    //     // return activeIdx
    //      console.log(activeIdx)
    // }
//    console.log(activeIdx)
    return(
        <div>
        {
         
            tab.map((e, idx)=>{
                return (                      
                        <Tab element={e} index={idx} onClick={setActiveIdx} onChange={activeIdx} />
  
               )
            })
        }
            <BookCard/>
        </div>
    )
}

export default Home