import styled from 'styled-components';

const Title = styled.div`
  width: ${(props) => (props.small ? '250px' : '100%')};
  color: black;
  font-size: ${(props) => (props.small ? '1.1' : '1.4')}rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
  line-height: ${(props) => (props.small ? '1.2' : '1.5')}rem;
  height: ${(props) => (props.small ? '1.2' : '1.5')}rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Title;
