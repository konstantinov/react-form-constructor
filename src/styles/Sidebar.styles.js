import { css } from 'styled-components';

export const menu = css`
    width: 250px;
    flex-grow: 0;
    background: #027AFF;
    color: #fff;

    a {
        color: #fff;
        text-decoration: none;
        display: block;
        padding: 5px 20px;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
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
`;

