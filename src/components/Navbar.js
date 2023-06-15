import React from 'react';
import Button from 'react-bootstrap/Button';
import { Offcanvas } from 'react-bootstrap';
import '../Navbar.css';

export default function Navbar() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        More Info
        <i className="fas fa-bars"></i>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="top">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Check Me Out!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#home" onClick={handleClose}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleClose}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={handleClose}>
                Skills
              </a>
            </li>
            
            
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
