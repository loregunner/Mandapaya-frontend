/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AvenirMedium,
  AvenirRegular,
  primaryColor,
} from "@/utils/constants.style";
import styled from "styled-components";

export interface ISelectStyle {
  disabled?: boolean;
  register?: string;
  $error: any;
}

export const WrapperSelect = styled.div<ISelectStyle>`
  position: relative;
  width: 100%;
  margin: 1rem 0;
  label {
    display: block;
    font-weight: 600;
    font-size: 0.875rem;
    color: #374151;
    margin-bottom: 0.5rem;
    font-family: ${AvenirMedium};
  }
  select {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: ${(props) =>
      props.$error
        ? `1px solid red`
        : props.disabled
        ? `1px solid #888`
        : `1px solid #888`} !important;
    border-radius: 6px;
    outline: none;
    transition: border-color 0.2s ease;
    box-sizing: border-box;
    &:focus {
      border-color: ${primaryColor};
    }
    &::placeholder {
      color: #888;
      font-family: ${AvenirRegular};
      opacity: 1;
    }
  }

  .error_input {
    color: red;
    font-size: 0.75rem;
    position: absolute;
    bottom: -1.2rem;
    left: 0;
  }
`;
