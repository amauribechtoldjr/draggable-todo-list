import * as React from 'react';
import * as st from './TodoStyled';

import Content from './Content/Content';

const Todo: React.FC = () => {
  return (
    <st.TodoContainer>
      <st.ContentContainer>
        <Content />
      </st.ContentContainer>
    </st.TodoContainer>
  );
};

export default Todo;
