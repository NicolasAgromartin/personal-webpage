import styled from "styled-components";

export const Decoration = styled.div`
  background: #1868C3;
  border-radius: 36px;
  box-shadow: 0 0 10px 5px rgba(0,0,0,.1);
  position: absolute;
  &::after {
    content: '';
    position: absolute;
    top: 40%; 
    left: ${props =>  props.orientation === 'left'&& '30%'};
    right: ${props => props.orientation === 'right'&& '30%'};
    background: #204C7D;
    width: 100%; height: 100%;
    border-radius: inherit;
    box-shadow: 0 0 10px 5px rgba(0,0,0,.1);
}
`

export const Rectangles = styled(Decoration)`
  width: 180px; height: 350px;

  animation: ${props => props.orientation === 'left'? 'floatA 15s infinite ease-out' : 'floatD 10s infinite ease-in'};

  &::after {
    animation: ${props => props.orientation === 'left'? 'floatB 15s infinite ease-in-out' : 'floatC 10s infinite ease-out'};
  }

/* responsive sizes */
  @media screen and (min-width:640px) {
    width: 200px; height: 350px;
  };

  @media screen and (min-width:768px) {
    width: 250px; height: 500px;
  };

  @media screen and (min-width:1024px) {
  };
  
  @media screen and (min-width:1280px) {
    width: 300px; height: 600px;
  };

/* animations */
  @keyframes floatA {
    from,to {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5%);
    }
  }

  @keyframes floatB {
    from,to {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8%);
    }
  }

  @keyframes floatC {
    from,to {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10%);
    }
  }

  @keyframes floatD {
    from,to {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15%);
    }
  }
`;

export const Squares = styled(Decoration)`
  width: ${props => props.small? '150px' : '200px'};
  height: ${props => props.small? '150px' : '200px'};
  border-radius: 18px;
  bottom: 0%; right: 50%;
  
  animation:  ${props => props.orientation === 'top'? 'squareAnimationB 10s infinite ease-out' : 'squareAnimationA 8s infinite ease-in-out'}; 

  &::after {
    left: 55%;
    top: ${props => props.orientation === 'top'&& '-50%'};

    animation:  ${props => props.orientation === 'top'? 'squareAnimationD 12s infinite ease-in' : 'squareAnimationC 15s infinite ease-out'}; 

  }

  @keyframes squareAnimationA {
    from,to {
      transform: 
        translateY(0)
        translateX(0);
    }
    50%{
      transform: 
        translateY(10%)
        translateX(10%);
    }
  }

  @keyframes squareAnimationB {
    from,to {
      transform: 
        translateY(0)
        translateX(0);
    }
    50%{
      transform: 
        translateY(8%)
        translateX(-7%);
    }
  }

  @keyframes squareAnimationC {
    from,to {
      transform: 
        translateY(0)
        translateX(0);
    }
    50%{
      transform: 
        translateY(7%)
        translateX(10%);
    }
  }

  @keyframes squareAnimationD {
    from,to {
      transform: 
        translateY(0)
        translateX(0);
    }
    50%{
      transform: 
        translateY(-8%)
        translateX(9%);
    }
  }
`

export const Column = styled(Decoration)`
  width: 150px; height: 500px;
  top: 100%;
  border-radius: 18px;
  animation: columnAnimationA 12s infinite ease-in;
  &::after {
    left:40%;
    top: -30%;
    animation: columnAnimationB 15s infinite ease-out;
  }

  @keyframes columnAnimationA {
    from,to {
      transform: translateY(0)
    }
    50% {
      transform: translateY(10%)
    }
  }

  @keyframes columnAnimationB {
    from,to {
      transform: translateY(0)
    }
    50% {
      transform: translateY(8%)
    }
  }
`



