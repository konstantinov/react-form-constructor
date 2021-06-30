import { css } from 'styled-components';


export const input = css`
    display: block;
    padding: 0 5px;
    line-height: 30px;
    border: 1px solid #cdcdcd;
    border-radius: 4px;
    font-size: 14px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
`;


export const fileInput = css`
    border: 1px dashed #cdcdcd;
    line-height: 30px;
    font-size: 14px;
    padding: 0 10px;
    border-radius: 15px;
    cursor: pointer;
    display: inline-flex;
    flex-flow: row nowrap;

    > label {
        cursor: pointer;

        > svg {
            margin: 0 5px 0 0;
        }
        >  input {
            display: none;
        }
    }
   `;