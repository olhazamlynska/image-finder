import styled from 'styled-components';
import { Field, Form } from 'formik';
import { RiFindReplaceLine } from 'react-icons/ri';

export const SearchBar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accentColor};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const FormSearch = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
`;

export const Btn = styled.button`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 48px;
  border: ${p => p.theme.borders.none};
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const BtnLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
export const Icon = styled(RiFindReplaceLine)`
  position: absolute;
  top: 40%;
  left: 30%;
  transform: translate(0%, -25%);
  color: ${p => p.theme.colors.accentColor};
`;
export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: ${p => p.theme.borders.none};
  outline: none;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.accentColor};
  ::placeholder {
    font: inherit;
    font-size: 18px;
    color: ${p => p.theme.colors.accentColor};
  }
`;
