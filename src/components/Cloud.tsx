import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Color } from '../models/Color';

export const Cloud = styled(motion.div)`
  background: ${Color.Cloud};
  width: 90px;
  height: 42px;
  position: relative;
  opacity: 0.9;

  &:before {
    border-radius: 50%;
    box-shadow: 20px -20px 0 0 ${Color.Cloud}, 90px 0 0 0 ${Color.Cloud},
      60px -27px 0 8px ${Color.Cloud};
    content: '';
    position: absolute;
    width: 48px;
    height: 48px;
    left: -22px;
    bottom: 0;
    background: ${Color.Cloud};
  }
`;
