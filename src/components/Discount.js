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

export default function Discount() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <h4> Discount Events </h4>
      <Container>
        <Row>
          <Row>
            <Col className="d-inline-flex justify-content-end m-auto">
              <Button
                variant="primary"
                className="m-2 rounded-pill"
                onClick={handleShow}
              >
                + Add New Discount
              </Button>
              <Button variant="outline-dark" className="m-2 rounded-pill">
                filters
              </Button>
            </Col>
          </Row>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Discount Type</th>
                <th>Discount On</th>
                <th>Value</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Discount</td>
                <td>Produnct</td>
                <td>$20</td>
                <td>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                  />
                </td>
                <td>
                  {" "}
                  <Button variant="danger">Delete</Button>{" "}
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header
                closeButton
                className="d-inline-flex justify-content-center"
              >
                <Modal.Title>Add Discount</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Discount Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter discount name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="date" placeholder="Enter start date" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type="date" placeholder="Enter End Date" />
                  </Form.Group>
                  <Dropdown>
                    <Row>
                      <Form.Label>Discount On</Form.Label>
                    </Row>
                    <Row>
                      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        All Products
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
                  <Dropdown>
                    <Row>
                      <Form.Label>Discount Type</Form.Label>
                    </Row>
                    <Row>
                      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Fixed Price
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
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Discount Value</Form.Label>
                    <Form.Control type="text" placeholder="Enter discount value" />
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>+ Upload Banner</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
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
