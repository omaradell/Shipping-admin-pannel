import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default class PaymentOptions extends Component {
  render() {
    return (
      <div>
        <Container>
          <h3>Payment Options</h3>
          <p>Transfer Money</p>
          <Row>
            <Col>
              <Row className="d-inline-flex justify-content-center">
                <Card
                  style={{ width: "18rem", height: "5rem" }}
                  className="m-2 d-flex justify-content-center"
                >
                  <Col className="d-inline-flex justify-content-center">
                    <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/2560px-PayPal_logo.svg.png" />
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <Card.Body>
                      <Card.Title>PayPal</Card.Title>
                    </Card.Body>
                  </Col>
                  <Col className="d-flex justify-content-end">&#62;</Col>
                </Card>
              </Row>
              <Row className="d-inline-flex justify-content-center">
                <Card
                  style={{ width: "18rem", height: "5rem" }}
                  className="m-2 d-flex justify-content-center"
                >
                  <Col className="d-inline-flex justify-content-center">
                    <Card.Img src="https://pwstg02.blob.core.windows.net/pwfiles/ContentFiles/8468Image.jpg" />
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <Card.Body>
                      <Card.Title>Fawry</Card.Title>
                    </Card.Body>{" "}
                  </Col>
                  <Col className="d-flex justify-content-end">&#62;</Col>
                </Card>
              </Row>
              <Row className="d-inline-flex justify-content-center">
                <Card
                  style={{ width: "18rem", height: "5rem" }}
                  className="m-2 d-flex justify-content-center"
                >
                  <Col className="d-inline-flex justify-content-center">
                    <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png" />
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <Card.Body>
                      <Card.Title>Stripe</Card.Title>
                    </Card.Body>{" "}
                  </Col>
                  <Col className="d-flex justify-content-end">&#62;</Col>
                </Card>
              </Row>
              <Row>
                <h4> Clients Payment Types</h4>
                <p>Enable the payment Types you accept</p>
                <Row>
                  <Form.Group as={Col} controlId="" className="p-2">
                    <div class="form-check form-switch">
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckChecked"
                      >
                        Visa{" "}
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
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="" className="p-2">
                    <div class="form-check form-switch">
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckChecked"
                      >
                        Mastercard{" "}
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
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="" className="p-2">
                    <div class="form-check form-switch">
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckChecked"
                      >
                        Paypal{" "}
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
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="" className="p-2">
                    <div class="form-check form-switch">
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckChecked"
                      >
                        Fawry{" "}
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
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="" className="p-2">
                    <div class="form-check form-switch">
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckChecked"
                      >
                        E-Wallets{" "}
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
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="" className="p-2">
                    <div class="form-check form-switch">
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckChecked"
                      >
                        Offline Payment{" "}
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
                </Row>
              </Row>
            </Col>
            <Col>
              <Row className="d-inline-flex justify-content-center">
                <Card
                  style={{ width: "18rem", height: "5rem" }}
                  className="m-2 d-flex justify-content-center"
                >
                  <Col className="d-inline-flex justify-content-center">
                    <Card.Img src="https://w7.pngwing.com/pngs/667/172/png-transparent-logo-brand-visa-font-visa-blue-text-trademark.png" />
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <Card.Body>
                      <Card.Title>Bank Account</Card.Title>
                    </Card.Body>{" "}
                  </Col>
                  <Col className="d-flex justify-content-end">&#62;</Col>
                </Card>
              </Row>
              <Row className="d-inline-flex justify-content-center">
                <Card
                  style={{ width: "18rem", height: "5rem" }}
                  className="m-2 d-flex justify-content-center"
                >
                  <Col className="d-inline-flex justify-content-center">
                    <Card.Img src="https://twitechy.com/wp-content/uploads/vodafone-cash-image.jpg" />
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <Card.Body>
                      <Card.Title>Vodafone Cash</Card.Title>
                    </Card.Body>{" "}
                  </Col>
                  <Col className="d-flex justify-content-end">&#62;</Col>
                </Card>
              </Row>
              <Row className="d-inline-flex justify-content-center">
                <Card
                  style={{ width: "18rem", height: "5rem" }}
                  className="m-2 d-flex justify-content-center"
                >
                  <Col className="d-inline-flex justify-content-center">
                    <Card.Img src="https://cdn-icons-png.flaticon.com/512/678/678521.png?w=360" />
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <Card.Body>
                      <Card.Title>Offline Payments</Card.Title>
                    </Card.Body>{" "}
                  </Col>
                  <Col className="d-flex justify-content-end">&#62;</Col>
                </Card>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
