import React, { useEffect } from 'react';
import DoubleSidebar from '~/components/templates/DoubleSidebar';
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

    return <DoubleSidebar
        leftSidebar={<FormsListMenu />}
        rightSidebar={<FormsListBlock group={group} />}
    />;
};

export default FormsList;