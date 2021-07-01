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

export const tableRow = css`
    display: table-row;
    border: 1px solid #cdcdcd;
`;
export const tableCol = css`
    display: table-cell;
    border: 1px solid #cdcdcd;
`;

export const table = css`
    display: table;
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #cdcdcd;
    table-layout: fixed;
`;