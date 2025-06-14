import { AvenirMedium, AvenirRegular } from "@/utils/constants.style";
import styled from "styled-components";

export const WrapperContactForm = styled.div`
  position: relative;
  overflow: hidden;
  width: 250px;
  border-radius: 1rem;
  background-color: white;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  @media (min-width: 768px) {
    width: 500px;
  }
  .gradient-circle-1 {
    position: absolute;
    top: -6rem;
    right: -6rem;
    width: 16rem;
    height: 16rem;
    border-radius: 9999px;
    background: linear-gradient(
      to bottom right,
      rgba(240, 102, 33, 0.1),
      rgba(48, 53, 138, 0.1)
    );
    filter: blur(64px);
  }
  h3 {
    font-family: ${AvenirMedium};
  }
  .gradient-circle-2 {
    position: absolute;
    bottom: -6rem;
    left: -6rem;
    width: 16rem;
    height: 16rem;
    border-radius: 9999px;
    background: linear-gradient(
      to top right,
      rgba(48, 53, 138, 0.1),
      rgba(240, 102, 33, 0.1)
    );
    filter: blur(64px);
  }
  input {
    width: 100%;
    border: 0 solid #e5e7eb !important;
    background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));
    --tw-shadow: 0 1px 2px 0 #0000000d;
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    &:focus {
      border: 1px solid var(--primary) !important;
    }
  }

  .icon_input {
    top: 65% !important;
  }

  .form_initial {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .form_initial > div {
    flex: 1;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    font-family: ${AvenirMedium};
    color: white;
    text-align: center;
    svg {
      margin-left: 0.7rem;
    }
  }
`;

export const TextareaWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Icon = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 0.5rem;
  color: #888;
  pointer-events: none;
`;

export const StyledTextarea = styled.textarea`
  width: 89%;
  padding: 0.8rem 0 0 2rem;
  margin-bottom: 1rem;
  font-family: ${AvenirRegular};
  border: 0 solid #e5e7eb !important;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));
  --tw-shadow: 0 1px 2px 0 #0000000d;
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  &:focus {
    outline: none;
    border: 1px solid var(--primary) !important;
  }

  &::placeholder {
    color: #aaa;
    font-size: 16px;
  }
  @media (min-width: 768px) {
    width: 93%;
  }
`;
