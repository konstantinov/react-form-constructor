import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getOr, set, update, reject, compose } from 'lodash/fp';
import { useDrop } from 'react-dnd';
import { getForm } from '~/selectors/forms';
import FormContentItem from '~/components/blocks/FormContentItem';
import Dialog from '~/components/blocks/Dialog';
import { Row, Col } from '~/components/atoms/Grid';
import { EditorHeader } from '~/components/atoms/Text';
import { BlueButton } from '~/components/atoms/Buttons';

import * as styles from '~/styles/FormContent.styles';


const FormContent = ({ id }) => {
    const form = id ? useSelector(getForm(id)) : undefined;
    const [ localForm, setLocalForm ] = useState(form);
    const [ isEditVisible, setIsEditVisible ] = useState(false);
    const [ editItem, setEditItem ] = useState();

    useEffect(() => {
        form && setLocalForm(form);
    }, [ form ]);

    const handleDrop = useCallback((item, index) => {
        const content = compose(
            reject((control) => control === item),
            getOr([], 'content')
        )(localForm);
        const newContent = [
            ...content.slice(0, index),
            { ...item },
            ...content.slice(index)
        ];

        setLocalForm(set('content', newContent, localForm));
    }, [ localForm ]);

    const handleEdit = useCallback((item) => {
        setEditItem(item);
        setIsEditVisible(true);
    });

    const handleRemove = useCallback((item) => {
        setLocalForm(update('content', reject((control) => control === item), localForm));
    }, [ localForm ]);

    return <div css={styles.container}>
        {localForm && localForm.content.map((contentItem, index) => <div key={index}>
            <ContentDropZone index={index} onDrop={handleDrop} item={contentItem} />
            <FormContentItem
                item={contentItem}
                index={index}
                onEdit={handleEdit}
                onRemove={handleRemove}
                onCopy={handleDrop}
            />
        </div>)}
        <ContentDropZone index={localForm?.content.length ?? 0} onDrop={handleDrop} />
        { isEditVisible && (
            <Dialog>
                <FormContentItemsEdit
                    item={editItem}
                    onCancel={() => setIsEditVisible(false)}
                />
            </Dialog>
        ) }
    </div>;
};


const ContentDropZone = ({ index, onDrop, item }) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: 'box',
        drop: (item) => onDrop(item, index),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
        canDrop: (dropItem) => !item || dropItem !== item
    });

    return <div ref={drop} css={styles.dropZone} isOver={isOver && canDrop} />;

};

const FormContentItemsEdit = ({ item, onSave, onCancel }) => {
    const [ name, setName ] = useState(item.name);
    const [ lable, setLabel ] = useState(item.label);
    return <>
        <Row>
            <Col size={6}>
                <EditorHeader>Name</EditorHeader>
            </Col>
            <Col size={6}>
                <EditorHeader>Label</EditorHeader>
            </Col>
        </Row>
        <Row>
            <Col size={8} />
            <Col size={4}>
                <BlueButton text="Save" />
            </Col>
        </Row>
    </>;
};


export default FormContent;