import React from 'react';

import * as styles from '~/styles/Header.styles';

const Header = ({ children, onClick }) => <h1 onClick={onClick} css={styles.header}>{children}</h1>;

export default Header;