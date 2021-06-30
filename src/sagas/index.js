import { all } from 'redux-saga/effects';

import { downloadFormsSaga, saveFormSaga } from '~/sagas/forms';

export default function* sagas() {
    yield all([
        downloadFormsSaga(),
        saveFormSaga(),
    ]);
}