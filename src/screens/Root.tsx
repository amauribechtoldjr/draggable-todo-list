import * as React from 'react';

import TodoScreen from './Todo/TodoScreen';
import * as styles from './RootStyled';

const ScreensRoot = () => {
  return (
    <styles.RootContainerstyled>
      <styles.GlobalStyle />
      <TodoScreen />
    </styles.RootContainerstyled>
  );
};

export default ScreensRoot;
