import { useEffect, useState } from 'react';
import styled from 'styled-components';

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
        <CatHat />
        <CatEye isLeft isBlinking={isBlinking} />
        <CatEye isRight isBlinking={isBlinking} />
        <CatMouth />
      </CatBody>
    </>
  );
};

const CatBody = styled.div`
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

const CatHat = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 3vw solid transparent;
  border-right: 3vw solid transparent;
  border-bottom: 8vw solid #f5a8b9;
  left: 70%;
  top: -45%;
  transform: rotate(20deg);
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    width: 2vw;
    height: 2vw;
    background: #fcec82;
    border-radius: 50%;
    left: -1vw;
    top: -1vw;
  }
`;

interface CatEyeProps {
  isBlinking: boolean;
  isLeft?: boolean;
  isRight?: boolean;
}

const CatEye = styled.div<CatEyeProps>`
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

const CatMouth = styled.div`
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
