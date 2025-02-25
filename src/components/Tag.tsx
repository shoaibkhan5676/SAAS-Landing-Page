import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const Tag = (props:HTMLAttributes<HTMLDivElement>) => {
    const {children,className,...otherProps}=props
  return (
    <>
    <div className={twMerge("inline-flex border items-center border-lime-400 text-lime-400 rounded-full py-1 px-3  gap-2 uppercase",className)}>
        <span>&#10038;</span>
        <span className='text-sm'>{children}</span>
    </div>
      
    </>
  )
}

export default Tag
