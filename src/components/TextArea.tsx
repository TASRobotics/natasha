import styled from 'styled-components';

export const TextArea = styled.textarea`
  height: 593px;
  width: 100%;
  margin: 8px 0px;
  padding: 13px 16px;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #00c9dd;
  box-shadow: 0px 0px 0px 4px rgba(75, 77, 237, 0.2);
  outline: none;
  resize: none;
  &::placeholder {
    color: #8c8ca1;
  }
`;
