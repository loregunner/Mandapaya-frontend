import { AvenirMedium, AvenirRegular, primaryColor } from "@/utils/constants.style";
import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 1rem 0;
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  font-size: 0.875rem;
  color: #374151;
  margin-bottom: 0.5rem;
  font-family: ${AvenirMedium};
`;

export const InputCustom = styled.input`
  width: 100%;
  padding: 10px 0px 10px 40px;
  font-size: 1rem;
  border: 1px solid #ccc;
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
    opacity: 0.8;
  }
`;

export const Icon = styled.div`
  position: absolute;
  left: 12px;
  top: 74%;
  transform: translateY(-50%);
  color: #888;
  pointer-events: none;
`;

export const TogglePassword = styled.i`
  position: absolute;
  top: 74%;
  right: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: #999;
`;
