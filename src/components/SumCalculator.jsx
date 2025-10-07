import React, { useEffect, useState } from 'react'

const SumCalculator = () => {

    const [number, setNumber] = useState([])
    const [sum, setSum] = useState('0')

    const handleChange = (e) => {
        const parsed = parseInt(e.target.value, 10)

        if(!isNaN(parsed)){
            setNumber((prev)=>[...prev, parsed]) 
        }
    }

    useEffect(()=>{
        const total = number.reduce((acc, num)=> acc + num, 0);
        setSum(total);
    }, [number])


  return (
    <div>
        <h1>Sum Calculator</h1>
        <input type='number' onChange={handleChange} />
        <p>Sum: {sum}</p>
    </div>
  )
}

export default SumCalculator