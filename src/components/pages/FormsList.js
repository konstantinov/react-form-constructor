import React, { useEffect } from 'react';
import Sidebar from '~/components/blocks/Sidebar';
import { useDispatch } from 'react-redux';
import { downloadForms } from '~/actions/forms';
import { useParams} from 'react-router-dom';
import FormsListMenu from '~/components/blocks/FormsListMenu';
import FormsListBlock from '~/components/blocks/FormsListBlock';

const FormsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(downloadForms());
    }, []);

    const { group } = useParams();

    return <Sidebar content={
        <FormsListMenu />
    }>
        <Sidebar
            theme="inner"
            content={
                <FormsListBlock group={group} />
            }
        ></Sidebar>
    </Sidebar>;
};

export default FormsList;