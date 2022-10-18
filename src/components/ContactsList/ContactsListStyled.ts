import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const Contact = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  box-shadow: 0px 7px 21px 0px rgba(0, 0, 0, 0.24);
  border-radius: 30px;
  margin: 15px;
  flex-basis: calc((100% - 40px * 3) / 3);
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 7px 21px 16px rgba(0, 0, 0, 0.24);
  }
`;

export const DeleteBtn = styled.button`
  background-color: transparent;
  border: 1px black solid;
  margin-top: 10px;
  text-align: center;
  padding: 4px 8px;
  border-radius: 15px;
  cursor: pointer;
`;
