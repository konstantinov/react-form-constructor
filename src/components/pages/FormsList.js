import React, { useEffect } from 'react';
import Sidebar from '~/components/blocks/Sidebar';
import List from '~/components/blocks/List';
import { useDispatch, useSelector } from 'react-redux';
import { downloadForms } from '~/actions/forms';
import { getFormsDatesGroups } from '~/selectors/forms';

const FormsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(downloadForms());
    }, []);

    const groups = useSelector(getFormsDatesGroups);

    return <Sidebar content={
        <List items={
            groups.map(group => <a href="#" key={group.title}>{group.title}</a>)
        } />
    }>list</Sidebar>;
};

export default FormsList;