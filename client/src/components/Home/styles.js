import styled from "styled-components";

export const CreateDocumentButton = styled.button`
  outline: none;
  background: #0071ff;
  padding: 1rem 2rem;
  border-radius: 2rem;
  border: none;
  font-size: 1.4rem;
  color: #fff;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  transition:transform .2s;
  cursor:pointer;
  &:hover{
    transform:scale(1.03);
  }
`;
