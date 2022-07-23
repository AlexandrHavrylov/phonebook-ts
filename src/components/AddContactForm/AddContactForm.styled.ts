import styled from "@emotion/styled";

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddContactLabel = styled.label`
  margin-top: 10px;
  color: black;
`;

export const AddContactInput = styled.input`
  width: 350px;
  height: 24px;
  padding: 4px 8px;
  margin-top: 5px;
  border-radius: 30px;
`;

export const AddBtn = styled.button`
  margin-top: 15px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 30px;
  padding: 8px 8px;
  transition: transform 250ms ease-in;

  &:hover {
    transform: scale(1.1);
  }
`;
