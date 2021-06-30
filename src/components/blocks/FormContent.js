import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOr, set, update, reject, compose, findIndex } from 'lodash/fp';
import Content from '~/components/blocks/Content';
import { getForm } from '~/selectors/forms';
import Dialog from '~/components/blocks/Dialog';
import { Row, Col } from '~/components/atoms/Grid';
import { EditorHeader } from '~/components/atoms/Text';
import { BlueButton, PinnedSaveButton } from '~/components/atoms/Buttons';
import { Input } from '~/components/atoms/Input';
import { saveForm } from '~/actions/forms';

import * as styles from '~/styles/FormContent.styles';


const FormContent = ({ id }) => {
    const dispatch = useDispatch();
    const form = useSelector(getForm(id));
    const [ localForm, setLocalForm ] = useState(form);
    const [ isEditVisible, setIsEditVisible ] = useState(false);
    const [ editItem, setEditItem ] = useState();

    useEffect(() => {
        setLocalForm(form);
    }, [ form?._id ]);

    const handleDrop = useCallback((item, index) => {
        const content = getOr([], 'content', localForm);
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

    const handleSave = useCallback((newItem) => {
        const index = findIndex(editItem, localForm.content);

        setLocalForm(update('content', set(
            index,
            newItem,
        ), localForm));
        setIsEditVisible(false);
    }, [ editItem, localForm ]);

    const handleRemove = useCallback((item) => {
        setLocalForm(update('content', reject((control) => control === item), localForm));
    }, [ localForm ]);

    const handleDestroyItem = useCallback((item) => {
        setLocalForm(update(
            'content',
            reject((contentItem) => contentItem === item),
            localForm
        ));
    }, [ localForm ]);

    const handleSaveForm = useCallback(() => {
        dispatch(saveForm(localForm));
    }, [ localForm ]);
    return <div css={styles.container}>
        { localForm && <Content content={localForm.content} onEdit={handleEdit} onDrop={handleDrop} onRemove={handleRemove} onDestroy={handleDestroyItem} /> }
        { isEditVisible && (
            <Dialog>
                <FormContentItemsEdit
                    item={editItem}
                    onCancel={() => setIsEditVisible(false)}
                    onSave={handleSave}
                />
            </Dialog>
        ) }
        <PinnedSaveButton onClick={handleSaveForm} text="Save" />
    </div>;
};




const FormContentItemsEdit = ({ item, onSave, onCancel }) => {
    const [ editItem, setEditItem ] = useState(item);

    return <>
        <Row>
            <Col size={6}> { item.type === 'text' ? <>
                <EditorHeader>Text</EditorHeader>
                <Input value={editItem.content} onChange={({ target: { value } }) => setEditItem(set('content', value, editItem))} />
            </> : item.type !== 'form' ? <>
                <EditorHeader>Name</EditorHeader>
                <Input value={editItem.name} onChange={({ target: { value } }) => setEditItem(set('name', value, editItem))} />
            </> : null}
            </Col>
            <Col size={6}>
                <EditorHeader>Label</EditorHeader>
                <Input value={editItem.label} onChange={({ target: { value } }) => setEditItem(set('label', value, editItem))} />
            </Col>
        </Row>
        <Row>
            <Col size={8} />
            <Col size={2}>
                <BlueButton text="Cancel" onClick={onCancel} />
            </Col>
            <Col size={2}>
                <BlueButton text="Save" onClick={() => onSave(editItem)} />
            </Col>
        </Row>
    </>;
};


export default FormContent;