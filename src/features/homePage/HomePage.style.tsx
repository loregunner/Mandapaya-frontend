import {
  AvenirBold,
  AvenirMedium,
  AvenirRegular,
  primaryColor,
} from "@/utils/constants.style";
import styled from "styled-components";

export const HomepageWrapper = styled.section``;

export const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  overflow: hidden;
  .cover {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .container_cover {
    height: 100%;
    width: 100%;
    @media (min-width: 1280px) {
      width: 60%;
      margin-top: -14rem;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .button_gift {
    button {
      width: 100%;
      border-radius: 20px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      font-family: ${AvenirMedium};
      color: white;
      .icon {
        margin: 0 0 0 12px;
      }
      @media (min-width: 1280px) {
        font-size: 21px;
        width: 75%;
      }
    }
  }
`;

export const Content = styled.div`
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 1rem 1.5rem 1rem;
  background: rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  .MandapayaLogo {
    width: 325px;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    padding: 5rem 10rem 1.5rem 10rem;
    .MandapayaLogo {
      width: 400px;
    }
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 2rem;
`;

export const ContainerRight = styled.div`
  .logout {
    margin: -2rem -3rem 0 0;
    float: inline-end;
  }
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  font-family: ${AvenirBold};
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: white;
  margin-bottom: 1.5rem;
  font-family: ${AvenirMedium};
`;

export const CountrySelector = styled.div`
  margin-top: 2rem;
  .subtitle_buttons {
    font-family: ${AvenirMedium};
    font-size: 18px;
    color: white;
  }
  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`;

export const CountryButton = styled.button<{ $isSelected: boolean }>`
  width: 140px;
  padding: 0.8em 1.5em;
  border-radius: 21px;
  background: ${({ $isSelected }) => ($isSelected ? primaryColor : "#fff")};
  color: ${({ $isSelected }) => ($isSelected ? "white" : primaryColor)};
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-family: ${AvenirBold};
`;

export const ImageInner = styled.div<{ $isChanging: boolean }>`
  transition: opacity 0.5s ease-in-out;
  opacity: 1;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    padding: 0;
  }
  @media (min-width: 1280px) {
    width: 500px;
    margin-top: 0rem;
  }
`;

export const FeatureSection = styled.section`
  padding: 5rem 1rem;
  background-color: white;
  max-width: 1200px;
  margin: 0 auto;
  .title_subsection {
    font-size: 1.875rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 4rem;
    font-family: ${AvenirMedium};
    @media (min-width: 768px) {
      font-size: 2.25rem;
    }
  }
  .container_cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 1280px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export const FeatureCard = styled.div`
  padding: 1px;
  border-radius: 1rem;
  background: linear-gradient(to bottom right, #f06621, #30358a);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .card-inner {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.3s ease;
  }

  .icon-wrapper {
    background: linear-gradient(to bottom right, #f06621, #30358a);
    padding: 1rem;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9999px;
    color: white;
  }

  .icon-wrapper:hover {
    transform: rotate(12deg);
  }

  .icon {
    width: 2rem;
    height: 2rem;
    transition: all 0.3s ease;
  }

  .icon:hover {
    transform: scale(1.1);
  }

  .card-title {
    font-size: 1.35rem;
    font-weight: bold;
    margin-bottom: 0.2rem;
    font-family: ${AvenirMedium};
  }

  .card-text {
    color: #4b5563;
    font-size: 1.15rem;
    margin-bottom: 0rem;
    font-family: ${AvenirRegular};
  }

  .custom-link {
    margin-top: 1rem;
    color: #f06621;
    font-weight: 500;
    text-decoration: none;
    font-family: ${AvenirMedium};
    transition: text-decoration 0.2s ease;
  }

  .custom-link:hover {
    text-decoration: underline;
  }
`;

export const ContactSection = styled.section`
  padding: 5rem 1rem;
  background-color: #f9fafb;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-family: ${AvenirMedium};
    font-size: 44px;
  }
`;
