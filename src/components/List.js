import styled from 'styled-components';

export const ListItem = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 12px 8px;
  background-color: #ffffff;
  border: 1px solid #525252;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const ListItemContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  width: 100%;

  & > div:nth-child(2) {
    display: flex;
    align-items: center;
  }

  & > div:nth-child(2) > div {
    margin-right: ${(props) => (props.small ? '5px' : '2rem')};
  }
`;
