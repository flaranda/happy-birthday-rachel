import styled from 'styled-components';
import { motion, useAnimation, Variants } from 'framer-motion';

import { Cat } from '../components/Cat';
import { Cloud } from '../components/Cloud';
import { Dialog } from '../components/Dialog';
import { Moon } from '../components/Moon';
import { DialogText } from '../models/DialogText';
import { Button } from '../components/Button';
import { useEffect, useState } from 'react';
import { isWelcomeDialogText } from '../utils/isWelcomeDialogText';
import { dialogTextToStringMap } from '../models/dialogTextToStringMap';

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

  const [dialogText, setDialogText] = useState(DialogText.WELCOME_01);

  const [showDialog, setShowDialog] = useState(false);
  const [showPresentButtons, setShowPresentButtons] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const moonContainerAnimationControls = useAnimation();

  const initialSequence = async () => {
    await moonContainerAnimationControls.start('show');
    setShowDialog(true);
  };

  const loadNextInitialDialog = () => {
    if (dialogText === DialogText.WELCOME_01) {
      setDialogText(DialogText.WELCOME_02);
    } else if (dialogText === DialogText.WELCOME_02) {
      setDialogText(DialogText.WELCOME_03);
    } else if (dialogText === DialogText.WELCOME_03) {
      setDialogText(DialogText.WELCOME_04);
    } else if (dialogText === DialogText.WELCOME_04) {
      setDialogText(DialogText.WELCOME_05);
    } else {
      setDialogText(DialogText.INITIAL);
    }
  };

  useEffect(() => {
    initialSequence();
  }, []);

  return (
    <Container>
      <MoonContainer
        variants={moonContainerVariants}
        animate={moonContainerAnimationControls}
        initial="hide"
      >
        <CatContainer variants={catContainerVariants}>
          <Cat />
        </CatContainer>
        <Moon />
      </MoonContainer>
      {showDialog && (
        <DialogContainer>
          <Dialog
            text={dialogTextToStringMap[dialogText]}
            onDialogEnd={() => {
              if (isWelcomeDialogText(dialogText)) {
                setShowNextButton(true);
                setShowPresentButtons(false);
              } else {
                setShowNextButton(false);
                setShowPresentButtons(true);
              }
            }}
          />
        </DialogContainer>
      )}
      {showPresentButtons && (
        <ButtonsContainer>
          <Button
            text="#1"
            onClick={() => {
              setDialogText(DialogText.WELCOME_02);
            }}
          />
          <Button
            text="#2"
            onClick={() => {
              setDialogText(DialogText.WELCOME_01);
            }}
          />
          <Button text="#3" onClick={() => {}} />
        </ButtonsContainer>
      )}
      {showNextButton && (
        <ButtonsContainer>
          <Button
            text="Next"
            onClick={() => {
              setShowNextButton(false);
              loadNextInitialDialog();
            }}
          />
        </ButtonsContainer>
      )}
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
