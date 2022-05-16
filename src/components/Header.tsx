import React from 'react'
import useModel from '../Helper/useModel';

function Header() {
  const {count, setCount} =  useModel('useStore1', ({count}) => ({count}))
  // console.log({data});
  console.log('Header');

  return (
    <div style={{border: '1px solid red'}}>Header{count}
    </div>
  )
}

export default Header