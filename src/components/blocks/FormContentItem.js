import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faCopy, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { EditorText, EditorHeader } from '~/components/atoms/Text';

import * as styles from '~/styles/FormContentItem.styles';
import { TinyButton } from '~/components/atoms/Buttons';

const TextItem = ({ item }) => <EditorText>{item.content || '(Empty text)'}</EditorText>;

const FormContentItem = ({ item, index, onRemove, onEdit, onCopy }) => {
    const [ canDrag, setCanDrag ] = useState(false);
    const  [, drag ] = useDrag({
        type: 'box',
        item,
        canDrag: () => canDrag
    });

    const startDrag = (e) => {
        setCanDrag(true);
        e.stopPropagation();
    };
    const controlsMap = {
        'text': TextItem,
    };

    const Control = controlsMap[item.type];

    return <div css={styles.container} ref={drag} onMouseDown={() => setCanDrag(false)}>
        { item.label && <EditorHeader>{item.label}</EditorHeader>}
        <Control item={item} />
        <div className="overlay">
            <TinyButton text={<FontAwesomeIcon icon={faArrowsAlt} />} onMouseDown={startDrag} />
            <TinyButton text={<FontAwesomeIcon icon={faCopy} onClick={() => onCopy({ ...item }, index)} />} />
            <TinyButton text={<FontAwesomeIcon icon={faEdit} onClick={onEdit} />} />
            <TinyButton text={<FontAwesomeIcon icon={faTrash} onClick={() => onRemove(item)} />} />
        </div>
    </div>;
};


export default FormContentItem;