import React from 'react'
import useModel from '../useModel';

function Footer() {
  const {num} =  useModel('useStore2')
    // console.error(233);
    console.log('Footer');
  return (
    <div>Footer{num}</div>
  )
}

export default Footer