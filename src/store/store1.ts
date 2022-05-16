import { useState } from 'react';
export default function useStore1() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('store1Name')
    console.log({count});
    
    return {
        count, setCount,
        name, setName
    }
}