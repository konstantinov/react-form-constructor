import React, { useEffect } from 'react';
import Sidebar from '~/components/blocks/Sidebar';
import List from '~/components/atoms/List';
import { useDispatch, useSelector } from 'react-redux';
import { downloadForms } from '~/actions/forms';
import { getFormsDatesGroups, getGroupForms, getForms } from '~/selectors/forms';
import { useParams} from 'react-router-dom';
import { push } from 'connected-react-router';
import Header from '~/components/atoms/Header';

import * as styles from '~/styles/FormsList.styles';

const FormsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(downloadForms());
    }, []);

    const { group } = useParams();


    const showGroup = (title) => dispatch(push(`/dates/${encodeURIComponent(title)}`));
    const groups = useSelector(getFormsDatesGroups);
    const forms = useSelector(group ? getGroupForms(group) : getForms);

    return <Sidebar content={
        <>
            <Header onClick={() => dispatch(push('/'))}>Forms</Header>
            <List items={
                groups.map(currentGroup =>
                    <span
                        key={currentGroup.title}
                        onClick={() => showGroup(currentGroup.title)}
                        css={styles.menuItem}
                        active={group === currentGroup.title}
                    >{currentGroup.title}</span>)
            } />
        </>
    }>
        <Sidebar
            theme="inner"
            content={
                <List items={
                    forms.map(form =>
                        <span css={styles.menuItem} key={form.id} theme="inner">{form.name}</span>
                    )
                }></List>
            }
        ></Sidebar>
    </Sidebar>;
};

export default FormsList;