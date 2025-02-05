import React, { useState } from "react";
import { IoMdAttach, IoMdLink, IoIosClose } from "react-icons/io";
import { GrEmoji } from "react-icons/gr";
import { RiDriveLine } from "react-icons/ri";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { ImPencil } from "react-icons/im";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  ComposeMailWrapper,
  ComposeForm,
  InputGroup,
  InputField,
  Footer,
  SendButton,
  IconWrapper,
  Icon,
  MailContent,
  TitleStyled,
  CloseIcon,
} from "./ComposeMailStyles";
import { useSelector, useDispatch } from "react-redux";
import { toggleComposeMail } from "../Store/Features/toggleSlice";

function ComposeMail() {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const isToggleComposeMail = useSelector(
    (state) => state.toggle.isToggleComposeMail
  );

  const handleComposeMailToggle = () => {
    console.log("You toggle compose mail");
    dispatch(toggleComposeMail());
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    isToggleComposeMail && (
      <ComposeMailWrapper>
        <TitleStyled>
          <p>New Message</p>

          <CloseIcon onClick={handleComposeMailToggle}>
            <IoIosClose size={20} />
          </CloseIcon>
        </TitleStyled>

        <ComposeForm>
          <InputGroup>
            <label htmlFor="to">To:</label>
            <InputField id="to" type="email" placeholder="Recipient's email" />
          </InputGroup>

          <InputGroup>
            <InputField id="subject" type="text" placeholder="Subject" />
          </InputGroup>

          <MailContent
            value={message}
            onChange={handleMessageChange}
            placeholder="Write your message..."
          />

          <Footer>
            <SendButton>Send</SendButton>
            <IconWrapper>
              <Icon as={IoMdAttach} title="Attach File" />
              <Icon as={IoMdLink} title="Insert Link" />
              <Icon as={GrEmoji} title="Insert Emoji" />
              <Icon as={RiDriveLine} title="Insert Drive" />
              <Icon as={MdOutlineInsertPhoto} title="Insert Photo" />
              <Icon as={CiLock} title="Lock" />
              <Icon as={ImPencil} title="Edit" />
              <Icon as={BsThreeDotsVertical} title="More Options" />
            </IconWrapper>
          </Footer>
        </ComposeForm>
      </ComposeMailWrapper>
    )
  );
}

export default ComposeMail;
