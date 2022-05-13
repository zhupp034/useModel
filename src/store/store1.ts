import { useState } from 'react';
export default function useStore1() {
    const [count, setCount] = useState(0)
    console.log({count});
    
    return {
        count, setCount
    }
}