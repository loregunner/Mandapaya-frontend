import { AvenirMedium, AvenirRegular } from "@/utils/constants.style";
import styled from "styled-components";

interface InputCustomProps {
  $error?: boolean;
  disabled?: boolean;
}

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  .error_input {
    color: red;
    font-size: 0.75rem;
    position: absolute;
    bottom: -1.2rem;
    left: 0;
  }
  .icon_input {
    position: absolute;
    left: 12px;
    top: 74%;
    transform: translateY(-50%);
    color: #888;
    pointer-events: none;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  font-size: 0.875rem;
  color: #374151;
  margin-bottom: 0.5rem;
  font-family: ${AvenirMedium};
`;

interface InputCustomProps {
  error?: boolean;
  disabled?: boolean;
}

export const InputCustom = styled.input<InputCustomProps>`
  width: 100%;
  padding: 10px 0px 10px 40px;
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
    border-color: #888;
  }

  &::placeholder {
    color: #888;
    font-family: ${AvenirRegular};
    opacity: 0.8;
  }
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
