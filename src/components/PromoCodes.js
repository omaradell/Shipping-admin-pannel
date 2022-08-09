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
import Offcanvas from "react-bootstrap/Offcanvas";

export default function PromoCodes() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow(true);

  return (
    <div>
      <h4> Promo Codes </h4>
      <Container>
        <Row>
          <Row>
            <Col className="d-inline-flex justify-content-end m-auto">
              <Button
                variant="primary"
                className="m-2 rounded-pill"
                onClick={handleShow}
              >
                + Add New Code
              </Button>
              <Button
                variant="outline-dark"
                className="m-2 rounded-pill"
                onClick={handleShow1}
              >
                filters
              </Button>
            </Col>
          </Row>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Discount Code</th>
                <th>Discount On</th>
                <th>Value</th>
                <th>Minimum</th>
                <th>Maximum</th>
                <th>Limits</th>
                <th>Expire At</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1234566</td>
                <td>Shell</td>
                <td>$20</td>
                <td>3 pcs</td>
                <td>3 pcs</td>
                <td>8 of 12</td>
                <td>21/7/2022</td>
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
      <Container fluid>
        <Row>
          {/* <Col> */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header
              closeButton
              className="d-inline-flex justify-content-center"
            >
              <Modal.Title>Add Discount</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Discount Code</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter discount code"
                      />
                    </Form.Group>
                    <Dropdown className="mb-3">
                      <Row>
                        <Form.Label>Discount On</Form.Label>
                      </Row>
                      <Row>
                        <Dropdown.Toggle
                          variant="secondary"
                          id="dropdown-basic"
                        >
                          All Products
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
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
                      <Form.Control type="text" placeholder="20$" />
                    </Form.Group>{" "}
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Limits</Form.Label>
                      <Form.Control type="number" placeholder="20" />
                    </Form.Group>
                    <Form.Check
                      className="mb-3"
                      type="switch"
                      id="custom-switch"
                      label="Auto Apply"
                    />
                  </Col>

                  <Col>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter description"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Minimum Quantity</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Minimum Quantity"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Maximum Quantity</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Maximum Quantity"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Expires At</Form.Label>
                      <Form.Control type="date" placeholder="Enter date" />
                    </Form.Group>
                  </Col>
                </Row>
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
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Offcanvas show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Filters</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Dropdown>
                  <Row>
                    <Form.Label>Discount Type</Form.Label>
                  </Row>
                  <Row>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                      Discount Type
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
                    <Form.Label>Discount On</Form.Label>
                  </Row>
                  <Row>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                      Select Categpory
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
                    <Form.Label>Discount Status</Form.Label>
                  </Row>
                  <Row>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                      Activated
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
                <Form.Label>Max Discount Value</Form.Label>
                <Form.Range />
                <Form.Control
                  type="text"
                  placeholder="Enter Max Discount Value"
                />
                <Form.Label>Min Discount Value</Form.Label>
                <Form.Range />
                <Form.Control
                  type="text"
                  placeholder="Enter Min Discount Value"
                />
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
