import { useState } from "react"

export default function ComponentWithStates({ name = "" }) {
  // Opcionalmente se puede iniciar el estado en false, para que los checkbox inicien apagados
  const [estado, setEstado] = useState(true)
  // const [estado, setEstado] = useState(false)

  const onChange = () => {
    setEstado(oldValue => !oldValue)
  }

  return (
    <div>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={estado}
        onChange={onChange}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  )
}
