import React, {useEffect, useMemo, useRef} from 'react'

function StoreCom1({hook, onUpdate}) {
  const data = hook()
  const updateRef = useRef(onUpdate)
  updateRef.current = onUpdate

  const initialLoad = useRef(false);
  console.log({data});

  // 首次执行时立刻返回初始值，比useEffect要早，只执行一次，后面的交给useEffect
  useMemo(() => {
    console.log('useMemo');
    
    onUpdate(data)
    // updateRef.current(data)
    
    initialLoad.current = false;
  }, []);

  
  useEffect(() => {
    console.log('useEffect');
    // 后面的更新才会执行到，首次不更新
    if (initialLoad.current) {
      onUpdate(data)
      // updateRef.current(data)
    } else {
      initialLoad.current = true;
    }
 
  })
  
  return null
}

export default StoreCom1
