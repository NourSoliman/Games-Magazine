import React from 'react'
import FpsPart1 from './FpsPart1'
import FpsPart2 from './FpsPart2'
import FpsPart3 from './FpsPart3'
import "aos/dist/aos.css"
import FpsPart4 from './FpsPart4';

const  FpsMain = () =>{

  return (
    <div>
        {/*first*/}
        <FpsPart1 />
        {/*2nd*/}
        <FpsPart2 />
        {/*3rd*/}
        <FpsPart3 />
        {/*2nd again*/}
        <FpsPart2 />
        {/*4th*/}
        <FpsPart4 />
    </div>
  )
}

export default FpsMain