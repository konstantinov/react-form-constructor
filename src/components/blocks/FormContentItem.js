import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faCopy, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { reject, set } from 'lodash/fp';

import { EditorText, EditorHeader } from '~/components/atoms/Text';
import { getForm } from '~/selectors/forms';
import { TableCol, TableRow, Table } from '~/components/atoms/Grid';

import * as styles from '~/styles/FormContentItem.styles';
import { TinyButton } from '~/components/atoms/Buttons';
import { Input, FileInput, Checkbox } from '~/components/atoms/Input';
import { Divider } from '~/components/atoms/Divider';
import { useSelector } from 'react-redux';
import Content from '~/components/blocks/Content';
import { insertItem } from '~/utils';

const TextItem = ({ item }) => <EditorText>{item.content || '(Empty text)'}</EditorText>;

const FormItem = ({ item }) => {
    const form = useSelector(getForm(item.id));

    return <>
        {form.content?.map((item, index) =>
            <FormContentItem key={index} item={item} disabled />
        )}
    </>;
};

const CellLayoutItem = ({ item, onEdit, onDrop }) =>{

    const handleDrop = (droppedItem, index, content, row, col, replace = false) => {
        const newContent = insertItem(content, droppedItem, index, replace);

        onDrop(set(`content.${row}.${col}`, newContent, item), true);
    };

    const handleDestroy = (destroyItem, content, row, col) => {
        const newContent = reject((contentItem) => contentItem === destroyItem, content);

        onDrop(set(`content.${row}.${col}`, newContent, item));
    };

    return <Table>
        {item.content?.map((row, i) => <TableRow key={i}>
            {row.map((col, j) => <TableCol key={j}>
                <Content
                    onEdit={onEdit}
                    content={col}
                    onDrop={(item, index, replace) => handleDrop(item, index, col, i, j, replace)}
                    onDestroy={(item) => handleDestroy(item, col,  i, j)}
                    onRemove={(item) => handleDestroy(item, col,  i, j)}
                />
            </TableCol>)}
        </TableRow>)}
    </Table>;};

const FormContentItem = ({ item, index, onRemove, onEdit, onCopy, disabled, onDragEnd, onDrop }) => {
    const [ canDrag, setCanDrag ] = useState(false);
    const  [, drag ] = useDrag({
        type: 'box',
        item,
        canDrag: () => canDrag,
        end: (item, monitor) => monitor.didDrop() && onDragEnd(item)
    });

    const startDrag = (e) => {
        setCanDrag(true);
        e.stopPropagation();
    };
    const controlsMap = {
        'text': TextItem,
        'input': Input,
        'divider': Divider,
        'uploader': FileInput,
        'checkbox': Checkbox,
        'form': FormItem,
        'table': CellLayoutItem,
    };

    const Control = controlsMap[item.type];

    const handleDrop = (newItem) => {
        onDrop(newItem, index, true);
    };

    return disabled ? <div css={styles.container}>
        { item.label && item.type !== 'checkbox' && <EditorHeader>{item.label}</EditorHeader>}
        <Control item={item} label={item.label} disabled />
    </div>  : <div css={styles.container} ref={drag} onMouseDown={() => setCanDrag(false)}>
        { item.label && item.type !== 'checkbox' && <EditorHeader>{item.label}</EditorHeader>}
        <Control
            item={item}
            label={item.label}
            disabled
            onEdit={onEdit}
            onDrop={handleDrop}
        />
        <div className="overlay">
            <TinyButton text={<FontAwesomeIcon icon={faArrowsAlt} />} onMouseDown={startDrag} />
            <TinyButton text={<FontAwesomeIcon icon={faCopy} onClick={() => onCopy({ ...item }, index)} />} />
            { item.type !== 'divider' && <TinyButton text={<FontAwesomeIcon icon={faEdit} onClick={() => onEdit(item)} />} /> }
            <TinyButton text={<FontAwesomeIcon icon={faTrash} onClick={() => onRemove(item)} />} />
        </div>
    </div>;
};


export default FormContentItem;