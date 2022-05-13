import { useState } from 'react';
export default function useStore2() {
    const [num, setNum] = useState(1000)
    console.log({num});
    
    return {
        num, setNum
    }
}