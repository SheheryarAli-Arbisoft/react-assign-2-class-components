import styled from 'styled-components';

export const VideoPlayerSection = styled.div`
  display: flex;
`;

export const VideoSection = styled.div`
  box-sizing: border-box;
  padding: 20px 15px;
  width: 70%;
  height: fit-content;
  background-color: #ffffff;
  border: 1px solid #525252;
  border-radius: 5px;

  & > div:nth-child(3) {
    display: flex;
    align-items: center;
  }

  & > div:nth-child(3) > div {
    margin-right: 2rem;
  }
`;

export const RelatedVideosSection = styled.div`
  width: 30%;
  margin-left: 12px;
`;
