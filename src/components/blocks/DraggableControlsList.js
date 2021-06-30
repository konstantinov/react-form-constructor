import React from 'react';
import { useDrag } from 'react-dnd';
import { SidebarHeader } from '~/components/atoms/Text';
import { BlueControlButton } from '~/components/atoms/Buttons';

const DraggableControlsList = () => {

    return <>
        <SidebarHeader>Cell layout </SidebarHeader>
        <Draggable control={{ name: 'Table', type: 'table' }} />
        <SidebarHeader>Form components</SidebarHeader>
        <Draggable control={{ name: 'Input', type: 'input' }} />
        <Draggable control={{ name: 'Checkbox', type: 'checkbox' }} />
        <Draggable control={{ name: 'File uploader', type: 'uploader' }} />
        <Draggable control={{ name: 'Text', type: 'text' }} />
        <Draggable control={{ name: 'Divider', type: 'divider' }} />
    </>;
};

const Draggable = ({ control }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'box',
        item: control,
    }));

    return <BlueControlButton ref={drag} text={control.name} />;
};

export default DraggableControlsList;