import React from 'react'

const Container = ({children}) => {
  return (
    <div className='mx-2 sm:mx-4 md:mx-20 xl:mx-40 px-3'>
        {children}
    </div>
  )
}

export default Container