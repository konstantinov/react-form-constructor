import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getOr, set, update, reject, compose } from 'lodash/fp';
import { useDrop } from 'react-dnd';
import { getForm } from '~/selectors/forms';
import FormContentItem from '~/components/blocks/FormContentItem';

import * as styles from '~/styles/FormContent.styles';


const FormContent = ({ id }) => {
    const form = id ? useSelector(getForm(id)) : undefined;
    const [ localForm, setLocalForm ] = useState(form);

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

    const handleRemove = useCallback((item) => {
        setLocalForm(update('content', reject((control) => control === item), localForm));
    }, [ localForm ]);

    return <div css={styles.container}>
        {localForm && localForm.content.map((contentItem, index) => <div key={index}>
            <ContentDropZone index={index} onDrop={handleDrop} item={contentItem} />
            <FormContentItem
                item={contentItem}
                index={index}
                onRemove={handleRemove}
                onCopy={handleDrop}
            />
        </div>)}
        <ContentDropZone index={localForm?.content.length ?? 0} onDrop={handleDrop} />
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


export default FormContent;