import React from 'react';
import styled from 'styled-components';

export const ScrollBarContainer = styled.div`
  width: 100%;
  max-height: 500px; 
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px; 
  }

  &::-webkit-scrollbar-thumb {
    
    background-color: ${(props) => (props.bg === "#C74FEB" ? "#C74FEB" : "#D63626")};
    border-radius: 4px; 
  }

  &::-webkit-scrollbar-track {
    border-radius: 4px; 
  }
`;

const Table = styled.table`
  width: 100%;
  background: #F3F4F6;
  border-radius: 4px;
`;

const Th = styled.th`
  padding: 18px;
  color: #4F4F4F;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 0.75px;
  @media (max-width: 1271px) {
    font-size:20px;
    padding:8px;
  }
  @media (max-width: 487px) {
    font-size:14px;
    padding:4px;
  }
`;

const Td = styled.td`
  border-bottom: 1px solid #E0E0E0;
  padding: ${(props) => (props.size === "sm" ? "8px" : "22px")};
  color:  #828282;
  font-size: 12px;
  font-weight: 200;
  letter-spacing: 0.16px;

  &:last-child {
    border-bottom: none; 
  }
  @media (max-width: 1271px) {
    padding:7px;
  }
  @media (max-width: 487px) {
    padding:4px;
  }
`;

function ScrollableTable({ children }) {
  return (
    <ScrollBarContainer>
      <Table>
        {children}
      </Table>
    </ScrollBarContainer>
  );
}

export { Th, Td };
export default ScrollableTable;
