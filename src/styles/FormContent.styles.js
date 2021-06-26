import { css } from 'styled-components';

export const container = css`
    padding: 20px;
    flex: 1;
`;

export const dropZone = css`
    height: 20px;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        top: 8px;
        height: 4px;
        left: 20%;
        width: 60%;
        border-radius: 2px;
        ${props => props.isOver ? css`background: #027AFF;` : ''}
    }
`;