import React from 'react'
import useModel from '../Helper/useModel';

function Footer() {
  const {num} =  useModel('useStore2')
    // console.error(233);
    console.log('Footer');
  return (
    <div style={{border: '1px solid red'}}>Footer{num}</div>
  )
}

export default Footer