import React from 'react'

export default function ComponentWithCallback({ click }) {
  return (
    <button onClick={() => click("Hola mundo")}>Este botón está funcionando con un callback</button>
  )
}
