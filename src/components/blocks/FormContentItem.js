import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faCopy, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { EditorText } from '~/components/atoms/Text';

import * as styles from '~/styles/FormContentItem.styles';
import { TinyButton } from '~/components/atoms/Buttons';

const TextItem = ({ item }) => <EditorText>{item.content || '(Empty text)'}</EditorText>;

const FormContentItem = ({ item, index, onRemove, onEdit, onCopy }) => {
    const controlsMap = {
        'text': TextItem,
    };

    const Control = controlsMap[item.type];

    return <div css={styles.container}>
        <Control item={item} />
        <div className="overlay">
            <TinyButton text={<FontAwesomeIcon icon={faArrowsAlt} />} />
            <TinyButton text={<FontAwesomeIcon icon={faCopy} onClick={() => onCopy(item, index)} />} />
            <TinyButton text={<FontAwesomeIcon icon={faEdit} onClick={onEdit} />} />
            <TinyButton text={<FontAwesomeIcon icon={faTrash} onClick={() => onRemove(item)} />} />
        </div>
    </div>;
};


export default FormContentItem;