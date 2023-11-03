import { useEffect, useState } from 'react'

export default function ComponentWithEffects() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    console.log("Al comienzo del componente");
    return () => {
      console.log("Al final del componente");
    }
  }, [])

  useEffect(() => {
    console.log(`valor actual del estado: ${count}`);
  }, [count])

  return (
    <>
      <button onClick={() => setCount(old => old + 1)}>Contador {count}</button>
      <br />
      <br />
      <button onClick={() => setCount2(old => old + 1)}>Contador2 {count2}</button>
    </>
  )
}
