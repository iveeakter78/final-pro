import React, { Children } from 'react'

const Container = ({children}) => {
  return (
    <div className={`max-w-[1118px] mx-auto px-2`}>{children}</div>
  )
}

export default Container