import React from "react";
import { Nav } from "react-bootstrap";

export function NavMenu() {
  return (
    <Nav className="justify-content-center">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/create">New</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
