import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useLocalStorage } from 'react-use';

import { Cat } from '../components/Cat';
import { Cloud } from '../components/Cloud';
import { Dialog } from '../components/Dialog';
import { Moon } from '../components/Moon';
import { DialogText } from '../models/DialogText';
import { Button } from '../components/Button';
import { dialogTextToStringMap } from '../models/dialogTextToStringMap';
import { isSecretDialogText } from '../utils/isSecretDialogText';

const Secret: React.FC = () => {
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

  const cloudOneVariants: Variants = {
    show: {
      right: '12%',
      transition: {
        duration: 1,
        delay: 1.2,
      },
    },
    hide: {
      right: '-50%',
    },
    iddle: {
      right: '10%',
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 2,
        repeatDelay: 1,
      },
    },
  };

  const cloudTwoVariants: Variants = {
    show: {
      left: '20%',
      transition: {
        duration: 1,
        delay: 1.2,
      },
    },
    hide: {
      left: '-35%',
    },
    iddle: {
      left: '22%',
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 2,
        repeatDelay: 1,
      },
    },
  };

  const cloudThreeVariants: Variants = {
    show: {
      left: '10%',
      transition: {
        duration: 1,
        delay: 1.2,
      },
    },
    hide: {
      left: '-35%',
    },
    iddle: {
      left: '12%',
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 2,
        repeatDelay: 1,
      },
    },
  };

  const dialogContainerVariants: Variants = {
    show: {
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    hide: {
      scale: 0,
    },
  };

  const [checkpoint, setCheckpoint] = useLocalStorage<boolean>(
    'checkpoint_secret',
    false,
  );

  const [dialogText, setDialogText] = useState(DialogText.SECRET_01);

  const [showDialog, setShowDialog] = useState(false);
  const [showPresentButtons, setShowPresentButtons] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const moonContainerAnimationControls = useAnimation();
  const dialogContainerAnimationControls = useAnimation();
  const cloudAnimationControls = useAnimation();

  const loadNextSecretDialog = () => {
    if (dialogText === DialogText.SECRET_01) {
      setDialogText(DialogText.SECRET_02);
    } else if (dialogText === DialogText.SECRET_02) {
      setDialogText(DialogText.SECRET_03);
    } else {
      setCheckpoint(true);
      setDialogText(DialogText.INITIAL_SECRET);
    }
  };

  const loadNextPresentFourDialog = () => {
    if (dialogText === DialogText.PRESENT_4_01) {
      setDialogText(DialogText.PRESENT_4_02);
    } else if (dialogText === DialogText.PRESENT_4_02) {
      setDialogText(DialogText.PRESENT_4_03);
    } else {
      setDialogText(DialogText.PRESENT_4_01);
    }
  };

  const onDialogEnd = () => {
    if (isSecretDialogText(dialogText)) {
      setShowNextButton(true);
      setShowPresentButtons(false);
    } else {
      setShowNextButton(false);
      setShowPresentButtons(true);
    }
  };

  useEffect(() => {
    const initialSequence = async () => {
      await Promise.all([
        moonContainerAnimationControls.start('show'),
        cloudAnimationControls.start('show'),
      ]);

      cloudAnimationControls.start('iddle');

      setShowDialog(true);
    };

    initialSequence();
  }, [cloudAnimationControls, moonContainerAnimationControls]);

  useEffect(() => {
    if (checkpoint) {
      setDialogText(DialogText.INITIAL_SECRET);
    }
  }, [checkpoint]);

  useEffect(() => {
    if (showDialog) {
      dialogContainerAnimationControls.start('show');
    }
  }, [showDialog, dialogContainerAnimationControls]);

  return (
    <>
      <CloudsContainer>
        <Cloud
          variants={cloudOneVariants}
          animate={cloudAnimationControls}
          initial="hide"
        />
        <Cloud
          variants={cloudTwoVariants}
          animate={cloudAnimationControls}
          initial="hide"
        />
        <Cloud
          variants={cloudThreeVariants}
          animate={cloudAnimationControls}
          initial="hide"
        />
      </CloudsContainer>
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
        <DialogContainer
          variants={dialogContainerVariants}
          animate={dialogContainerAnimationControls}
          initial="hide"
        >
          <Dialog
            text={dialogTextToStringMap[dialogText]}
            onDialogEnd={onDialogEnd}
          />
        </DialogContainer>
      )}
      {showPresentButtons && (
        <ButtonsContainer>
          <Button text="#4" onClick={loadNextPresentFourDialog} />
        </ButtonsContainer>
      )}
      {showNextButton && (
        <ButtonsContainer>
          <Button
            text="Next"
            onClick={() => {
              setShowNextButton(false);
              loadNextSecretDialog();
            }}
          />
        </ButtonsContainer>
      )}
    </>
  );
};

const CloudsContainer = styled.div`
  width: 100%;
  height: 90%;
  position: absolute;

  & > ${Cloud} {
    position: absolute;
    z-index: 10;
  }

  & > ${Cloud}:nth-child(1) {
    top: 45%;
    right: 12%;
  }

  & > ${Cloud}:nth-child(2) {
    top: 10%;
    left: 20%;
  }

  & > ${Cloud}:nth-child(3) {
    top: 30%;
    left: 10%;
  }
`;

const CatContainer = styled(motion.div)`
  position: absolute;
  top: -25%;
  right: 35%;
`;

const MoonContainer = styled(motion.div)`
  position: absolute;
  top: 16%;
  right: 8%;
`;

const DialogContainer = styled(motion.div)`
  position: absolute;
  width: 90%;
  left: 5%;
  right: 5%;
  top: 55%;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  width: 90%;
  left: 5%;
  right: 5%;
  bottom: 10%;
  display: flex;

  & > :not(:first-child) {
    margin-left: 16px;
  }
`;

export default Secret;
