import { css } from 'styled-components';


export const container = css`
    width: 80vw;
    padding: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    border-radius: 4px;
    border: 1px solid #cdcdcd;
`;
export const overlay = css`
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,.5);
    top: 0;
    left: 0;
`;