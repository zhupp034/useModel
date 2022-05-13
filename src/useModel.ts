import GlobalContext from './Helper/Context'
import { useState, useEffect, useContext, useRef } from 'react';
function useModel(namespace) {
    const globalContext = useContext<any>(GlobalContext);
    const [data, setData] = useState(() => {
        return globalContext.data[namespace]
    })
    console.log({data}, 'useModel');
    

    useEffect(() => {
        const handler = function (val) {
            setData(val)
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