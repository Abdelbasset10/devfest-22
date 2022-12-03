import React from 'react'

import persons from '../constants/persons'
import infoImg from '../images/info.png'
import CardMap from './CardMap'

const PersonsWork = ({title}) => {
  return (
    <div className='px-2 sm:px-10 py-8' >
        <div className='flex lg:flex-row flex-col-reverse gap-4 ' >
            <div className='lg:w-[55%]' >
            <h1 className='font-bold text-5xl mb-8' >{title}</h1>
            <div className='flex flex-col gap-4' >
                {persons.map((person)=> {
                    return(
                        <div key={person.id} className='flex justify-between' >
                            <p className={`w-[90px] text-center rounded-[12px] py-2 px-4 
                            ${person.etat === 'availble'&& 'bg-[#3399035C] text-[#339903]'}
                            ${person.etat === 'mission'&& 'bg-[#000AFF42] text-[#000AFF80]'}
                            ${person.etat === 'out'&& 'bg-[#FF000024] text-[#FF000080]'}
                            `}>
                            {person.etat==='availble'&&'availble'}
                            {person.etat==='mission'&&'mission'}
                            {person.etat==='out'&&'out'}</p>
                            <img src={person.userImg} alt="userImg" className='rounded-[50%]' />
                            <p>{person.location}</p>
                            <p>{person.matricule}</p>
                            <img src={infoImg} alt="infoImg" className='w-[1.5rem] h-[1.5rem] cursor-pointer' />
                        </div>
                    )
                })}
            </div>


            </div>
            <div className='lg:w-[45%] mt-10   px-0 lg:px-10 sticky top-0 h-screen' >
                <CardMap />
            </div>
        </div>
    </div>
  )
}

export default PersonsWork