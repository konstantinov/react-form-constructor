import React, { useEffect } from 'react';
import Sidebar from '~/components/blocks/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { downloadForms } from '~/actions/forms';
import { useParams} from 'react-router-dom';

const FormEdit = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(downloadForms());
    }, []);

    const { id } = useParams();

    return <Sidebar content={
        <>
            Cell layout
        </>
    }>
        formContent
    </Sidebar>;
};

export default FormEdit;