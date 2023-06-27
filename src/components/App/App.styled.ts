import styled from 'styled-components';

export const App = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${p => p.theme.space[4]};
  padding-bottom: 24px;
`;
