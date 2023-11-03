import { Link, Outlet, Route, Routes } from "react-router-dom"
import Effects from "./screens/Effects"
import States from "./screens/States"
import Callback from "./screens/Callback"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/" element={<Callback />} />
        <Route path="/effect" element={<Effects />} />
        <Route path="/states" element={<States />} />
      </Route>
    </Routes>
  )
}

const Layout = () => {
  return (
    <div>
      <div style={{ display: "flex", gap: 20 }}>
        <Link to="/">Callback</Link>
        <Link to="/states">State</Link>
        <Link to="/effect">Effect</Link>
      </div> <br />
      <Outlet />
    </div>
  )
}

export default App
