import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Container, Row, Col, Card } from "react-bootstrap";
import ShippingOptions from "./components/ShippingOptions";
import PaymentOptions from "./components/PaymentOptions";
import TaxesAndLocations from "./components/TaxesAndLocations";
import CountriesTaxes from "./components/CountriesTaxes";
import EmailConfig from "./components/EmailConfig";
import Adminstration from "./components/Adminstration";
import ManageRoles from "./components/ManageRoles";
import Discount from "./components/Discount";
import PromoCodes from "./components/PromoCodes";

function App() {
   return (
    <div>
      <Header />
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Navbar />
          </Col>
          <Col>
            <Container>
             {/* <ShippingOptions/> */}
             {/* <PaymentOptions/> */}
             {/* <TaxesAndLocations/> */}
             {/* <CountriesTaxes/> */}
             {/* <EmailConfig/> */}
             {/* <Adminstration/> */}
             {/* <ManageRoles/> */}
             {/* <Discount/> */}
             {/* <PromoCodes/> */}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
