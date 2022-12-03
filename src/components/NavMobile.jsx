import React, {useState} from 'react'
import home from '../images/home.png'
import plus1 from '../images/plus1.png'

import navLinks from '../constants/navLink'

const NavMobile = () => {
    const [isNav,setIsNav] = useState(false)
  return (
    <div className='block sm:hidden absolute top-2 right-4 z-10' >
        <img src={home} alt="navPhoto" onClick={()=>setIsNav(!isNav)} />
        {isNav && (
            
            <ul className='absolute top-10 right-4 bg-[#9747FF] py-2 px-4 w-[200px] rounded-[12px]' >
            {navLinks.map((navLink)=>{
                return(
                    <div key={navLink.id} className='flex gap-4 items-center py-2 px-4 cursor-pointer' >
                        <img src={navLink.img} alt="navPhoto" />
                        <p className=' text-[#F8F8F8] font-bold' >{navLink.title}</p>
                    </div>
                )
            })}
            <div className=' flex items-center gap-2 justify-center  py-2 w-full bg-white rounded-[12px]' >
        <img src={plus1} alt="plusImg"/>
        <p className='text-gray font-bold' >Add </p>
    </div>
        </ul>
        )}
        

    </div>
  )
}

export default NavMobile