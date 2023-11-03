import ComponentWithCallback from '../components/ComponentWithCallback'

export default function Callback() {
  const callback = (saludo) => {
    console.log(saludo);
  }

  return (
    <div>
      <h1>Callback</h1>
      <ComponentWithCallback click={callback} />
    </div>
  )
}
