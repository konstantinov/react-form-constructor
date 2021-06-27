import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getOr, set, update, reject } from 'lodash/fp';
import { useDrop } from 'react-dnd';
import { getForm } from '~/selectors/forms';
import FormContentItem from '~/components/blocks/FormContentItem';

import * as styles from '~/styles/FormContent.styles';


const FormContent = ({ id }) => {
    const form = id ? useSelector(getForm(id)) : undefined;
    const [ localForm, setLocalForm ] = useState(form);

    useEffect(() => {
        form && setLocalForm(form);
    }, [form]);

    const handleDrop = useCallback((item, index) => {
        const newContent = [
            ...getOr([], 'content', localForm).slice(0, index),
            item,
            ...getOr([], 'content', localForm).slice(index)
        ];

        setLocalForm(set('content', newContent, localForm));
    }, [ localForm ]);

    const handleRemove = useCallback((item) => {
        setLocalForm(update('content', reject((control) => control == item), localForm));
    }, [ localForm ]);

    return <div css={styles.container}>
        {localForm && localForm.content.map((contentItem, index) => <div key={index}>
            <ContentDropZone index={index} onDrop={handleDrop} />
            <FormContentItem item={contentItem} index={index} onRemove={handleRemove} />
        </div>)}
        <ContentDropZone index={localForm?.content.length ?? 0} onDrop={handleDrop} />
    </div>;
};


const ContentDropZone = ({ index, onDrop }) => {
    const [{ isOver }, drop] = useDrop({
        accept: 'box',
        drop: (item) => onDrop(item, index),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    return <div ref={drop} css={styles.dropZone} isOver={isOver} />;

};


export default FormContent;