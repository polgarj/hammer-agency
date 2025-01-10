import React from 'react'
import Image from 'next/image'

const UserMenu = () => {
  return (
    <div className='ml-auto mt-[29px] mr-[31px] flex items-center absolute top-0 right-0'>
      <button className='grid place-items-center mr-4 w-[30px] h-[30px] rounded-full bg-[#2F1255] bg-opacity-30 hover:bg-opacity-50 transition-all' aria-label="notifications"><Image src="/icons/notification.svg" alt="" width={14} height={16} /></button>
      <button className='flex items-center flex-nowrap text-white text-[13px]'>Account Name<Image className='ml-4' src="/account.png" alt="" width={45} height={45} /></button>
    </div>
  )
}

export default UserMenu