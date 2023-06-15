import styled from "styled-components";

const Button = styled.a`
  border: none; outline: none;
  background:none;
  border-radius: 8px;
  box-shadow: 0 0 10px 6px rgba(0,0,0, .1);
  display: flex;
  justify-content: center; align-items: center;
  font-weight: light;
`;

export const ActionButton = styled(Button)`
  padding: 1px;

  background: ${ props=> props.variant === 'blue'&& '#1868C3'};
  background: ${ props=> props.variant === 'white'&& '#fff'};
  
  color: ${ props=> props.variant === 'blue'&& '#fff' };
  color: ${ props=> props.variant === 'white'&& '#1868C3' };

  width: 160px; height: 2.5rem;
  font-size: 1rem;
`

export const SubmitButton = styled.button`
  border: none; outline: none;

  border-radius: 8px;
  box-shadow: 0 0 10px 6px rgba(0,0,0, .1);
  display: flex;
  justify-content: center; align-items: center;
  font-weight: light;
  padding: 1px;

  background: #1868C3;
  color: #fff;

  width: 160px; height: 2.5rem;
  font-size: 1rem;
`