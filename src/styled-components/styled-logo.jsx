import styled from "styled-components";

export const Logo = styled.div`
  width: 100%; height: 100%;
  background: #1868C3;
  border-radius: 50%;
  position: relative;
  transition: .3s;

  &::after {
    content: '';
    position: absolute; top: 20%; left: 10%;
    width: 80%; height: 80%;
    background: ${props => props.background === 'blue'&& '#0F172A'};
    background: ${props => props.background === 'white'&& '#fff'};
    clip-path: polygon(50% 100%, 0 0, 100% 0);
  }
`