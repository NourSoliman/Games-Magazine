import React , {useState , useEffect} from 'react'
import {BsArrowUpSquareFill} from 'react-icons/bs'
const BackToTop =() => {
    const [back , setBack] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 200) {
                setBack(true)
            } else {
                setBack(false)
            }
        })
    },[])

    const scrollUp = ( ) => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <div>
        {back &&  (
            <button onClick={()=> scrollUp()} className="scrollup"><BsArrowUpSquareFill size="40px"/></button>
        )}
    </div>
  )
}

export default BackToTop