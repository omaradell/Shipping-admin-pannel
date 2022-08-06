import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default class ShippingOptions extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="m-auto">
            <h3> Shipping Options</h3>
            <Col>
              <Row>
                <Col>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="5"
                    placeholder="20"
                  />
                  <div className="d-inline-flex justify-content-end p-2">
                    {" "}
                    Per{" "}
                  </div>
                </Col>

                <Col>
                <InputGroup className="mt-2">
                  <Form.Control
                    placeholder="$ 1000"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    disabled
                  />
                </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="5"
                    placeholder="20"
                  />
                  <div className="d-inline-flex justify-content-end p-2">
                    {" "}
                    Per{" "}
                  </div>
                </Col>

                <Col>
                <InputGroup className="mt-2">
                  <Form.Control
                    placeholder="LB 1000"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    disabled
                  />
                </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="5"
                    placeholder="20"
                  />
                  <div className="d-inline-flex justify-content-end p-2">
                    {" "}
                    Per{" "}
                  </div>
                </Col>

                <Col>
                <InputGroup className="mt-2">
                  <Form.Control
                    placeholder="KM 1000"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    disabled
                  />
                </InputGroup>
                </Col>
              </Row>
              <Col>
              <Row className="m-auto">
                <label>Shipping Rate</label>
                <DropdownButton
                  id="dropdown-button-dark-example2"
                  variant="secondary"
                  menuVariant="dark"
                  title="Percentage"
                  className="mt-2"
                >
                  <Dropdown.Item href="#/action-1" active>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-4">
                    Separated link
                  </Dropdown.Item>
                </DropdownButton>
              </Row>
              </Col>
              <input
                className="m-3"
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="5"
                placeholder="20%"
              />
              <Col className="p-2">
              
              <Form.Group as={Col} controlId="" className="p-2">
                <div class="form-check form-switch">
                <label class="form-check-label" for="flexSwitchCheckChecked">
                    Shipping Carrier{" "}
                  </label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    toggle
                  />
                  
                </div>
              </Form.Group>
              <Form.Group as={Col} controlId="" className="p-2">
                <div class="form-check form-switch">
                <label class="form-check-label" for="flexSwitchCheckChecked">
                    Free Shipping{" "}
                  </label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    toggle
                  />
                  
                </div>
              </Form.Group>
              <Form.Group as={Col} controlId="" className="p-2">
                <div class="form-check form-switch">
                <label class="form-check-label" for="flexSwitchCheckChecked">
                    Expedited Shipping{" "}
                  </label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    toggle
                  />
                  
                </div>
              </Form.Group>
              <Form.Group as={Col} controlId="" className="p-2">
                <div class="form-check form-switch">
                <label class="form-check-label" for="flexSwitchCheckChecked">
                    Overnight SHipping{" "}
                  </label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    toggle
                  />
                  
                </div>
              </Form.Group>
              </Col>
            </Col>
            <Col>
              <Row>
                <label>Discount</label>
                <DropdownButton
                  id="dropdown-button-dark-example2"
                  variant="secondary"
                  menuVariant="dark"
                  title="Ramadan Promo"
                  className="mt-2"
                >
                  <Dropdown.Item href="#/action-1" active>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-4">
                    Separated link
                  </Dropdown.Item>
                </DropdownButton>
              </Row>
              <Row>
                <label className="p-3">ZipCode</label>
                <InputGroup className="mt-2">
                  <Form.Control
                    placeholder="Zipcode"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
