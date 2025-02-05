import styled from "styled-components";
import { Pen } from "lucide-react";

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;
  background-color: #f7f9fc;
  font-family: Arial, sans-serif;
  margin: 0;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #5f6368;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;

  svg {
    font-size: 1.8rem;
  }

  .gmail-text {
    font-size: 1.4rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

export const HamburguerMenu = styled.div`
  display: block;

  svg {
    font-size: 2rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  &:hover {
    color: #1a73e8;
  }
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  max-width: 600px;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 24px;
  background-color: #c3e7ff;
  font-size: 0.9rem;
  color: #5f6368;
  margin: 5px;

  &:focus {
    border: 1px solid #1a73e8;
    background-color: #ffffff;
    outline: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  &::placeholder {
    color: #a8a8a8;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #5f6368;

  svg {
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      color: #1a73e8;
    }

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;
export const StyledMailIcon = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 50px;
    height: 50px;

    @media (max-width: 768px) {
      width: 35px;
      height: 35px;
    }

    @media (max-width: 390px) {
      width: 25px;
      height: 25px;
    }
  }
`;

export const Fab = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background-color: #d93025; /* Gmail's red */
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #b2221c;
  }
`;

export const Icon = styled(Pen)`
  color: white;
  width: 24px;
  height: 24px;
`;
