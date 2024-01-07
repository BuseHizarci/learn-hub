import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const PasswordInput = (props) => {
  const [type, setType] = React.useState("password");
  const handleClick = () => {
    setType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          type={type}
          placeholder="Password"
          aria-label="Password"
          aria-describedby="password"
          {...props}
        />
        <InputGroup.Text id="password" onClick={handleClick}>
          {type === "password" ? <AiFillEye /> : <AiFillEyeInvisible />}
        </InputGroup.Text>
        <Form.Control.Feedback type="invalid">
          {props.error}
        </Form.Control.Feedback>

      </InputGroup>
    </>
  );
};

export default PasswordInput;
