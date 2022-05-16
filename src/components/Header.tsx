import React from 'react'
import useModel from '../Helper/useModel';

function Header() {
  const {count, setCount} =  useModel('useStore1')
  // console.log({data});
  console.log('Header');

  return (
    <div>Header{count}
    </div>
  )
}

export default Header