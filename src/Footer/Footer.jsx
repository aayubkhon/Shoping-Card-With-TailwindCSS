import React from 'react'
import {FacebookCircle} from '@styled-icons/boxicons-logos/FacebookCircle'
import {Instagram} from '@styled-icons/bootstrap/Instagram'
import {Twitter} from '@styled-icons/entypo-social/Twitter'
import {Telegram} from '@styled-icons/boxicons-logos/Telegram'
import {Location} from '@styled-icons/evil/Location'
import {LocalPhone} from '@styled-icons/material/LocalPhone'
import {EmailOutline} from '@styled-icons/evaicons-outline/EmailOutline'



export default function Footer() {
    const FooterStyle = 'm-e rounded-full cursor-pointer p-2 text-white bg-blue-700 w-[50px]'
  return (
    <div className='flex items-center justify-around p-2'>
        <div className='flex-1 flex flex-col flex-wrap p-2'>
            {/* Store information */}
            <h1 className='text-[25]'>
                AkramovA
            </h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus debitis libero ad, 
                veniam ipsam eum, repellendus omnis alias ea inventore 
                dolores voluptate eos vel officiis maxime sit. Ullam, fuga rerum!
            </p>
            <div className='flex items-center justify-center mt-3 self-start'>
                <div className= {FooterStyle + ' bg-blue-700'}>
                    <FacebookCircle className='w-[30px]'/>
                </div>
                <div className={FooterStyle + ' bg-red-600'}>
                    <Instagram className='w-[30px]'/>
                </div>
                <div className={FooterStyle + ' bg-sky-400'}>
                    <Twitter className='w-[30px]'/>
                </div>
                <div className={FooterStyle + ' bg-blue-600'}>
                    <Telegram className='w-[30px]'/>
                </div>
            </div>
        </div>
        <div className='flex-1 flex flex-col p-2'>
            <div className='flex m-3'>
                <Location className='w-[30px]'/>
                <p classsName=' pl-3'>State of Korea</p>
            </div>
            <div className='flex m-3'>
                <LocalPhone className='w-[30px]'/>
                <p classsName=' pl-3'>010123456789</p>
            </div>
            <div className='flex m-3'>
                <EmailOutline className='w-[30px]'/>
                <p classsName='pl-3'>aayubxon701@gmai.com</p>
            </div> 
        </div>
    </div>
  )
}

