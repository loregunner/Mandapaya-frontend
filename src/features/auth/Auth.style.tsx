import { AvenirRegular, primaryColor } from "@/utils/constants.style";
import styled from "styled-components";

interface IAuth {
  $tabs: boolean;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: unset;
  grid-gap: 16px;
  height: 100vh;
  overflow: auto;
  scrollbar-width: none;
  font-family: ${AvenirRegular};
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 24px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 32px;
  }
  .error_page {
    grid-column: 1 / 7;
    margin-top: 70%;
    text-align: center;
    @media (min-width: 768px) {
      grid-column: 1 / 9;
      margin-top: 30%;
    }

    @media (min-width: 1280px) {
      grid-column: 1 / 13;
      margin-top: 15%;
    }
  }
  .form_modal {
    padding: 1rem;
    .container_buttons {
      display: flex;
      justify-content: end;
      span {
        color: white;
      }
    }
  }
`;

export const LeftSection = styled.div`
  display: none;
  @media (min-width: 1280px) {
    grid-column: 1 / 7;
    display: block;
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
`;

export const RightSection = styled.div`
  width: 100%;
  grid-column: 1 / 6;
  margin: 1rem;
  @media (min-width: 768px) {
    grid-column: 2 / 7;
  }
  @media (min-width: 1280px) {
    grid-column: 8 / 12;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;

  img {
    height: 3.5rem;
  }
`;

export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 2rem;
`;

export const TabButton = styled.button<IAuth>`
  flex: 1;
  padding: 1rem;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-family: ${AvenirRegular};
  border-bottom: 2px solid
    ${(props) => (props.$tabs ? primaryColor : "transparent")};
  color: ${(props) => (props.$tabs ? "#003366" : "#6b7280")};
  transition: all 0.2s ease;

  &:hover {
    color: ${(props) => (props.$tabs ? "#003366" : "#374151")};
  }
`;

export const TextToggle = styled.p`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;

  button {
    margin-left: 0.25rem;
    color: ${primaryColor};
    font-weight: 500;
    border: none;
    cursor: pointer;
    font-family: ${AvenirRegular};
    background-color: transparent;
    &:hover {
      color: #ffa07a;
    }
  }
`;
