import styled from 'styled-components';

const Button = styled.button`
  box-sizing: border-box;
  padding: 7px;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  cursor: pointer;
  color: #ffffff;
  background-color: #276ad6;

  &:focus {
    outline: none;
  }

  &: hover {
    background-color: #1a56b8;
  }
`;

export default Button;
