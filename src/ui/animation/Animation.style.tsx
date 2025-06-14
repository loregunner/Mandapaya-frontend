"use-client";

import styled from "styled-components";

interface IAnimation {
  show?: boolean;
}

export const ContainerAnimation = styled.section<IAnimation>`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
