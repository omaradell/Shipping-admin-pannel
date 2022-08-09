import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default function Adminstration() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h4> Adminstration </h4>
      <Container>
        <Row>
          <Row>
            <Col className="d-inline-flex justify-content-end m-auto">
              <Button variant="outline-dark" className="m-2 rounded-pill">
                Manage Roles & Privleges
              </Button>
              <Button
                variant="primary"
                className="m-2 rounded-pill"
                onClick={handleShow}
              >
                + Add New Admin
              </Button>
            </Col>
          </Row>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Role</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Admin</td>
                <td>Mohamed</td>
                <td>mohamed@mighty.com</td>
                <td>123456789 </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
      <Container>
        <Row >
          <Col >
            <Modal show={show} onHide={handleClose} >
              <Modal.Header closeButton className="d-inline-flex justify-content-center">
                <Modal.Title >Add Admin</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Admin name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                    />
                  </Form.Group>
                  <Dropdown>
                    <Row>
                      <Form.Label>Role</Form.Label>
                    </Row>
                    <Row>
                      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Select Roles
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Row>
                  </Dropdown>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
