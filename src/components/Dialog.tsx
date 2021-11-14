import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Color } from '../models/Color';

interface DialogProps {
  text: string;
  onDialogEnd: () => void;
}

export const Dialog: React.FC<DialogProps> = (props: DialogProps) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setText(props.text);
      setIndex(0);
    }, 100);
  }, [props.text]);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;

    if (text.length > 0) {
      if (index < text.length) {
        timeout = setTimeout(
          () => {
            setIndex(index + 1);
          },
          index === 0 ? 200 : 60,
        );
      }

      if (index === text.length) {
        props.onDialogEnd();
      }
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [index, text]);

  const forceEndDialog = () => {
    setText(props.text);
    setIndex(props.text.length);

    props.onDialogEnd();
  };

  return (
    <DialogBody onClick={forceEndDialog}>
      <DialogText>{text.substring(0, index)}</DialogText>
    </DialogBody>
  );
};

const DialogBody = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: ${Color.DialogBackground};
  padding: 4px;
`;

const DialogText = styled.p`
  color: ${Color.White};
  font-size: 18px;
  line-height: 24px;
  font-family: 'Roboto', sans-serif;
  white-space: pre-line;
  border-radius: 20px;
  padding: 20px;
  min-height: 104px;
  border: 4px solid ${Color.SkyBackground};
`;
