import GlobalContext from './Helper/Context'
import { useState, useEffect, useContext, useRef } from 'react';
import isEqual from './Helper/isEqual';
function useModel(namespace, updater) {
    const globalContext = useContext<any>(GlobalContext);
    const [data, setData] = useState(() => {
        return updater ? updater(globalContext.data[namespace]) : globalContext.data[namespace]
    })
    console.log({data}, 'useModel');

    // 这里需要存，后面要当前和上一次的比较
    const stateRef = useRef(data)
    stateRef.current = data
    

    useEffect(() => {
        console.log('addmodel');
        
        const handler = function (val) {
            // 有指定更新的情况，只检测指定部分是否变更
            if (updater) {
                const current = updater(val)
                const prev = stateRef.current
                if (!isEqual(current, prev)) {
                    setData(current) 
                }

            } else {
                setData(val)
            }
            
        }
        try {
            globalContext.callback[namespace].add(handler)
        } catch (error) {
            globalContext.callback[namespace] = new Set()
            globalContext.callback[namespace].add(handler)
        }
        return () => {
            globalContext.callbacks?.[namespace].delete(handler);
        }
    }, [namespace])
    
    
    return data
}
export default useModel