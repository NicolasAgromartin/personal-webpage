import styled from "styled-components";

export const MediaLinks = styled.div`
  width: 4rem; height: 150px;
  display: flex; flex-direction: column;
  justify-content: space-between; align-items: center;

  position: relative;

  a {
    font-size: 1.5rem;
  }

  &::after {
    content: '';
      width: 2px; height: 45%;
      background: #fff;
      
      position: absolute;
      top: 2.5rem; left: 50;
  }

  @media screen and (min-width:640px) {
    transform: rotate(90deg);

    a {
      transform: rotate(-90deg);
    }
  }
`