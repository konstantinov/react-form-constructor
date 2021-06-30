import React from 'react';

import * as styles from '~/styles/Input.styles';


export const Input = ({ value, onChange }) => <input css={styles.input} value={value ?? ''} onChange={onChange} />;