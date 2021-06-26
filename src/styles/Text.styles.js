import { css } from 'styled-components';

export const sidebarHeader = css`
    ${ props => props.onClick ? css`cursor: pointer;` : '' }
    font: bold 16px sans-serif;
    margin: 20px 0;
    display: block;
    flex: 1;
`;

export const sidebarListItem = css`
    line-height: 2;
    cursor: pointer;
    display: block;
    margin: 0 -20px 0 -40px;
    padding: 0 20px 0 40px;
    ${props => props.active ? css`background: #1B87FF` : ''}
`;

export const innerTheme = css`
    &:hover {
        background: #ECECEC;
    }
`;

export const control = css`
    border: dashed 1px white;
    text-align: center;
    display: block;
    border-radius: 15px;
    line-height: 30px;
    cursor: pointer;
    margin: 15px 0;
    position: relative;

    &:before {
        content: '↨';
        position: absolute;
        left: 15px;
        top: -1px;
        font-size: 200%;
    }
`;