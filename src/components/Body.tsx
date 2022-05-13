import React from 'react'
import useModel from '../useModel'

function Body() {
    const {count} =  useModel('useStore1')
    console.log('Body');
    
  return (
    <div>Body{count}</div>
  )
}

export default Body