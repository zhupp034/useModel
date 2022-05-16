import React from 'react'
import useModel from '../Helper/useModel';


function Nav() {
    const {count} =  useModel('useStore1')
    console.log('Nav');
    
  return (
    <div style={{border: '1px solid red'}}>Nav<p>{count}</p></div>
  )
}

export default Nav