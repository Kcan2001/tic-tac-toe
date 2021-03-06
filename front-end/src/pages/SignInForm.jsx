import { useState } from "react";
import { Form, Input } from "antd";
import styled from "styled-components";
import getToken from "../operations/getToken";
import Spinner from "../components/Spinner";
import Button from "../components/Button";

const Container = styled.div`
  display: flex;
  width: 40%;
  height: 60%;
  position: relative;
  align-items: center;
  justify-content: center;
  border: 40px solid var(--dark);
`;

const HeaderStyle = styled.h1`
  font-family: lato;
  color: var(--dark);
  font-size: 24px;
  margin: 0 0 32px;
`;

const ButtonContainer = styled(Form.Item)`
  display: flex;
  justify-content: center;
  margin-top: 36px;
`;

const InputStyle = styled(Form.Item)`
  .ant-form-item-label {
    font-family: lato;
    color: var(--dark);
    margin: 0 0 4px;
  }

  .ant-form-item-explain-error {
    color: #cc0000;
  }

  input {
    padding: 6px 0;
    border-radius: 2px;
    border: 1px solid var(--grey);
    font-family: lato;
    width: 100%;
  }
`;

const SignIn = ({ setHasValidToken }) => {
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setIsLoading(true);
      const token = await getToken(values);
      if (!token) return;

      setIsLoading(false);
      sessionStorage.setItem("token", token);
      setHasValidToken(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      {isLoading ? <Spinner /> : null}
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <HeaderStyle>Please enter your email:</HeaderStyle>
        <InputStyle
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </InputStyle>

        <ButtonContainer>
          <Button type="primary" htmlType="submit" text="Submit" />
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default SignIn;
