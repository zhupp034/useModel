import React from 'react'
import useModel from '../Helper/useModel';


function Body() {
    const {name} =  useModel('useStore1', ({name}) => ({name}))
    console.log('Body');
    
  return (
    <div style={{border: '1px solid red'}}>Body<p>{name}</p></div>
  )
}

export default Body