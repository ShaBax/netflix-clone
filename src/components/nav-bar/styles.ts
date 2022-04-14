import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import NetflixLogo from "../../icons/netflix-logo.svg";

interface IHeader {
  isBackgroundVisible?: boolean;
}
export const Nav = styled.nav<IHeader>`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  height: 30px;
  padding: 15px 25px;
  transition: all 0.5s ease-in;
  background-color: ${(props) => props?.isBackgroundVisible && "#020101"};
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
  height: 25px;
  width: 92px;
  background: url(${NetflixLogo}) no-repeat;
  background-size: contain;
`;

export const NavAvatar = styled.img`
  cursor: pointer;
  width: 30px;
  border-radius: 2px;
`;
