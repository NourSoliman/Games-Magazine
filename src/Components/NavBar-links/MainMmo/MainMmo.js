import React from 'react'
import MmoPart2 from './MmoPart2'
import MMORPG from './MMORPG'
import "aos/dist/aos.css"
import MmoPart3 from './MmoPart3';
import MmoPart4 from './MmoPart4';
const MainMmo =() => {
  return (
    <div>
        {/*Part1*/}
        <MMORPG />
        {/*Part 2*/}
        <MmoPart2 />
        {/*Part 3*/}
        <MmoPart3 />
        {/*Part2 again*/}
        <MmoPart2 />
        {/*Part4*/}
        <MmoPart4 /> 
    </div>
  )
}

export default MainMmo