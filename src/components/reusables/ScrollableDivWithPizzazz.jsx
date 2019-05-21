import styled from 'styled-components';

var ScrollableDivWithPizzazz = styled.div`
  display: inline-block;
  width: calc(50% - 2px);
  height: calc(100% - 2px);
  overflow-y: scroll;
  font-family: 'Comic Sans MS', sans-serif;
  border: thin black solid;
  @media (max-width: 400px) {
    width: 100%;
    height: 50%;
  }
`;

export default ScrollableDivWithPizzazz;
