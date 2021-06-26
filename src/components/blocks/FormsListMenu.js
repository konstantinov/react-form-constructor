import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { getFormsDatesGroups} from '~/selectors/forms';
import { WhiteButton } from '~/components/atoms/Buttons';
import { SidebarList } from '~/components/atoms/List';
import { SidebarHeader, SidebarListItem } from '~/components/atoms/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

const FormsListMenu = () => {
    const groups = useSelector(getFormsDatesGroups);
    const dispatch = useDispatch();

    const { group } = useParams();

    const showGroup = (title) => dispatch(push(`/dates/${encodeURIComponent(title)}`));

    return <>
        <WhiteButton text="Create" icon={<FontAwesomeIcon icon={faPlus} />} onClick={() => dispatch(push('/create'))} />
        <SidebarHeader onClick={() => dispatch(push('/'))}>Forms</SidebarHeader>
        <SidebarList items={
            groups.map(currentGroup =>
                <SidebarListItem
                    key={currentGroup.title}
                    onClick={() => showGroup(currentGroup.title)}
                    active={group === currentGroup.title}
                >{currentGroup.title}</SidebarListItem>)
        } />
    </>;
};

export default FormsListMenu;