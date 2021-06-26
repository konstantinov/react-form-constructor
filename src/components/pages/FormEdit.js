import React, { useEffect } from 'react';
import Sidebar from '~/components/blocks/Sidebar';
import { useDispatch } from 'react-redux';
import { downloadForms } from '~/actions/forms';
import { useParams} from 'react-router-dom';
import DraggableFormsList from '~/components/blocks/DraggableFormsList';
import DraggableControlsList from '~/components/blocks/DraggableControlsList';
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
                <DraggableFormsList />
                <DraggableControlsList />
            </>
        }>
        formContent
        </Sidebar>
    </DndProvider>;
};

export default FormEdit;