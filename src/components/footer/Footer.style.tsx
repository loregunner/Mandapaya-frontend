import { AvenirMedium } from "@/utils/constants.style";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #f06621;
  color: white;
  padding: 2.5rem 0;
  font-family: ${AvenirMedium};
  font-size: 1.3rem;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LogoWrapper = styled.div`
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  img {
    filter: brightness(2000%);
    height: auto;
  }
`;

export const TextWrapper = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: right;
  }

  p {
    margin-bottom: 0.5rem;
  }

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  .links {
    display: flex;
    gap: 1rem;
    justify-content: center;

    @media (min-width: 768px) {
      justify-content: flex-end;
    }

    margin-top: 1rem;
  }
`;
