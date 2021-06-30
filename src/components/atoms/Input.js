import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import * as styles from '~/styles/Input.styles';


export const Input = ({ value, name, onChange }) => <input name={name} css={styles.input} value={value ?? ''} onChange={onChange || (() => 1)} />;

export const FileInput = ({ onChange, name, disabled }) => <div css={styles.fileInput}>
    <label>
        <FontAwesomeIcon icon={faFileUpload} />
        Choose file
        <input type="file" name={name} onChange={onChange} disabled={disabled} />
    </label>
</div>;