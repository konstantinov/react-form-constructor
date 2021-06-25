import React from 'react';

import * as styles from '~/styles/Buttons.styles';

const IconButton = ({ onClick, text, icon, style}) => (
    <div
        css={[ style, styles.iconButton ]}
        onClick={onClick}
    >
        <div css={styles.icon}>{icon}</div>
        <div css={styles.text}>{text}</div>
    </div>
);

export const WhiteButton = (props) => <IconButton {...props} style={styles.whiteButton } />;