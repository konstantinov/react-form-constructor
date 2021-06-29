import React from 'react';

import * as styles from '~/styles/Dialog.styles';

const Dialog = ({ children }) => <div css={styles.container}>{children}</div>;
export default Dialog;