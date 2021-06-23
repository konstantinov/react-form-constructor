import { createSelector } from 'reselect';

import { getOr, groupBy, toPairs, sortBy, map, compose } from 'lodash/fp';
import { differenceInCalendarDays, format } from 'date-fns';

export const getForms = state => getOr([], 'forms', state);

export const getFormsGroupByDate = createSelector(
    getForms,
    groupBy(({ created }) => getDateGroup(created))
);

export const getFormsDatesGroups = createSelector(
    getFormsGroupByDate,
    compose(
        map(pair => ({
            title: pair[0],
            items: pair[1],
        })),
        sortBy((group) => -group[1][0].created.getTime()),
        toPairs,
    )
);
const getDateGroup = (date) => {
    const today = new Date();

    const difference = differenceInCalendarDays(today, date);

    return difference < 1 ? 'Today' :
        difference === 1 ? 'Yesterday' :
            difference < 3 ? 'Couple days ago' :
                difference < 7 ? 'This week' : format(date, 'd MMM yy');
};