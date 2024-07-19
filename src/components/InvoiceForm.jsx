import React, { useState } from "react";
import { Card, Col, Form, Row, Button } from "react-bootstrap";
import InvoiceItem from "./reusable/InvoiceItem";

function InvoiceForm() {
  const [state, setState] = useState({
    isOpen: false,
    currency: "₹",
    currentDate: "",
    invoiceNumber: 1,
    billTo: "",
    billToAddress: "",
    billToEmail: "",
    billFrom: "Sarthak",
    billFromEmail: "sarthak@gmail.com",
    billFromAddress: "Delhi",
    notes: "",
    subTotal: "0.00",
    taxRate: 0,
    taxAmount: "0.00",
    discountRate: 0,
    discountAmount: "0.00",
  });

  const [total, setTotal] = useState(0.0);

  const [items, setItems] = useState([
    {
      id: "0",
      name: "",
      description: "",
      price: 1.0,
      quantity: 1,
    },
  ]);

  const onChange = (event) => {
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const onItemizedItemEdit = (event) => {
    const { id, name, value } = event.target;
  
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, [name]: value };
      }
      return item;
    });
  
    setItems(newItems);
  };
  

  const handleAddEvent = () => {
    const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    const item = {
      id,
      name: "",
      price: 1.0,
      description: "",
      quantity: 1,
    };
    setItems((items) => [...items, item]);
  };

  const handleRowDel = (item) => {
    if (items.length > 1) {
      setItems((items) => items.filter((data) => data.id !== item.id));
    } else {
      setItems([
        {
          id: "0",
          name: "",
          description: "",
          price: 1.0,
          quantity: 1,
        },
      ]);
    }
  };

  const onCurrencyChange = (event) => {
    setState((state) => ({ ...state, currency: event.target.value }));
  };

  return (
    <Form>
      <Row>
        <Col md={8} lg={9}>
          <Card className="d-flex p-4 p-xl-5 my-3 my-xl-4">
            <div className="d-dlex flex-row justify-content-between">
              <div className="d-flex flex-row mb-3">
                <div className="mb-2">
                  <span className="fw-bold">Current&nbsp; Date:&nbsp; </span>
                  <span className="current-date">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="d-flex flex-row mb-3">
                <div className="mb-2">
                  <span className="fw-bold">Invoice&nbsp; Number:&nbsp; </span>
                  <span className="current-date">{state.invoiceNumber}</span>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <Row className="mb-5">
              <Col>
                <Form.Label className="fw-bold">Customer Details:</Form.Label>
                <Form.Control
                  placeholder="Enter Name"
                  value={state.billTo}
                  type="text"
                  name="billTo"
                  className="my-2"
                  onChange={onChange}
                  autoComplete="name"
                  required={true}
                />

                <Form.Control
                  placeholder="Enter Email"
                  value={state.billToEmail}
                  type="email"
                  name="billToEmail"
                  className="my-2"
                  onChange={onChange}
                  autoComplete="email"
                />

                <Form.Control
                  placeholder="Enter Address"
                  value={state.billToAddress}
                  type="text"
                  name="billToAddress"
                  className="my-2"
                  onChange={onChange}
                  autoComplete="address"
                  required={true}
                />
              </Col>

              <Col>
                <Form.Label className="fw-bold">BillFrom:</Form.Label>
                <Form.Control
                  value={state.billFrom}
                  className="my-2"
                  disabled={true}
                />

                <Form.Control
                  value={state.billFromEmail}
                  className="my-2"
                  disabled={true}
                />
                <Form.Control
                  value={state.billFromAddress}
                  className="my-2"
                  disabled={true}
                />
              </Col>
            </Row>
            <InvoiceItem
              items={items}
              onItemizedItemEdit={onItemizedItemEdit}
              onRowAdd={handleAddEvent}
              onRowDel={handleRowDel}
              currency={state.currency}
            />
          </Card>
        </Col>
        <Col md={4} lg={3}>
          <div className="sticky-top pt-md-3 pt-xl-4">
            <Button variant="primary" type="submit" className="d-block w-100">
              Review Invoice
            </Button>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Currency:</Form.Label>
              <Form.Select
                onChange={onCurrencyChange}
                className="btn btn-ligt my-1"
              >
                <option value="₹">INR</option>
                <option value="$">USD</option>
              </Form.Select>
            </Form.Group>
          </div>
        </Col>
      </Row>
    </Form>
  );
}

export default InvoiceForm;
