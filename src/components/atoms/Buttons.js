import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';

import * as styles from '~/styles/Buttons.styles';

const IconButton = forwardRef(({ onClick, text, icon, style}, ref) => (
    <div
        ref={ref}
        css={[ style, styles.iconButton ]}
        onClick={onClick}
    >
        <div css={styles.icon}>{icon}</div>
        <div css={styles.text}>{text}</div>
    </div>
));

export const WhiteButton = (props) => <IconButton {...props} style={styles.whiteButton } />;
export const BlueControlButton = forwardRef((props, ref) => <IconButton {...props} ref={ref} style={styles.control} icon={
    <FontAwesomeIcon icon={faArrowsAlt} />} />);

export const TinyButton = ({ text, onClick }) => <div onClick={onClick} css={styles.tinyButton}>{text}</div>;