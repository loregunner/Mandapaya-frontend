import { AvenirBold } from "@/utils/constants.style";
import styled from "styled-components";

export interface IButtonStyle {
  $colorButton: string;
  $size: string;
}

export const WrapperButton = styled.button<IButtonStyle>`
  width: ${(props) => props.$size};
  height: 37px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${(props) => props.$colorButton};
  font-size: 14px;
  font-family: ${AvenirBold};
  margin: 0 5px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;
