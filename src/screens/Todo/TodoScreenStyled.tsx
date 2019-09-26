import styled from 'styled-components';

import { COLORS } from '../../components/colors';

export const TodoScreenContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.background};
  flex-direction: column;

  min-height: 100vh;
`;
