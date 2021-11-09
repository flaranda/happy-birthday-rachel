import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

import { Cat } from '../components/Cat';
import { Cloud } from '../components/Cloud';
import { Dialog } from '../components/Dialog';
import { Moon } from '../components/Moon';
import { DialogTexts } from '../constants/DialogTexts';
import { Button } from '../components/Button';

const Index: React.FC = () => {
  const moonContainerVariants: Variants = {
    show: {
      top: '16%',
      transition: {
        duration: 1,
        delayChildren: 3,
        delay: 1,
      },
    },
    hide: {
      top: '120%',
    },
  };

  const catContainerVariants: Variants = {
    show: {
      top: '-25%',
      transition: {
        duration: 1,
      },
    },
    hide: {
      top: '20%',
    },
  };

  return (
    <Container>
      <MoonContainer
        variants={moonContainerVariants}
        animate="show"
        initial="hide"
      >
        <CatContainer variants={catContainerVariants}>
          <Cat />
        </CatContainer>
        <Moon />
      </MoonContainer>
      <DialogContainer>
        <Dialog text={DialogTexts.WELCOME_01} />
      </DialogContainer>
      <ButtonsContainer>
        <Button text="#1" onClick={() => {}} />
        <Button text="#2" onClick={() => {}} />
        <Button text="#3" onClick={() => {}} />
      </ButtonsContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
`;

const CatContainer = styled(motion.div)`
  position: absolute;
  top: -25%;
  right: 35%;
  width: 15vw;
  height: 15vw;
`;

const MoonContainer = styled(motion.div)`
  position: absolute;
  top: 16%;
  right: 8%;
  width: 50vw;
  height: 50vw;
`;

const DialogContainer = styled.div`
  position: absolute;
  width: 90vw;
  left: 5vw;
  right: 5vw;
  top: 50%;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  width: 90vw;
  left: 5vw;
  right: 5vw;
  bottom: 10%;
  display: flex;

  & > :not(:first-child) {
    margin-left: 16px;
  }
`;

export default Index;
