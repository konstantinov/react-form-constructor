import React from 'react';

import { EditorText } from '~/components/atoms/Text';

const TextItem = ({ item }) => <EditorText>{item.content || 'Empty text'}</EditorText>;
const FormContentItem = ({ item, index }) => {
    const controlsMap = {
        'text': TextItem,
    };

    const Control = controlsMap[item.type];

    return <Control item={item} />;
};


export default FormContentItem;