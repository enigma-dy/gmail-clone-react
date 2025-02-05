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
  FooterGroup,
  MailContent,
  TitleStyled,
  CloseIcon,
} from "./MobileComposeMailStyle";
import { useSelector, useDispatch } from "react-redux";
import { toggleMobileComposeMail } from "../Store/Features/toggleSlice";

function MobileComposeMail() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const isToggleMobileComposeMail = useSelector(
    (state) => state.toggle.isToggleMobileComposeMail
  );

  const handleComposeMailToggle = () => {
    dispatch(toggleMobileComposeMail());
  };

  return (
    isToggleMobileComposeMail && (
      <ComposeMailWrapper>
        <TitleStyled>
          <p>Compose</p>
          <CloseIcon onClick={handleComposeMailToggle}>
            <IoIosClose size={24} />
          </CloseIcon>
        </TitleStyled>

        <ComposeForm>
          <InputGroup>
            <label htmlFor="to">To</label>
            <InputField id="to" type="email" placeholder="Recipient" />
          </InputGroup>

          <InputGroup>
            <InputField id="subject" type="text" placeholder="Subject" />
          </InputGroup>

          <MailContent
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
          />
          <FooterGroup>
            <Footer>
              <SendButton>Send</SendButton>
              <IconWrapper>
                <Icon as={IoMdAttach} title="Attach File" />
                <Icon as={IoMdLink} title="Insert Link" />
                <Icon as={GrEmoji} title="Insert Emoji" />
                <Icon as={RiDriveLine} title="Insert Drive" />
                <Icon as={MdOutlineInsertPhoto} title="Insert Photo" />
                <Icon as={CiLock} title="Confidential Mode" />
                <Icon as={ImPencil} title="Edit" />
                <Icon as={BsThreeDotsVertical} title="More Options" />
              </IconWrapper>
            </Footer>
          </FooterGroup>
        </ComposeForm>
      </ComposeMailWrapper>
    )
  );
}

export default MobileComposeMail;
