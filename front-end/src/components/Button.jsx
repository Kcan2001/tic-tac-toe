import styled from "styled-components";
import { Button as AntdButton } from "antd";

const StyledButton = styled(AntdButton)`
  padding: 10px 18px;
  color: white;
  border: none;
  font-family: lato;
  cursor: pointer;
  size: 16px;
  border-radius: 4px;
  background-color: var(--purple);
`;
const Button = ({ text, ...args }) => {
  return <StyledButton {...args}>{text}</StyledButton>;
};

export default Button;
