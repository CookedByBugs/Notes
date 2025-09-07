import { Col, Form, Input, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User:", state);

  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-bar p-3">
      <div className="rounded-2xl bg-background p-3 max-w-[500px] w-full">
        <div className="">
          <h3 className="text-3xl text-center font-bold text-bar">Register</h3>
        </div>
        <hr className="w-[90%] text-bar my-2 mx-auto" />
        <div className="w-[90%] mx-auto">
          <Form layout="vertical">
            <Row gutter={16}>
              <Col lg={12} md={12} sm={24} xs={24}>
                <Form.Item
                  label={<span className="font-semibold">First Name:</span>}
                >
                  <Input
                    onChange={handleChange}
                    size="middle"
                    name="firstName"
                    placeholder="First Name"
                  />
                </Form.Item>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24}>
                <Form.Item
                  label={<span className="font-semibold">Last Name:</span>}
                >
                  <Input
                    onChange={handleChange}
                    size="middle"
                    name="Last Name"
                    placeholder="Email"
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label={<span className="font-semibold">Email:</span>}
                >
                  <Input
                    onChange={handleChange}
                    size="middle"
                    name="email"
                    placeholder="Email"
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label={<span className="font-semibold">Password:</span>}
                >
                  <Input.Password
                    onChange={handleChange}
                    size="middle"
                    name="password"
                    placeholder="Password"
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label={
                    <span className="font-semibold">Confirm Password:</span>
                  }
                >
                  <Input.Password
                    onChange={handleChange}
                    size="middle"
                    name="confirmPassword"
                    placeholder="Password"
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Link className="mb-3" to="/auth/login">
                  Already have an account?
                </Link>
              </Col>
              <Col span={24}>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="btn-primary w-full text-white font-semibold text-[16px]"
                >
                  Register
                </button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
