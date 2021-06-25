import { css } from 'styled-components';

export const iconButton = css`
    line-height: 30px;
    border-radius: 15px;
    display: flex;
    flex-flow: row nowrap;
    cursor: pointer;
    font: bold 15px  sans-serif;
    justify-content: center;
    align-items: center;
`;

export const icon = css`
    flex: 0;
    margin-left: 15px;
`;

export const text = css`
    flex: 1;
    line-height: 30px;
    text-align: center;
`;

export const whiteButton = css`
    color: #027AFF;
    background: #fff;
`;