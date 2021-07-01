import React from 'react';
import { useDrop } from 'react-dnd';
import FormContentItem from '~/components/blocks/FormContentItem';

import * as styles from '~/styles/Content.styles';

const Content = ({ content, onDrop, onDestroy, onEdit, onRemove }) => <>
    {content.map((contentItem, index) => <div key={index}>
        <ContentDropZone index={index} onDrop={onDrop} item={contentItem} />
        <FormContentItem
            item={contentItem}
            index={index}
            onEdit={onEdit}
            onRemove={onRemove}
            onCopy={onDrop}
            onDragEnd={onDestroy}
        />
    </div>)}
    <ContentDropZone index={content.length} onDrop={onDrop} />
</>;


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

export default Content;