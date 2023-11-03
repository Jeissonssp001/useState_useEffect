import ComponentWithStates from "../components/ComponentWithStates";

export default function States() {
  return (
    <div>
      <h1>useState</h1>
      <ComponentWithStates name="manzanas" />
      <ComponentWithStates name="naranjas" />
      <ComponentWithStates name="peras" />
      <ComponentWithStates name="limones" />
    </div>
  )
}
