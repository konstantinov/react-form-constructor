import { css } from 'styled-components';

export const row = css`
    display: flex;
    flex-flow: row wrap;
`;

export const col = css`
    padding: 10px;
    width: ${props => 100/12*props.size}%;
    box-sizing: border-box;
`;