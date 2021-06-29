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

export const blueButton = css`
    background: #027AFF;
    border-radius: 4px !important;
    line-height: 30px;
    font-size: 14px;
    color: #fff;

    &:hover {
        background: #229AFF;
    }
`;

export const tinyButton = css`
    flex: 0;
    cursor: pointer;
    padding: 0 3px;
`;

export const control = css`
    border: dashed 1px white;
    text-align: center;
    display: block;
    border-radius: 15px;
    line-height: 30px;
    cursor: pointer;
    margin: 15px 0;

`;