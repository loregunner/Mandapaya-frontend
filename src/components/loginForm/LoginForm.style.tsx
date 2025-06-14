import { AvenirBold, AvenirMedium } from "@/utils/constants.style";
import styled from "styled-components";

export const LoginFormWrapper = styled.div`
  width: 100%;
  .title {
    font-size: 1.875rem;
    font-weight: bold;
    margin-bottom: 1rem;
    font-size: ${AvenirBold};
  }
  .subtitle {
    color: #4b5563;
    margin-bottom: 2rem;
  }
  .forget_password {
    float: inline-end;
    cursor: pointer;
  }
  .name_user {
    display: grid;
    grid-template-columns: 1fr;
    align-items: baseline;
    gap: 1rem;
    @media (min-width: 1280px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  button {
    margin-top: 1rem;
    span {
      color: white;
      font-family: ${AvenirMedium};
    }
  }
`;
