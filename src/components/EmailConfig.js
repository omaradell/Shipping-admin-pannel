import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class EmailConfig extends Component {
  render() {
    return (
      <div>
        <h4>Email Configuration</h4>
        <Container>
          <Row>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label>Server Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter server name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
              </Form>
              <lable> Enable SSL</lable>
              <input
                class="form-check-input m-2"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
              />
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Server Port</Form.Label>
                <Form.Control type="text" placeholder="Enter server port" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
              </Form.Group>
            </Col>
          </Row>
          <Row >
            <Col className="d-inline-flex justify-content-center">
              <Button variant="primary">Save</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
