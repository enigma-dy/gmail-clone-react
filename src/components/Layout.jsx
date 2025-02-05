import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SidePanel from "./SidePanel";
import { useSelector } from "react-redux";
import { LayoutStyle, AppStyle } from "./LayoutStyled";
import Home from "../pages/Main/Home";
import ComposeMail from "./ComposeMail";
import { toggleComposeMail } from "../Store/Features/toggleSlice";
import { useMediaQuery } from "react-responsive";
import MobileNav from "./mobileNav";
import MobileComposeMail from "./MobileComposeMail";

function Layout() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isToggleMobileNav = useSelector(
    (state) => state.toggle.isToggleMobileNav
  );

  const isToggleComposeMail = useSelector(
    (state) => state.toggle.isCollapseMenu
  );

  const handleComposeMailToggle = () => {
    console.log("You toggle compose mail");
    dispatch(toggleComposeMail());
  };

  return (
    <>
      <AppStyle>
        <Navbar />
        <MobileComposeMail />

        {isMobile && isToggleMobileNav && <MobileNav />}

        <LayoutStyle>
          {!isMobile && <Sidebar />}
          <Home />
          {!isMobile && <SidePanel />}
        </LayoutStyle>
        {isToggleComposeMail && <ComposeMail />}
      </AppStyle>
    </>
  );
}

export default Layout;
