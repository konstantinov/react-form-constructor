import React, { useEffect } from 'react';
import Sidebar from '~/components/blocks/Sidebar';
import List from '~/components/blocks/List';
import { useDispatch, useSelector } from 'react-redux';
import { downloadForms } from '~/actions/forms';
import { getFormsDatesGroups } from '~/selectors/forms';
import { useParams} from 'react-router-dom';
import { push } from 'connected-react-router';

const FormsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(downloadForms());
    }, []);

    const { group } = useParams();


    const showGroup = (title) => dispatch(push(`/dates/${encodeURIComponent(title)}`));
    const groups = useSelector(getFormsDatesGroups);

    return <Sidebar content={
        <List items={
            groups.map(group => <span key={group.title} onClick={(e) => showGroup(group.title)}>{group.title}</span>)
        } />
    }>list</Sidebar>;
};

export default FormsList;