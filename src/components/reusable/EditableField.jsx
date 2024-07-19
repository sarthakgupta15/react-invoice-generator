import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

function EditableField(props) {
  return (
    <InputGroup className="my-1 flex-nowrap">
      {props.cellData.leading && (
        <InputGroupText className="bg-light fw-bold border-0 text-secondary px-2">
          <span
            className="border border-2 border-secondary rounded-circle d-flex align-items-center justify-content-center small"
            style={{ width: "20px" }}
          >
            {props.cellData.leading}
          </span>
        </InputGroupText>
      )}
      <Form.Control
        className={props.cellData.textAlign}
        type={props.cellData.type}
        placeholder={props.cellData.placeholder}
        min={props.cellData.min}
        max={props.cellData.max}
        name={props.cellData.name}
        value={props.cellData.value}
        step={props.cellData.step}
        id={props.cellData.id}
        onChange={props.onItemizedItemEdit}
        required
      />
    </InputGroup>
  );
}

export default EditableField;
