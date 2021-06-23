import { css } from 'styled-components';

export const menuItem = css`
  line-height: 2;
  cursor: pointer;
  display: block;
  margin: 0 -20px 0 -40px;
  padding: 0 20px 0 40px;
  ${props => props.active ? css`background: #1B87FF` : ''}
`;