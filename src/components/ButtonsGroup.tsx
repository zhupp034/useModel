import React from 'react'
import useModel from '../Helper/useModel'

function ButtonsGroup() {
    const {setCount} =  useModel('useStore1', ({setCount}) => ({setCount}))
    const {setNum} =  useModel('useStore2', ({setNum}) => ({setNum}))
  return (
    <div>
        控制按钮列表
        <button onClick={() => setCount((n) => n+1)}>改变store1</button>
        <button onClick={() => setNum((n) => n+1)}>改变store2</button>
    </div>
  )
}

export default ButtonsGroup