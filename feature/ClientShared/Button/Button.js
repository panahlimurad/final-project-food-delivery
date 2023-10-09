import styled from 'styled-components';

export const ButtonStyle = styled.button`
  font-size: ${(props) => (props.size === "sm" ? "14px" : "18px")};
  background: ${(props) => (props.bg === "#D63626" ? "#D63626" : "#ffffff")};
  color: ${(props) => (props.color === "#D63626" ? "#D63626" : "#FFF")};
  width:74px;
  height:68px;
  text-align:center;
  font-weight: 400;
  line-height: 20px; 
letter-spacing: 0.42px;
border-radius: 5px;
padding:8px;
border:1px solid  #D63626;
@media (max-width: 567px) {
  width:52px;
  height:38px;
  padding:1px;
  line-height: normal; 
  font-size:12px

}
`;