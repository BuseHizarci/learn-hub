import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { Col, Form, Row } from "react-bootstrap";
import { Button, Spinner } from "react-bootstrap";
import { BiSend, BiTag } from "react-icons/bi";
import * as Yup from "yup";
import { useFormik } from "formik";
import { createMessage } from "../../api/contact-service";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .required("Please enter a valid email address")
      .email("Please enter a valid email address"),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    setLoading(true);

    try {
      await createMessage(values);
      formik.resetForm();
      alert("Your message has been sent", "success");
    } catch (err) {
      const errMsg = Object.values(err.response.data.validations)[0];
      alert(errMsg, "error");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <h2> Send a Message !</h2>
      <Row>
        <Col md={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="name">
              <AiOutlineUser />
            </InputGroup.Text>
            <Form.Control
              placeholder="Name"
              aria-label="Name"
              aria-describedby="name"
              {...formik.getFieldProps("name")}
              isInvalid={formik.touched.name && formik.errors.name}
              //true ise false false ise tru yapar (!) tersini almak istemiyorum tersinin tersi kendisi (!!) -> mantiksal ifadeye cevrilmeme ihtimaline karsi iki unlem kullaniyorum.
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.name}
            </Form.Control.Feedback>
          </InputGroup>
        </Col>
        <Col md={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="e-mail">
              <AiOutlineMail />
            </InputGroup.Text>
            <Form.Control
              placeholder="E-mail"
              aria-label="E-mail"
              aria-describedby="E-mail"
              {...formik.getFieldProps("email")}
              isInvalid={formik.touched.name && formik.errors.name}
              //true ise false false ise tru yapar (!) tersini almak istemiyorum tersinin tersi kendisi (!!) -> mantiksal ifadeye cevrilmeme ihtimaline karsi iki unlem kullaniyorum.
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.name}
            </Form.Control.Feedback>
          </InputGroup>
        </Col>
        <Col md={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="Subject">
              <BiTag />
            </InputGroup.Text>
            <Form.Control
              placeholder="Subject"
              aria-label="Subject"
              aria-describedby="Subject"
              {...formik.getFieldProps("subject")}
              isInvalid={formik.touched.name && formik.errors.name}
              //true ise false false ise tru yapar (!) tersini almak istemiyorum tersinin tersi kendisi (!!) -> mantiksal ifadeye cevrilmeme ihtimaline karsi iki unlem kullaniyorum.
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.name}
            </Form.Control.Feedback>
          </InputGroup>
        </Col>
      </Row>
      <Button type="submit" disabled={formik.dirty && formik.isValid}>
        {loading && <Spinner />}
        Send <BiSend />
      </Button>
    </Form>
  );
};

export default ContactForm;
