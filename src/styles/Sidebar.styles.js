import { css } from 'styled-components';

export const menu = css`
    width: 220px;
    flex-grow: 0;
    ${props => props.theme === 'root' ?
        css`
            background: #027AFF;
            color: #fff;
        ` :
        css`
            background: #F6F6F6;
            color: #000;
        ` }
    font: bold 12px sans-serif;
    padding: 20px;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        margin-left: 20px;
    }
`;

export const container = css`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
`;

export const content = css`
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
`;

