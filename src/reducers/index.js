

import { downloadFormsSuccessAction } from '~/actions/forms';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const formsReducer = (state = [], action) => {
    switch (action.type) {
    case downloadFormsSuccessAction:
        return action.payload;
    }
    return state;
};

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    forms: formsReducer,
});
export default createRootReducer;

