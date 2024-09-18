import { Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function NavBar() {

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to='/' header name="Weather App" />
        <Menu.Item as={NavLink} to='/weather' name="Weather Fetching From API" />
        <Menu.Item as={NavLink} to='/weatherlist' name="Weather List From DB" />
        <Menu.Item as={NavLink} to='/graphs' name="Graphs From DB" />
      </Container>
    </Menu>
  )
}