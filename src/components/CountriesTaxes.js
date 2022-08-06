import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default class CountriesTaxes extends Component {
  render() {
    return (
      <div>
        <h4> Taxes & Locations</h4>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Countries</th>
              <th>Taxes rate</th>
              <th>Activate</th>
              <th>FedEx</th>
              <th>UPS</th>
              <th>USPS</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>USA</td>
              <td>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="20"
                  placeholder="20%"
                />
              </td>
              <td>
                {" "}
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                />
              </td>
              <td>2%</td>
              <td>2%</td>
              <td>2%</td>
              <td>
                {" "}
                <Button variant="danger">Delete</Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
