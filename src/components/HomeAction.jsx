import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoReloadOutline } from "react-icons/io5";
import { RxDotsVertical } from "react-icons/rx";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CheckBoxAction from "./CheckboxAction";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleCheckBoxOption,
  toggleSelecedMessageOption,
  toggleQuickSelectedMessageOption,
} from "../Store/Features/toggleSlice";

import {
  SelectedMessageOptionList,
  SelectedMessageOption,
} from "./SelectectedMessageOption";
import {
  ActionContainer,
  ActionRow,
  SelectContainer,
  Icon,
  PaginationRow,
  Check,
} from "./HomeActionStyled";

const HomeAction = () => {
  const dispatch = useDispatch();

  const { istoggleCheckBoxOption, isSelectedMessageOption, isQuickOption } =
    useSelector((state) => state.toggle);

  const handleToggle = (action) => dispatch(action());

  return (
    <ActionContainer>
      <ActionRow>
        <SelectContainer>
          <input
            type="checkbox"
            name="select"
            id="select"
            onChange={() => handleToggle(toggleQuickSelectedMessageOption)}
          />
          <Icon>
            <IoMdArrowDropdown
              onClick={() => handleToggle(toggleCheckBoxOption)}
            />
          </Icon>
          {istoggleCheckBoxOption && (
            <Check>
              <CheckBoxAction />
            </Check>
          )}
        </SelectContainer>

        <Icon>
          {isQuickOption ? <SelectedMessageOption /> : <IoReloadOutline />}
        </Icon>

        <Icon>
          <RxDotsVertical
            onClick={() => handleToggle(toggleSelecedMessageOption)}
          />
          {isSelectedMessageOption && <SelectedMessageOptionList />}
        </Icon>
      </ActionRow>

      <PaginationRow>
        <Icon>
          <MdKeyboardArrowLeft />
        </Icon>
        <Icon>
          <MdKeyboardArrowRight />
        </Icon>
      </PaginationRow>
    </ActionContainer>
  );
};

export default HomeAction;
