import React, { useEffect } from 'react';
import Sidebar from '~/components/blocks/Sidebar';

import { useDispatch } from 'react-redux';
import { downloadForms } from '~/actions/forms';

const FormsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(downloadForms());
    });

    return <Sidebar content={
        <div>test</div>
    }>list</Sidebar>;
};

export default FormsList;