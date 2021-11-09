import styled from 'styled-components';
import { Color } from '../constants/Color';

interface DialogProps {
  text: string;
}

export const Dialog: React.FC<DialogProps> = (props: DialogProps) => {
  return (
    <>
      <DialogBody>
        <DialogText>{props.text}</DialogText>
      </DialogBody>
    </>
  );
};

const DialogBody = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #59597c;
  padding: 4px;
  max-height: 104px;
`;

const DialogText = styled.p`
  color: ${Color.White};
  font-size: 18px;
  line-height: 24px;
  font-family: 'Roboto', sans-serif;
  white-space: pre-line;
  border-radius: 20px;
  padding: 20px;
  border: 4px solid ${Color.Background};
`;
