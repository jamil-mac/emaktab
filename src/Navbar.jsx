import { NavLink, Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../public/logog.png";
import icon from "../public/seticon.png";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 38px;
  height: 87px;
  background: #007bff;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  img {
    height: 100%;
  }
  @media (max-width: 768px) {
    img {
      height: 65%;
    }
  }
`;

const Toggle = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

/* MOBILE AVATAR */
const Avatar = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #7b61ff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  font-size: 18px;
`;

/* POPUP MENU */
const Dropdown = styled.div`
  position: absolute;
  top: 80px;
  right: 20px;
  width: 210px;
  background-color: ${(p) => p.theme.statCard};
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  display: ${(p) => (p.open ? "block" : "none")};
  z-index: 999;
`;
const DropDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
`;

function Navbar({ dark, setDark }) {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav>
        <Left>
          <img src={logo} alt="logo" />
        </Left>
        <Right>
          {/* MOBILE AVATAR BUTTON */}
          {!isLoginPage && (
            <Avatar style={{ marginLeft: 40 }} onClick={() => setOpen(!open)}>
              A
            </Avatar>
          )}

          <Toggle src={icon} onClick={() => setDark(!dark)} />
        </Right>
      </Nav>

      {/* MOBILE POPUP DROPDOWN MENU */}
      <Dropdown open={open}>
        <DropDiv>
          <Avatar style={{ width: 35, height: 35, fontSize: 16 }}>A</Avatar>
          <span style={{ fontWeight: "600", fontSize: "18px" }}>Admin</span>
          <Link to="/">
            <BiLogOut fontSize={30} style={{ transform: "rotate(-180deg)" }} />
          </Link>
        </DropDiv>
      </Dropdown>
    </>
  );
}

export default Navbar;
