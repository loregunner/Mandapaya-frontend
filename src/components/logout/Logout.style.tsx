import {
  AvenirBold,
  AvenirMedium,
  AvenirRegular,
  primaryColor,
} from "@/utils/constants.style";
import styled from "styled-components";

export const LogoutWrapper = styled.div`
  .logout {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  .circle_name {
    height: 55px;
    width: 55px;
    background-color: ${primaryColor};
    font-family: ${AvenirRegular};
    font-size: 19px;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  img {
    width: 22px;
    margin-right: 1rem;
  }
  .container_logout {
    width: fit-content;
    height: fit-content;
    cursor: pointer;
    background-color: white;
    position: absolute;
    top: 4.5rem;
    box-shadow: 0px 4px 4px 0px #00000040;
    font-family: ${AvenirBold};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    border-radius: 0.5rem;
    overflow: hidden;
    z-index: 999;
    .logout_section {
      flex: 1;
      width: 100%;
      padding: 0;
      font-family: ${AvenirMedium};
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      p {
        line-height: 0;
      }
      b {
        font-family: ${AvenirBold};
      }
    }
    .logout_header {
      flex: 1;
      width: 100%;
      padding: 0 30px;
      font-family: ${AvenirMedium};
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      p {
        line-height: 0;
      }
      b {
        font-family: ${AvenirBold};
      }
    }
  }
`;
