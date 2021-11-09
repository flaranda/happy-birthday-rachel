import styled from 'styled-components';
import { Cat } from '../components/Cat';
import { Cloud } from '../components/Cloud';
import { Dialog } from '../components/Dialog';
import { Moon } from '../components/Moon';
import { DialogTexts } from '../constants/DialogTexts';

const Index: React.FC = () => {
  return (
    <Container>
      <MoonContainer>
        <CatContainer>
          <Cat />
        </CatContainer>
        <Moon />
      </MoonContainer>
      <DialogContainer>
        <Dialog text={DialogTexts.WELCOME_01} />
      </DialogContainer>
      <ButtonsContainer></ButtonsContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
`;

const CatContainer = styled.div`
  position: absolute;
  top: -25%;
  right: 35%;
  width: 15vw;
  height: 15vw;
`;

const MoonContainer = styled.div`
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
  height: 10vw;
  left: 5vw;
  right: 5vw;
  bottom: 10%;
  background-color: red;
`;

export default Index;
