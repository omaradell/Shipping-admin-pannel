import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default class ManageRoles extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <h4> Manage Roles And Privileges</h4>
            <Col>
              <Dropdown>
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
              </Dropdown>
              <Row className="p-2">
                <h5 className="p-2"> Shipping options </h5>
                <Form>
                  <div key="checkbox" className="mb-3  p-2">
                    <Form.Check
                      className="p-2"
                      type="checkbox"
                      id="checkbox"
                      label="Add Shipping Rate"
                    />
                    <Form.Check
                      className="p-2"
                      type="checkbox"
                      label="Add Shipping Rate"
                      id="checkbox"
                    />
                    <Form.Check
                      className="p-2"
                      type="checkbox"
                      label="Add Shipping Rate"
                      id="checkbox"
                    />
                  </div>
                </Form>
              </Row>
              <Row className="p-2">
                <h5 className="p-2"> Taxes And Loactions </h5>
                <Form>
                  <div key="checkbox" className="mb-3  p-2">
                    <Form.Check
                      className="p-2"
                      type="checkbox"
                      id="checkbox"
                      label="Add Shipping Rate"
                    />
                    <Form.Check
                      className="p-2"
                      type="checkbox"
                      label="Add Shipping Rate"
                      id="checkbox"
                    />
                    <Form.Check
                      className="p-2"
                      type="checkbox"
                      label="Add Shipping Rate"
                      id="checkbox"
                    />
                  </div>
                </Form>
              </Row>
              <Row className="p-2">
                <h5 className="p-2"> Adminstration </h5>
                <Form>
                  <div key="checkbox" className="mb-3  p-2">
                    <Form.Check
                      className="p-2"
                      type="checkbox"
                      id="checkbox"
                      label="Add Shipping Rate"
                    />
                    <Form.Check
                      className="p-2"
                      type="checkbox"
                      label="Add Shipping Rate"
                      id="checkbox"
                    />
                    <Form.Check
                      className="p-2"
                      type="checkbox"
                      label="Add Shipping Rate"
                      id="checkbox"
                    />
                  </div>
                </Form>
              </Row>
              <Row className="p-2">
                <h5 className="p-2"> Promo Codes </h5>
                <Form>
                  <div key="checkbox" className="mb-3  p-2">
                    <Form.Check
                      className="p-2"
                      type="checkbox"
                      id="checkbox"
                      label="Add Shipping Rate"
                    />
                    <Form.Check
                      className="p-2"
                      type="checkbox"
                      label="Add Shipping Rate"
                      id="checkbox"
                    />
                    <Form.Check
                      className="p-2"
                      type="checkbox"
                      label="Add Shipping Rate"
                      id="checkbox"
                    />
                  </div>
                </Form>
              </Row>
              <Row className="p-2">
                <h5 className="p-2"> Email Configuration </h5>
                <Form>
                  <div key="checkbox" className="mb-3  p-2">
                    <Form.Check
                      className="p-2"
                      type="checkbox"
                      id="checkbox"
                      label="Add Shipping Rate"
                    />
                    <Form.Check
                      className="p-2"
                      type="checkbox"
                      label="Add Shipping Rate"
                      id="checkbox"
                    />
                    <Form.Check
                      className="p-2"
                      type="checkbox"
                      label="Add Shipping Rate"
                      id="checkbox"
                    />
                  </div>
                </Form>
              </Row>
              <Row>
                <Col>
                  <Button variant="outline-dark" className="m-2 rounded-pill">
                    Cancel
                  </Button>
                  <Button variant="primary" className="m-2 rounded-pill">
                    Save
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
