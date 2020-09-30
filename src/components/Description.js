import styled from 'styled-components';

const Description = styled.div`
  font-size: 1rem;
  color: black;
  width: ${(props) => (props.small ? '250px' : '100%')};
  line-height: 1.1rem;
  height: ${(props) => (props.full ? 'auto' : '1.1rem')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Description;
