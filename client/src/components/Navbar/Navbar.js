import React from "react";
import {
  NavWrapper,
  LogoImage,
  LabelUsername,
  RightContent,
  AbsoluteContainer,
  UlList,
  ListItem,
} from "./styles";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { AiFillCaretDown } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
const Navbar = ({ openMenu, setOpenMenu }) => {
  return (
    <NavWrapper>
      <Link to="/">
        <LogoImage Img={logo} />
      </Link>
      <RightContent>
        <LabelUsername onClick={() => setOpenMenu((prev) => !prev)}>
          Hrustic Amirovic, Vandame
        </LabelUsername>
        <AiFillCaretDown
          onClick={() => setOpenMenu((prev) => !prev)}
          size={12}
          style={{ marginLeft: 10, color: "#a31c1c", cursor: "pointer" }}
        />
      </RightContent>
      {openMenu && (
        <AbsoluteContainer>
          <UlList>
            <button
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                width: "100%",
                cursor: "pointer",
              }}
            >
              <ListItem>
                <BiExit size={18} style={{ marginRight: "1rem" }} />
                Tanca la sessió
              </ListItem>
            </button>
          </UlList>
        </AbsoluteContainer>
      )}
    </NavWrapper>
  );
};

export default Navbar;
