import React from "react";
import styled from "styled-components";
import { RiInboxArchiveLine, RiSpam2Line } from "react-icons/ri";
import { IoTrashOutline } from "react-icons/io5";
import { IoMailUnreadOutline } from "react-icons/io5";

import {
  SelectionOptionContainer,
  Icon,
  OptionListContainer,
  OptionList,
  ListItem,
  AdvancedToolbar,
} from "./SelectedMessageOptionStyled";

export function SelectedMessageOption() {
  return (
    <SelectionOptionContainer>
      <Icon as={RiInboxArchiveLine} />
      <Icon as={RiSpam2Line} />
      <Icon as={IoTrashOutline} />
    </SelectionOptionContainer>
  );
}

export function SelectedMessageOptionList() {
  return (
    <OptionListContainer>
      <OptionList>
        <ListItem>
          <IoMailUnreadOutline />
          Mark as unread
        </ListItem>
        <ListItem>Snooze</ListItem>
        <ListItem>Add star</ListItem>
        <ListItem>Mark as important</ListItem>
        <ListItem>Mark as not important</ListItem>
        <ListItem>Forward as attachment</ListItem>
        <ListItem>Filter messages like these</ListItem>
        <ListItem>Mute</ListItem>
      </OptionList>
      <AdvancedToolbar>Switch to advanced toolbar</AdvancedToolbar>
    </OptionListContainer>
  );
}
