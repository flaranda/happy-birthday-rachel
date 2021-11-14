import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Color } from '../models/Color';

export const Cat: React.FC = () => {
  const catBodyAnimationVariants: Variants = {
    iddle: {
      y: '5px',
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 1,
      },
    },
  };

  const [isBlinking, setIsBlinking] = useState<boolean>(false);

  useEffect(() => {
    const timeoutMs: number = isBlinking ? 300 : 5000;

    setTimeout(() => {
      setIsBlinking(!isBlinking);
    }, timeoutMs);
  }, [isBlinking]);

  return (
    <>
      <CatBody variants={catBodyAnimationVariants} animate="iddle">
        <CatHat />
        <CatEye position="left" isBlinking={isBlinking} />
        <CatEye position="right" isBlinking={isBlinking} />
        <CatMouth />
      </CatBody>
    </>
  );
};

const CatBody = styled(motion.div)`
  background: ${Color.Cat};
  height: 55px;
  width: 55px;
  z-index: 0;
  position: relative;

  &:before,
  &:after {
    width: 0;
    height: 0;
    top: -14px;
    position: absolute;
    content: '';
  }

  &:before {
    border-right: 15px solid transparent;
    border-bottom: 15px solid ${Color.Cat};
    left: 0;
  }
`;

const CatHat = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 32px solid ${Color.CatHat};
  left: 37px;
  top: -27px;
  transform: rotate(20deg);
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: ${Color.MoonPrimary};
    border-radius: 50%;
    left: -5px;
    top: -6px;
  }
`;

interface CatEyeProps {
  isBlinking: boolean;
  position: 'left' | 'right';
}

const CatEye = styled.div`
  position: absolute;
  height: 12%;
  width: 12%;
  background: ${Color.White};
  border-radius: 100%;
  top: 25%;
  left: ${(props: CatEyeProps) => props.position === 'left' && '21%'};
  right: ${(props: CatEyeProps) => props.position === 'right' && '21%'};
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
