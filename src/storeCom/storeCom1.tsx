import React, {useEffect, useMemo, useRef} from 'react'

function StoreCom1({hook, onUpdate}) {
  const data = hook()
  const updateRef = useRef(onUpdate)
  updateRef.current = onUpdate

  const initialLoad = useRef(false);
  console.log({data});

  // 首次执行时立刻返回初始值
  useMemo(() => {
    onUpdate(data)
    // updateRef.current(data)
    
    // initialLoad.current = false;
  }, []);
  useEffect(() => {
    onUpdate(data)
    // if (initialLoad.current) {
    //   updateRef.current(data)
    // } else {
    //   initialLoad.current = true;
    // }
 
  })
  
  return null
}

export default StoreCom1
