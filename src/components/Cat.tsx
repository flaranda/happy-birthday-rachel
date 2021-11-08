import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { Color } from '../constants/Color';

export const Cat: React.FC = () => {
  const [isBlinking, setIsBlinking] = useState<boolean>(false);

  useEffect(() => {
    const timeoutMs: number = isBlinking ? 300 : 5000;

    setTimeout(() => {
      setIsBlinking(!isBlinking);
    }, timeoutMs);
  }, [isBlinking]);

  return (
    <>
      <CatBody>
        <CatEye isLeft isBlinking={isBlinking} />
        <CatEye isRight isBlinking={isBlinking} />
        <CatMouth />
      </CatBody>
    </>
  );
};

const CatBody: React.FC = styled.div`
  background: ${Color.Cat};
  height: 100%;
  width: 100%;
  z-index: 0;
  position: relative;

  &:before,
  &:after {
    width: 0;
    height: 0;
    top: -20%;
    position: absolute;
    content: '';
  }

  &:before {
    border-right: 5vw solid transparent;
    border-bottom: 5vw solid ${Color.Cat};
    left: 0;
  }

  &:after {
    border-left: 5vw solid transparent;
    border-bottom: 5vw solid ${Color.Cat};
    right: 0;
  }
`;

interface CatEyeProps {
  isBlinking: boolean;
  isLeft?: boolean;
  isRight?: boolean;
}

const CatEye: React.FC<CatEyeProps> = styled.div<CatEyeProps>`
  position: absolute;
  height: 12%;
  width: 12%;
  background: ${Color.White};
  border-radius: 100%;
  top: 25%;
  left: ${(props: CatEyeProps) => props.isLeft && '21%'};
  right: ${(props: CatEyeProps) => props.isRight && '21%'};
  visibility: ${(props: CatEyeProps) =>
    props.isBlinking ? 'hidden' : 'visible'};
`;

const CatMouth: React.FC = styled.div`
  position: absolute;
  height: 6%;
  width: 60%;
  background: ${Color.White};
  border-radius: 0 0 30% 30%;
  top: 50%;
  margin: auto;
  left: 0;
  right: 0;
`;
