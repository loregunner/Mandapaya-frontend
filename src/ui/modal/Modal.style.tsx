import { AvenirMedium} from "@/utils/constants.style";
import styled from "styled-components";

export interface IModaltStyle {
  $isActive: boolean;
  sizeModal?: string;
}

export const WrapperModal = styled.div<IModaltStyle>`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-color: #0000008f;
  display: ${(props) => (props.$isActive ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  .container_modal {
    padding: 5px 8px;
    width: 272px;
    height: fit-content;
    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px #00000040;
    background-color: white;
    @media (min-width: 768px) {
      width: 500px;
    }
    @media (min-width: 1280px) {
      width: ${(props) => (props.sizeModal ? "63rem" : "670px")};
    }
    img {
      cursor: pointer;
    }
    .header_modal {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header_title {
        font-size: 14px;
        font-family: ${AvenirMedium};
        margin-left: 15px;
      }
    }
  }
`;

export const Hr = styled.hr`
  width: 98%;
  background-color: #87868a1c;
`;
