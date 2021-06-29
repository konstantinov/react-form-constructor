import React from 'react';

import * as styles from '~/styles/Text.styles';

const Text = ({ style, ...props }) => <span {...props} css={style} />;

export const SidebarHeader = (props) => <Text {...props} style={styles.sidebarHeader} />;

export const SidebarListItem = (props) => <Text {...props} style={styles.sidebarListItem} />;
export const InnerSidebarListItem = (props) => <Text {...props} style={[ styles.innerTheme, styles.sidebarListItem ]} />;

export const EditorText = (props) => <Text {...props} style={styles.editorText} />;
export const EditorHeader = (props) => <Text {...props} style={styles.editorHeader} />;