import React from 'react';

import * as styles from '~/styles/Grid.styles';



export const Row = ({ children }) => <div css={styles.row}>{children}</div>;

export const Col = ({ children, size }) => <div size={size} css={styles.col}>{children}</div>;