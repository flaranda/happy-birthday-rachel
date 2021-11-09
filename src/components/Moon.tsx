import styled from 'styled-components';

import { Color } from '../models/Color';

export const Moon: React.FC = () => {
  return (
    <MoonBody>
      <MoonCrater />
      <MoonCrater />
      <MoonCrater />
      <MoonCrater />
    </MoonBody>
  );
};

const MoonCrater = styled.div`
  position: absolute;
  background: ${Color.MoonSecondary};
  border-radius: 50%;
`;

const MoonBody = styled.div`
  width: 100%;
  height: 100%;
  background: ${Color.MoonPrimary};
  border-radius: 50%;
  box-shadow: 0 0 30px 1px ${Color.MoonSecondary};
  position: relative;
  display: block;

  ${MoonCrater}:nth-child(1) {
    width: 35%;
    height: 35%;
    bottom: 30%;
    right: 10%;
  }

  ${MoonCrater}:nth-child(2) {
    width: 20%;
    height: 20%;
    bottom: 10%;
    left: 20%;
  }

  ${MoonCrater}:nth-child(3) {
    width: 12%;
    height: 12%;
    bottom: 10%;
    right: 20%;
  }

  ${MoonCrater}:nth-child(4) {
    width: 15%;
    height: 15%;
    bottom: 60%;
    right: 50%;
  }
`;
