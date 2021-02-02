import { Form, Input, Button } from "antd";
import styled from "styled-components";
import getToken from "./operations/getToken";

const Container = styled.div`
  display: flex;
  padding: 120px;
  border: 40px solid var(--dark);
`;

const SignIn = ({ setHasValidToken }) => {
  const onFinish = async (values) => {
    try {
      const token = await getToken(values);
      if (!token) return;

      sessionStorage.setItem("token", token);
      setHasValidToken(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
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
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default SignIn;
