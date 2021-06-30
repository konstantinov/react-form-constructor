import { css } from 'styled-components';

export const row = css`
    display: flex;
    flex-flow: row wrap;
`;

export const col = css`
    padding: 10px;
    ${ props => props.size ? css`width: ${100/12*props.size}%;` : css`flex: 1;`}
    box-sizing: border-box;
`;