import React from 'react'

function BigText({props}) {
  return (
    <div className='flex flex-wrap'>
        <h1 className='h text-[#332E2E] font-bold text-8xl flex flex-wrap'>{props}</h1>
    </div>
  )
}

export default BigText;