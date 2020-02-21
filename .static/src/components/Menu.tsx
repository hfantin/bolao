import React, { useState } from "react";

import { Navbar, Nav } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Resultados from "./Resultados";

const Menu = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" expanded={expanded}>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          Bolão
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Início
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/resultados"
              onClick={() => setExpanded(false)}
            >
              Resultados
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resultados" component={Resultados} />
        <Route render={() => <p>Não encontrado</p>} />
      </Switch>
    </>
  );
};

export default Menu;
