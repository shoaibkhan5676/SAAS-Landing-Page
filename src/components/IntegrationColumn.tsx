"use client"
import React, { Fragment } from 'react'
import { type IntegrationType } from '@/sections/Integrations'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import {motion} from 'framer-motion'

const IntegrationColumn = (props:{integrations:IntegrationType,className?:string,reverse:boolean}) => {
    const {integrations,className,reverse}=props
  return (
    <>
    <motion.div
    initial={{
        y:reverse?"-50%":"0"
    }}
    animate={{y:reverse?"0":"-50%"}}
    transition={{
        duration:15,
        repeat:Infinity,
        ease:"linear",
    }}
     className="flex flex-col gap-4 pb-4 ">

        {Array.from({length:2}).map((_,i)=>(
            <Fragment key={i}>
                 {
                            integrations.map((element) => {
                                return (
                                    <div key={element.name} className={twMerge("bg-neutral-900 border  border-white/10 rounded-xl p-6",className)}>
                                        <div className="flex justify-center">
                                            <Image src={element.icon} className="size-24 " alt={element.name} />
                                        </div>
                                        
                                        <h3 className="text-3xl text-center mt-6">{element.name}</h3>
                                        <p className="text-center text-white/50  mt-2">{element.description}</p>
    
                                    </div>
                                )
                            })
                        }
            </Fragment>
        ))}
                       
                    </motion.div>
      
    </>
  )
}

export default IntegrationColumn
