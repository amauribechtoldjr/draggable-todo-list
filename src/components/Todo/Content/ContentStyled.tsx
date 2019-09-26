import styled from 'styled-components';

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  margin-bottom: 26px;
  border-radius: 10px;
  overflow-y: auto;
`;

export const DraggableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DraggableLabel = styled.span`
  margin: 20px;
  font-weight: bold;
  color: #dadbde;
`;
