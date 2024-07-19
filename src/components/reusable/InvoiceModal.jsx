import React from "react";
import { Table, Row, Col, Modal } from "react-bootstrap";

function InvoiceModal(props) {
  return (
    <Modal show={props.showModal} onHide={props.closeModal} size="lg" centered>
      <div id="invoicecapture">
        <div className="d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4">
          <h4 className="fw-bold my-2">{props.info.billFrom}</h4>
          <h6 className="fw-bold text-secondary mb-1">
            Invoice #: {props.info.invoiceNumber}
          </h6>
        </div>
        <div className="text-end ms-4">
          <h6 className="fw-bold mt-1 mb-2">Amount&nbsp; Due:</h6>
          <h5 className="fw-bold text-secondary">
            {props.info.currency} {props.total}
          </h5>
        </div>
        <div className="p-4">
          <Row className="mb-4">
            <Col md={4}>
              <div className="fw-bold">Billed To:</div>
              <div>{props.info.billTo || ""}</div>
              <div>{props.info.billToAddress || ""}</div>
              <div>{props.info.billToEmail || ""}</div>
            </Col>

            <Col md={4}>
              <div className="fw-bold">Billed From:</div>
              <div>{props.info.billFrom || ""}</div>
              <div>{props.info.billFromAddress || ""}</div>
              <div>{props.info.billFromEmail || ""}</div>
            </Col>

            <Col md={4}>
              <div className="fw-bold">Date of Issue:</div>
              <div>{new Date().toLocaleDateString()}</div>
            </Col>
          </Row>
          <Table className="mb-0">
            <thead>
              <tr>
                <th>QTY</th>
                <th>DESCRIPTION</th>
                <th className="text-end">PRICE</th>
                <th className="text-end">AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {props.items.map((item, i) => {
                return (
                  <tr id={i} key={i}>
                    <td style={{ width: "70px" }}>{item.quantity}</td>
                    <td>
                      {item.name} - {item.description}
                    </td>
                    <td className="text-end" style={{ width: "100px" }}>
                      {props.currency} {item.price}
                    </td>
                    <td className="text-end" style={{ width: "100px" }}>
                      {props.currency} {item.price * item.quantity}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Table>
            <tbody>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>

              <tr className="text-end">
                <td></td>
                <td className="fw-bold" style={{ width: "100px" }}>
                  SUBTOTAL
                </td>
                <td className="fw-bold" style={{ width: "100px" }}>
                  {props.info.currency} {props.info.subTotal}
                </td>
              </tr>

              <tr className="text-end">
                <td></td>
                <td className="fw-bold" style={{ width: "100px" }}>
                  TAX
                </td>
                <td className="fw-bold" style={{ width: "100px" }}>
                  {props.info.currency} {props.info.taxAmount}
                </td>
              </tr>

              {props.discountAmount !== 0.0 && (
                <tr className="text-end">
                  <td></td>
                  <td className="fw-bold" style={{ width: "100px" }}>
                    DISCOUNT
                  </td>
                  <td className="fw-bold" style={{ width: "100px" }}>
                    {props.info.currency} {props.info.discountAmount}
                  </td>
                </tr>
              )}
              <tr className="text-end">
                <td></td>
                <td className="fw-bold" style={{ width: "100px" }}>
                  TOTAL
                </td>
                <td className="fw-bold" style={{ width: "100px" }}>
                  {props.info.currency} {props.total}
                </td>
              </tr>
            </tbody>
          </Table>
          {props.info.notes && (
            <div className="bg-light py-3 px-4 rounded">{props.info.notes}</div>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default InvoiceModal;
