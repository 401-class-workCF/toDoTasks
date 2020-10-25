import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <h1>Task Tracker</h1>
      <Navbar bg='dark'>
        <Nav.Link href='/home'>Home</Nav.Link>
      </Navbar>
    </header>
  );
}

export default Header;
