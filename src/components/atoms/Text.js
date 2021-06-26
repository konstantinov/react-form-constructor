import React, { forwardRef } from 'react';

import * as styles from '~/styles/Text.styles';

const Text = forwardRef(({ style, ...props }, ref) => <span ref={ref} {...props} css={style} />);

export const SidebarHeader = (props) => <Text {...props} style={styles.sidebarHeader} />;

export const SidebarListItem = (props) => <Text {...props} style={styles.sidebarListItem} />;
export const InnerSidebarListItem = (props) => <Text {...props} style={[ styles.innerTheme, styles.sidebarListItem ]} />;

export const SidebarControl = forwardRef((props, ref) => <Text ref={ref} {...props} style={styles.control} />);