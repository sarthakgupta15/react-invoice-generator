import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

function InvoiceForm() {
  const [state, setState] = useState({
    isOpen: false,
    currency: "₹",
    currentDate: "",
    invoiceNumber: 1,
    billTo: "",
    billToAddress: "",
    billToEmail: "",
    billFrom: "",
    billFromEmail: "",
    billFromAddress: "",
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
      id: 0,
      name: "",
      description: "",
      price: 1.0,
      quantity: 1,
    },
  ]);
  return (
    <Form>
      <Row>
        <Col md={8} lg={9}>
          <Card className="p-4 p-xl-5 my-3 my-xl-4">
            <div className="d-flex flex-row align-items-start justify-content-between mb-3">
              <div className="mb-2">
                <span className="fw-bold">Current&nbsp; Date:&nbsp </span>
                <span className="current-date">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Form>
  );
}

export default InvoiceForm;
