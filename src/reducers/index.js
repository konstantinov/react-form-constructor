

import { downloadFormsSuccessAction } from '~/actions/forms';

export default (state, action) => {
    switch (action.type) {
    case downloadFormsSuccessAction:
        return {
            ...state,
            forms: action.payload,
        };
    }
    return state;
};