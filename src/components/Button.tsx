import styled from 'styled-components';

import { Color } from '../constants/Color';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <ButtonBody onClick={props.onClick}>
      <ButtonText>{props.text}</ButtonText>
    </ButtonBody>
  );
};

const ButtonBody = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 4px solid ${Color.DialogBackground};
  background-color: ${Color.SkyBackground};
  padding: 24px;
  text-align: center;

  &:active {
    background-color: ${Color.DialogBackground};
  }
`;

const ButtonText = styled.p`
  color: ${Color.White};
  font-size: 24px;
  line-height: 24px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  white-space: pre-line;
`;
