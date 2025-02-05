import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #e0e0e0;
`;

export const Title = styled.h3`
  font-size: 12px;
  color: #757575;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #333;
  font-weight: 500;
  padding: 8px 0;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
    border-radius: 4px;
  }
`;

export const IconText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Badge = styled.span`
  font-size: 12px;
  background: ${({ color }) => color || "#d32f2f"};
  color: white;
  padding: 2px 6px;
  border-radius: 12px;
`;

export const Footer = styled.div`
  margin-top: auto;
  font-size: 12px;
  color: #757575;
  text-align: center;
`;

export const UserEmail = styled.h2`
  font-size: 16px;
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d5d5d5;
  padding: 5px;
  margin-left: 20%;
  margin-right: 20%;
  border-radius: 3px;
`;
