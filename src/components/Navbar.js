import styled from 'styled-components';

const Navbar = styled.div`
  position: fixed;
  width: 100%;
  min-height: 56px;
  display: flex;
  align-items: center;
  background-color: #262626;
`;

const NavbarBrand = styled.div`
  flex-grow: 1;
  padding-left: 20px;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;

  & > i {
    margin-right: 10px;
  }
`;

export { Navbar, NavbarBrand };
