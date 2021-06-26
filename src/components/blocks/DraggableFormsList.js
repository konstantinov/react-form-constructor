import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';

import { getForms } from '~/selectors/forms';
import { TinyButton} from '~/components/atoms/Buttons';
import { SidebarHeader, SidebarListItem } from '~/components/atoms/Text';
import { push } from 'connected-react-router';

import * as styles from '~/styles/DraggableFormsList.styles';

const DraggableFormsList = () => {
    const dispatch = useDispatch();

    const forms = useSelector(getForms);

    return <div css={styles.container}>
        <div css={styles.headerRow}>
            <SidebarHeader>Forms</SidebarHeader>
            <TinyButton text="+" onClick={() => dispatch(push('/create'))} />
        </div>
        {forms.map(form => <Draggable form={form} key={form._id} /> )}
    </div>;
};

const Draggable = ({ form }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'box',
        item: form,
    }));

    return <div ref={drag}><SidebarListItem>{form.name}</SidebarListItem></div>;
};

export default DraggableFormsList;