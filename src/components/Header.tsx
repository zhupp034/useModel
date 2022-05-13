import React from 'react'
import useModel from '../useModel'

function Header() {
  const {count, setCount} =  useModel('useStore1')
  // console.log({data});
console.log('Header');

  return (
    <div>Header{count}
    <button onClick={() => setCount((n) => n+1)}>changeCount</button>
    </div>
  )
}

export default Header