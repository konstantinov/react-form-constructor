import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faDownload } from '@fortawesome/free-solid-svg-icons';

import * as styles from '~/styles/Buttons.styles';

const IconButton = forwardRef(({ onClick, text, icon, style}, ref) => (
    <div
        ref={ref}
        css={[ style, styles.iconButton ]}
        onClick={onClick}
    >
        { icon && <div css={styles.icon}>{icon}</div> }
        <div css={styles.text}>{text}</div>
    </div>
));

export const WhiteButton = (props) => <IconButton {...props} style={styles.whiteButton } />;
export const BlueButton = (props) => <IconButton {...props} style={styles.blueButton } />;
export const PinnedSaveButton = (props) => <IconButton {...props} icon={<FontAwesomeIcon icon={faDownload} />} style={styles.pinnedSave} />;
export const BlueControlButton = forwardRef((props, ref) => <IconButton {...props} ref={ref} style={styles.control} icon={
    <FontAwesomeIcon icon={faArrowsAlt} />} />);

export const TinyButton = forwardRef( ({ text, onClick, onMouseDown }, ref) => <div
    ref={ref}
    onClick={onClick}
    onMouseDown={onMouseDown}
    css={styles.tinyButton}
>{text}</div> );