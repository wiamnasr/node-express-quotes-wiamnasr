import styled from "styled-components";

export const Quotes = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const Quote = styled.li`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  text-align: center;
  padding: 1rem 1rem;
  width: 200px;
  height: 250px;
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: 31px 31px 62px #bebebe, -31px -31px 62px #ffffff;
  color: steelblue;

  :hover {
    background: #ffffff;
    box-shadow: 31px 31px 62px #ffffff, -31px -31px 62px #ffffff;
    font-weight: bolder;
  }
`;
