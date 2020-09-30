import styled from 'styled-components';

const SubTitle = styled.div`
  color: #5a5a5a;
  font-size: ${(props) => (props.small ? '0.9' : '1.1')}rem;
  margin-bottom: 0.35rem;
`;

export default SubTitle;
