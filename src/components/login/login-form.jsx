import React from "react";
import * as Yup from "yup";
import { Card, Container, Form, Row, Col, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { useState } from "react";
import ButtonSpinner from "../common/button-spinner";
import PasswordInput from "../common/password-input";
//Formik formu handle eden kisim , bosu bosuna backendi mesgul etmeyelim , backend bunu kontrol edecek
//Baslangic degerleri form elemanlariyla iliskili olmak zorunda
const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const initalValues = {
    username: "roo",
    password: "123456Aa",
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("Please enter your username"),
    password: Yup.string().required("Please enter your password"),
  });
  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const user = await login(values);
      const { token } = user;
      localStorage.setItem("token", token);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const formik = useFormik({
    initialValues: initalValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={7}>
            <Card className="shadow border-0  p-3 border-top border-5 border-secondary">
              <Card.Body>
                <div className="mb-4 text-center font-weight-bold fst-italic">
                  Please enter your username and password!{" "}
                </div>
                <Form noValidate onSubmit={formik.handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="User name"
                      {...formik.getFieldProps("username")}
                      isInvalid={
                        formik.touched.username && formik.errors.username
                      }
                    />
                    <Form.Control.Feedback type="invalid" className="d-block">
                      {formik.errors.username}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <PasswordInput
                      {...formik.getFieldProps("password")}
                      isInvalid={
                        formik.touched.password && formik.errors.password
                      }
                      error={formik.errors.password}
                    />
                  </Form.Group>
                  <Button
                    className="w-100"
                    variant="primary"
                    type="submit"
                    disabled={!(formik.dirty && formik.isValid) || loading}
                  >
                    {loading && <ButtonSpinner animation="border" />}Login
                  </Button>
                </Form>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginForm;
