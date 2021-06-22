import { all } from 'redux-saga/effects';

import { downloadForms } from '~/sagas/forms';

export default function* sagas() {
    yield all([
        downloadForms(),
    ]);
}