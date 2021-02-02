import styled from "styled-components";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const SpinnerBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grey);
  opacity: 0.7;
`;

const antIcon = (
  <LoadingOutlined style={{ fontSize: 128, color: "var(--dark)" }} spin />
);

const Spinner = () => {
  return (
    <SpinnerBackground>
      <Spin indicator={antIcon} />
    </SpinnerBackground>
  );
};

export default Spinner;
