import styled from "styled-components";
import { MdInbox } from "react-icons/md";
import { GoTag } from "react-icons/go";
import { MdOutlineGroup } from "react-icons/md";
import { PiWarningCircleLight } from "react-icons/pi";
import { useState } from "react";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  width: 100%;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  font-size: 14px;
  color: #5f6368;
  width: 100%;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease;

  ${({ isActive }) =>
    isActive &&
    `
    border-bottom: 3px solid #1a73e8;
    color: #1a73e8;
    font-weight: 500;
  `}

  &:hover {
    color: #1a73e8;
  }
`;

function HomeNav() {
  const [activeTab, setActiveTab] = useState("primary");

  return (
    <NavContainer>
      <NavItem
        isActive={activeTab === "primary"}
        onClick={() => setActiveTab("primary")}
      >
        <MdInbox />
        Primary
      </NavItem>
      <NavItem
        isActive={activeTab === "promotion"}
        onClick={() => setActiveTab("promotion")}
      >
        <GoTag />
        Promotion
      </NavItem>
      <NavItem
        isActive={activeTab === "social"}
        onClick={() => setActiveTab("social")}
      >
        <MdOutlineGroup />
        Social
      </NavItem>
      <NavItem
        isActive={activeTab === "updates"}
        onClick={() => setActiveTab("updates")}
      >
        <PiWarningCircleLight />
        Updates
      </NavItem>
    </NavContainer>
  );
}

export default HomeNav;
