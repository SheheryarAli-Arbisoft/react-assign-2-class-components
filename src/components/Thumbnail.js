import styled from 'styled-components';

const Thumbnail = styled.img`
  width: ${(props) => (props.small ? '120' : '256')}px;
  height: ${(props) => (props.small ? '80' : '150')}px;
`;

export default Thumbnail;
