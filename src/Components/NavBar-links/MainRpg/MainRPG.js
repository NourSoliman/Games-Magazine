import React from 'react'
import RpgPart1 from './RpgPart1'
import RpgPart2 from './RpgPart2'
import "aos/dist/aos.css"
import RpgPart3 from './RpgPart3';
import RpgPart4 from './RpgPart4';
const MainRPG = ()=> {
  return (
    <div>
        {/*First*/}
        <RpgPart1 />
        {/*2nd*/}
        <RpgPart2 />
        {/*3rd*/}
        <RpgPart3 />
        {/*2nd again*/}
        <RpgPart2 />
        {/*4th*/}
        <RpgPart4 />
    </div>
  )
}

export default MainRPG