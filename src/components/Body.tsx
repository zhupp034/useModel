import React from 'react'
import useModel from '../Helper/useModel';


function Body() {
    const {count} =  useModel('useStore1')
    console.log('Body');
    
  return (
    <div>Body{count}</div>
  )
}

export default Body