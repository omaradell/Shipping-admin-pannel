import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navbar() {
  return (
    <>
      <div class="d-flex" id="wrapper">
        <div class="border-end bg-white" id="sidebar-wrapper">
          <div class="sidebar-heading border-bottom bg-light">
            
          </div>
          <div class="list-group list-group-flush">
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Shipping Options</a>
            {/* <NavDropdown
              title="Menu"
              id="basic-nav-dropdown"
              class="list-group-item list-group-item-action list-group-item-light p-3"
            >
              <NavDropdown.Item href="#action/3.1">Navigation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Categories</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown> */}
            <a
              class="list-group-item list-group-item-action list-group-item-light p-3"
              href="#!"
            >
              Payment Options
            </a>
            <a
              class="list-group-item list-group-item-action list-group-item-light p-3"
              href="#!"
            >
              taxex and locations
            </a>
            <a
              class="list-group-item list-group-item-action list-group-item-light p-3"
              href="#!"
            >
              Adminstration
            </a>
            <a
              class="list-group-item list-group-item-action list-group-item-light p-3"
              href="#!"
            >
              Email Configuration
            </a>
            <a
              class="list-group-item list-group-item-action list-group-item-light p-3"
              href="#!"
            >
              Discount Events 
            </a>
            <a
              class="list-group-item list-group-item-action list-group-item-light p-3"
              href="#!"
            >
              Promo code
            </a>
            {/* <a
              class="list-group-item list-group-item-action list-group-item-light p-3"
              href="#!"
            >
              Blog
            </a>
            <a
              class="list-group-item list-group-item-action list-group-item-light p-3"
              href="#!"
            >
              Emails
            </a> */}
          </div>
        </div>
        <div id="page-content-wrapper">
          {/* <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div class="container-fluid">
                        <button class="btn btn-primary" id="sidebarToggle">Toggle Menu</button>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li class="nav-item active"><a class="nav-link" href="#!">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="#!">Link</a></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#!">Action</a>
                                        <a class="dropdown-item" href="#!">Another action</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#!">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}
          {/* <div class="container-fluid">
                    <h1 class="mt-4">Simple Sidebar</h1>
                    <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                    <p>
                        Make sure to keep all page content within the
                        <code>#page-content-wrapper</code>
                        . The top navbar is optional, and just for demonstration. Just create an element with the
                        <code>#sidebarToggle</code>
                        ID which will toggle the menu when clicked.
                    </p>
                </div> */}
        </div>
      </div>
      {/* <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home">
            <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav> */}
    </>
  );
}
