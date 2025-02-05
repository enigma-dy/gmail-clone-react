import React from "react";
import { Outlet } from "react-router";
import {
  Logo,
  NavBar,
  SearchInput,
  Action,
  StyledMailIcon,
  Fab,
  Icon,
} from "./NavbarStyled.jsx";

import { Pen } from "lucide-react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoSettingsOutline, IoApps } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { toggleCollapseMenu } from "../Store/Features/toggleSlice.jsx";
import { useMediaQuery } from "react-responsive";
import MailIcon from "../assets/icon/MailIcon.jsx";
import { toggleMobileNav } from "../Store/Features/toggleSlice.jsx";
import { toggleMobileComposeMail } from "../Store/Features/toggleSlice.jsx";

function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const dispatch = useDispatch();
  const isCollapseMenu = useSelector((state) => state.toggle.isCollapseMenu);
  const handleCollapseMenu = () => {
    console.log(isCollapseMenu);
    dispatch(toggleCollapseMenu());
    dispatch(toggleMobileNav());
  };

  return (
    <NavBar>
      <Logo>
        <RxHamburgerMenu size={25} onClick={handleCollapseMenu} />
        <StyledMailIcon>
          <MailIcon />
        </StyledMailIcon>
        <span className="gmail-text">Gmail</span>
      </Logo>
      {isMobile && (
        <Fab onClick={() => dispatch(toggleMobileComposeMail())}>
          <Icon />
        </Fab>
      )}

      {!isMobile && (
        <>
          <SearchInput type="search" placeholder="Search mail" />
          <Action>
            <MdOutlineContactSupport />
            <IoSettingsOutline />
            <IoApps />
          </Action>
        </>
      )}
    </NavBar>
  );
}

export default Navbar;
