import { css } from 'styled-components';

export const divider = css`
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
        background: #cfcfcf;
    }
`;