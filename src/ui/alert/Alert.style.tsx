import { AvenirMedium, primaryColor } from "@/utils/constants.style";
import styled from "styled-components";

export interface IAlertStyle {
  $isActive: boolean;
  $type: string;
}

export const WrapperAlert = styled.div<IAlertStyle>`
  display: ${(props) => (props.$isActive ? "flex" : "none")};
  align-items: center;
  max-width: 200px;
  margin-right: 0 auto;
  background-color: ${(props) =>
    props.$type === "error" ? "red" : primaryColor};
  right: 0%;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 999;
  bottom: 93%;
  transition: visibility 0s linear 0s, opacity 300ms;
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  span {
    font-size: 1rem;
    font-family: ${AvenirMedium};
  }
  @media (min-width: 768px) {
    bottom: 93%;
  }
  @media (min-width: 1280px) {
    bottom: 93%;
    min-width: 250px;
  }
`;
