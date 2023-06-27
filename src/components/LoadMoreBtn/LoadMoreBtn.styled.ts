import styled from 'styled-components';

export const BtnLoadMore = styled.button`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  padding: 8px 16px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.backgroundBody};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: ${p => p.theme.colors.accentColor};
  border: ${p => p.theme.borders.none};
  text-decoration: none;
  cursor: pointer;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover {
    background-color: ${p => p.theme.colors.accentColor};
    color: ${p => p.theme.colors.backgroundBody};
  }
`;
