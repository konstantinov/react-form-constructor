import React from 'react';

import * as styles from '~/styles/List.styles';

const List = ({ items, style }) => <ul css={style}>{items.map(
    (item, index) =>
        <li key={index}>{item}</li>
)}</ul>;

export const SidebarList = (props) => <List {...props} style={styles.simpleList} />;