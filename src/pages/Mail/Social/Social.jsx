import styled from "styled-components";
import {
  MailContainer,
  MailHeader,
  HeaderTitle,
  MailList,
  MailItem,
  MailDetails,
  MailSender,
  MailSubject,
  MailSnippet,
  MailTime,
} from "../MailStyled";

const dummyEmails = [
  {
    sender: "John Doe",
    subject: "Meeting Reminder",
    snippet: "Don't forget about our meeting at 3 PM tomorrow.",
    time: "10:30 AM",
  },
  {
    sender: "Marketing Team",
    subject: "Monthly Newsletter",
    snippet: "Here are the latest updates from our team.",
    time: "9:15 AM",
  },
  {
    sender: "HR Department",
    subject: "Policy Updates",
    snippet: "Please review the attached policy changes.",
    time: "8:00 AM",
  },
];

function PrimaryMail() {
  return (
    <MailContainer>
      <MailHeader>
        <HeaderTitle>Socialx</HeaderTitle>
      </MailHeader>
      <MailList>
        {dummyEmails.map((mail, index) => (
          <MailItem key={index}>
            <MailDetails>
              <MailSender>{mail.sender}</MailSender>
              <MailSubject>{mail.subject}</MailSubject>
              <MailSnippet>{mail.snippet}</MailSnippet>
            </MailDetails>
            <MailTime>{mail.time}</MailTime>
          </MailItem>
        ))}
      </MailList>
    </MailContainer>
  );
}

export default PrimaryMail;
