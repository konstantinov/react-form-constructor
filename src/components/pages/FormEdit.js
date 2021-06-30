import React, { useEffect } from 'react';
import { Sidebar } from '~/components/atoms/Sidebar';
import { useDispatch } from 'react-redux';
import { downloadForms } from '~/actions/forms';
import { useParams} from 'react-router-dom';
import DraggableFormsList from '~/components/blocks/DraggableFormsList';
import DraggableControlsList from '~/components/blocks/DraggableControlsList';
import FormContent from '~/components/blocks/FormContent';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const FormEdit = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(downloadForms());
    }, []);

    const { id } = useParams();

    return <DndProvider backend={HTML5Backend}>
        <Sidebar content={
            <>
                <DraggableFormsList rejectId={id} />
                <DraggableControlsList />
            </>
        }>
            <FormContent id={id} />
        </Sidebar>
    </DndProvider>;
};

export default FormEdit;