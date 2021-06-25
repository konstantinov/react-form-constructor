import { push } from 'connected-react-router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getForms, getGroupForms } from '~/selectors/forms';
import { SidebarList } from '~/components/atoms/List';
import { InnerSidebarListItem } from '~/components/atoms/Text';

const FormsListBlock = ({ group }) => {
    const forms = useSelector(group ? getGroupForms(group) : getForms);
    const dispatch = useDispatch();

    return <SidebarList items={
        forms.map(form =>
            <InnerSidebarListItem
                key={form._id}
                onClick={() => dispatch(push(`/edit/${form._id}`))}
            >{form.name}</InnerSidebarListItem>
        )
    }></SidebarList>;
};

export default FormsListBlock;
