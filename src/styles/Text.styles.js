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

export const editorText = css`
    font: normal 14px sans-serif;
    line-height: 30px;
    display: block;
`;

export const editorHeader = css`
    font: normal 18px sans-serif;
    line-height: 30px;
    display: block;
    font-weight: bold;
`;