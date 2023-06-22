import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../contact.css";

export default function Contact() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log("name: ", name);
    console.log("email: ", email);
    console.log("message: ", message);

    const hiddenForm = document.forms["contact"];

    hiddenForm.elements["name"].value = name;
    hiddenForm.elements["email"].value = email;
    hiddenForm.elements["message"].value = message;

    hiddenForm.submit();

    handleClose();
  };

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Contact Me Here!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="John Doe" name="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@email.com"
                autoFocus
                name="email"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} name="message" />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Send
            </Button>
          </form>
          <ul className="list-unstyled">
            <li>
              <i className="fas fa-phone"></i> (818) 337-9688
            </li>
            <li>
              <i className="fab fa-linkedin"></i>{" "}
              <a
                href="https://www.linkedin.com/in/habib-maksoud-87aa2a253/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          Lets get in touch!
        </Modal.Footer>
      </Modal>
    </>
  );
}
