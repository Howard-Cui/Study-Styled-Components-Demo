import React, { useEffect, useState } from "react";
import { PageLayout, Input, PasswordInput, Button, Spinner } from "components/common";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`;

let timeout;

const Login = () => {
  const [formField, setFormField] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    alert(e.target.name, e.target.value)
    setFormField({
      ...formField,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              value={formField.username}
              onChange={handleInputChange}
              type="text"
              name="username"
              placeholder="Username"
            />
            <PasswordInput
              value={formField.password}
              onChange={handleInputChange}
              name="password"
            />
          </>
        )}

        <Button large type="submit" disabled={loading}>
          {loading ? "Loading ..." : "Login"}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button secondary type="button">
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
};

export default Login;
