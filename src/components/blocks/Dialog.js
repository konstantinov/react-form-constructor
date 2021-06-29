import React from 'react';

import * as styles from '~/styles/Dialog.styles';

const Dialog = ({ children }) => <div css={styles.overlay}><div css={styles.container}>{children}</div></div>;
export default Dialog;