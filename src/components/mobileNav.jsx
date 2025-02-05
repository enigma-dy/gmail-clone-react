import React from "react";
import styled from "styled-components";
import { Inbox, Star, Send, Trash2, Tag, PlusCircle } from "lucide-react";
import {
  Container,
  Section,
  Title,
  List,
  ListItem,
  IconText,
  Badge,
  Footer,
  UserEmail,
} from "./MobileNavStyled";

const MobileNav = () => {
  return (
    <Container>
      <UserEmail>adediredayo@gmail.com</UserEmail>

      {/* Inbox Section */}
      <Section>
        <Title>Inbox</Title>
        <List>
          <ListItem>
            <IconText>
              <Inbox size={18} />
              Primary
            </IconText>
            <Badge>4</Badge>
          </ListItem>
          <ListItem>
            <IconText>
              <Tag size={18} />
              Social
            </IconText>
          </ListItem>
          <ListItem>
            <IconText>
              <Tag size={18} />
              Promotions
            </IconText>
            <Badge color="#388e3c">16</Badge>
          </ListItem>
          <ListItem>
            <IconText>
              <Tag size={18} />
              Updates
            </IconText>
            <Badge color="#1976d2">1</Badge>
          </ListItem>
        </List>
      </Section>

      {/* Labels Section */}
      <Section>
        <Title>Labels</Title>
        <List>
          <ListItem>
            <IconText>
              <Star size={18} />
              Important
            </IconText>
            <Badge color="#ffb300">5</Badge>
          </ListItem>
          <ListItem>
            <IconText>
              <Tag size={18} />
              From Circles
            </IconText>
          </ListItem>
          <ListItem>
            <IconText>
              <Star size={18} />
              Starred
            </IconText>
          </ListItem>
          <ListItem>
            <IconText>
              <Send size={18} />
              Sent Mail
            </IconText>
          </ListItem>
          <ListItem>
            <IconText>
              <PlusCircle size={18} />
              Drafts
            </IconText>
          </ListItem>
        </List>
      </Section>

      {/* More Section */}
      <Section>
        <Title>More</Title>
        <List>
          <ListItem>
            <IconText>
              <PlusCircle size={18} />
              More
            </IconText>
          </ListItem>
          <ListItem>
            <IconText>
              <Trash2 size={18} />
              Bin
            </IconText>
          </ListItem>
          <ListItem>
            <IconText>
              <Trash2 size={18} />
              Spam
            </IconText>
          </ListItem>
        </List>
      </Section>

      {/* Footer */}
      <Footer>
        <p>adediredayo@gmail.com</p>
        <p>2024 Google</p>
      </Footer>
    </Container>
  );
};

export default MobileNav;
