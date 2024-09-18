import { Outlet, useLocation } from 'react-router-dom'
import HomePage from "../../features/home/HomePage"
import NavBar from "./NavBar"
import { Container } from 'semantic-ui-react'

function App() {
  const location = useLocation()

  return (
    <>
      {location.pathname === '/' ?
        (
          <>
            <NavBar />
            <HomePage />
          </>
        ) :
        (
          <>
            <NavBar />
            <Container style={{ marginTop: '7em' }} >
              <Outlet />
            </Container>
          </>
        )
      }
    </>
  )
}

export default App
