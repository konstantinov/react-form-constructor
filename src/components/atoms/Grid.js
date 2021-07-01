import React from 'react';

import * as styles from '~/styles/Grid.styles';



export const Row = ({ children }) => <div css={styles.row}>{children}</div>;
export const TableRow = ({ children }) => <div css={[styles.row, styles.tableRow]}>{children}</div>;

export const Col = ({ children, size }) => <div size={size} css={styles.col}>{children}</div>;
export const TableCol = ({ children, size }) => <div size={size} css={[ styles.col, styles.tableCol ]}>{children}</div>;

export const Table = ({ children }) => <div css={styles.table}>{children}</div>;