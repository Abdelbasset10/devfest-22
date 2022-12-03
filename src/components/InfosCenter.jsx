import React from 'react'
import infos from '../constants/Infos'
import AvailbleCard from './AvailbleCard'
import CardMap from './CardMap'


import InfosRight from './InfosRight'

const Infos = () => {
  return (
    <div className='pt-10 px-2 xl:px-10 flex flex-col items-start lg:items-center gap-4' >
        <div className='flex flex-col-reverse  items-start justify-start lg:flex-row	gap-4 lg:items-end ' >
            <div className='flex justify-start flex-wrap gap-4 flex-[1]'>
                {infos.map((info)=>{
                    return(
                        <div key={info.id} className='flex items-center cursor-pointer gap-4 py-2 px-4 w-[150px] lg:w-[180px] xl:w-[200px] rounded-[12px] bg-white rounder-[12px] shadow-lg		border-2' >
                            <img src={info.img} alt="infoImage" className='w-[2rem] h-[2rem]' />
                            <div className='text-[#363636BF]' >
                                <p>{info.title}</p>
                                <p className='text-[#9747FF]' >{info.number}</p>
                            </div> 
                        </div>
                    )
                })}
            </div>
            <div className='flex-[1]' >
                <InfosRight />
            </div>
        </div>

        <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-between w-full px-2' >
            <div className='flex-[1]' >
                <CardMap />
            </div>
            <div className='flex-[1]' >
                <AvailbleCard />
            </div>
        </div>
    </div>
  )
}

export default Infos