import { CiStar } from "react-icons/ci";
import dummyEmails from "../../../assets/data/dummyData";

import { useState, useEffect } from "react";

import {
  MailContainer,
  MailList,
  MailItem,
  MailDetails,
  MailSender,
  MailSnippet,
  MailTime,
} from "../MailStyled";

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

function PrimaryMail() {
  const [maxLength, setMaxLength] = useState(50);

  useEffect(() => {
    const updateMaxLength = () => {
      if (window.innerWidth < 600) {
        setMaxLength(50); // Mobile
      } else if (window.innerWidth < 1024) {
        setMaxLength(80); // Tablet
      } else {
        setMaxLength(150); // PC
      }
    };

    updateMaxLength();
    window.addEventListener("resize", updateMaxLength);

    return () => window.removeEventListener("resize", updateMaxLength);
  }, []);

  return (
    <MailContainer>
      <MailList>
        {dummyEmails.map((mail, index) => (
          <MailItem key={index}>
            <input type="checkbox" />
            <CiStar />
            <MailDetails>
              <MailSender>{mail.sender}</MailSender>
              <MailSnippet>{truncateText(mail.snippet, maxLength)}</MailSnippet>
            </MailDetails>
            <MailTime>{mail.time}</MailTime>
          </MailItem>
        ))}
      </MailList>
    </MailContainer>
  );
}

export default PrimaryMail;
