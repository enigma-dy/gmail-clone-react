import React from "react";
import { ImPencil } from "react-icons/im";
import {
  MdInbox,
  MdLabelImportantOutline,
  MdOutlineScheduleSend,
  MdOutlineMailOutline,
  MdOutlineGroup,
  MdOutlineForum,
  MdOutlineSettings,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { ImStarEmpty } from "react-icons/im";
import { CiClock1 } from "react-icons/ci";
import { AiOutlineSend } from "react-icons/ai";
import { RiSpamLine } from "react-icons/ri";
import { LiaFile } from "react-icons/lia";
import { FaPlus } from "react-icons/fa6";
import { GoTag } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";

import {
  ComposeIcon,
  Icon,
  SidebarContainer,
  SectionDivider,
  CollapseSidebarContainer,
} from "./SidebarStlyed.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleCollapseMenu,
  toggleMore,
  toggleComposeMail,
} from "../Store/Features/toggleSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const isToggleMore = useSelector((state) => state.toggle.isToggleMore);
  const isCollapseMenu = useSelector((state) => state.toggle.isCollapseMenu);
  const isToggleComposeMail = useSelector(
    (state) => state.toggle.isCollapseMenu
  );

  const handleToggleMore = () => {
    dispatch(toggleMore());
  };

  const handleHoverMenu = () => {
    console.log("Mouse entered the sidebar");
    dispatch(toggleCollapseMenu());
  };

  const handleLeaveMenu = () => {
    console.log("Mouse Leave the sidebar");
    dispatch(toggleCollapseMenu());
  };

  const handleComposeMailToggle = () => {
    console.log("You toggle compose mail");
    dispatch(toggleComposeMail());
  };

  if (!isCollapseMenu) {
    return (
      <CollapseSidebarContainer
        onMouseEnter={handleHoverMenu}
        onMouseLeave={handleLeaveMenu}
      >
        <ImPencil onClick={handleComposeMailToggle} />
        <MdInbox />
        <ImStarEmpty />
        <CiClock1 />
        <AiOutlineSend />
        <LiaFile />
      </CollapseSidebarContainer>
    );
  }

  return (
    <SidebarContainer>
      <ComposeIcon onClick={handleComposeMailToggle}>
        <ImPencil />
        <span>Compose</span>
      </ComposeIcon>
      <Icon>
        <MdInbox />
        <span>Inbox</span>
      </Icon>
      <Icon>
        <ImStarEmpty />
        <span>Starred</span>
      </Icon>
      <Icon>
        <CiClock1 />
        <span>Snoozed</span>
      </Icon>
      <Icon>
        <AiOutlineSend />
        <span>Sent</span>
      </Icon>
      <Icon>
        <LiaFile />
        <span>Draft</span>
      </Icon>
      <Icon onClick={handleToggleMore}>
        {isToggleMore ? (
          <>
            <MdOutlineKeyboardArrowUp />
            <span>More</span>
          </>
        ) : (
          <>
            <MdOutlineKeyboardArrowDown />
            <span>More</span>
          </>
        )}
      </Icon>
      {isToggleMore && (
        <>
          <Icon>
            <MdLabelImportantOutline />
            <span>Important</span>
          </Icon>
          <Icon>
            <MdOutlineScheduleSend />
            <span>Scheduled</span>
          </Icon>
          <Icon>
            <MdOutlineMailOutline />
            <span>All Mail</span>
          </Icon>
          <Icon>
            <RiSpamLine />
            <span>Spam</span>
          </Icon>
          <Icon>
            <IoTrashOutline />
            <span>Trash</span>
          </Icon>
          <SectionDivider />
          <Icon>
            <MdOutlineGroup />
            <span>Social</span>
          </Icon>
          <Icon>
            <RiSpamLine />
            <span>Updates</span>
          </Icon>
          <Icon>
            <MdOutlineForum />
            <span>Forums</span>
          </Icon>
          <Icon>
            <GoTag />
            <span>Promotion</span>
          </Icon>
          <Icon>
            <MdOutlineSettings />
            <span>Manage Label</span>
          </Icon>
          <Icon>
            <FaPlus />
            <span>Create new label</span>
          </Icon>
        </>
      )}
    </SidebarContainer>
  );
}

export default Sidebar;
