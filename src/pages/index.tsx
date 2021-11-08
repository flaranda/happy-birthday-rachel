import styled from 'styled-components';
import { Cat } from '../components/Cat';
import { Cloud } from '../components/Cloud';
import { Moon } from '../components/Moon';

const Index: React.FC = () => {
  return (
    <Container>
      <MoonContainer>
        <CatContainer>
          <Cat />
        </CatContainer>
        <Moon />
      </MoonContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
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
  top: 18%;
  right: 8%;
  width: 50vw;
  height: 50vw;
`;

export default Index;
