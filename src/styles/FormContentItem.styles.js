import { css } from 'styled-components';

export const container = css`
    position: relative;

    &:hover {
        > .overlay {
            display: flex;
            flex-flow: row nowrap;
        }
    }

    > .overlay {
        position: absolute;
        top: -10px;
        right: 0;
        border-radius: 10px;
        background: #efefef;
        border: 1px solid #cdcdcd;
        padding: 0 5px;
        line-height; 20px;
        display: none;
        font-size: 0.8;


    }
`;

