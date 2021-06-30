import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import { App, Credentials } from 'realm-web';
import { set, omit } from 'lodash/fp';
import { downloadForms, downloadFormsAction, downloadFormsSuccess, saveFormAction, saveFormSuccess } from '~/actions/forms';

export function* downloadFormsSaga() {
    yield takeLatest(
        downloadFormsAction,
        function* () {
            const app = new App({ id: 'application-1-wuwtq' });
            const credentials = Credentials.anonymous();
            try {
                const user = yield app.logIn(credentials);
                const forms = yield app.currentUser.mongoClient('mongodb-atlas').db('makeen').collection('forms').find({});

                yield put(downloadFormsSuccess(forms));
            } catch(err) {
                console.error('Failed to connect database', err);
            }

        }
    );
}

export function* saveFormSaga() {
    yield takeEvery(
        saveFormAction,
        function* ({ payload: form }) {
            const app = new App({ id: 'application-1-wuwtq' });
            const credentials = Credentials.anonymous();
            try {
                const user = yield app.logIn(credentials);

                if (!form._id) {
                    yield app.currentUser.mongoClient('mongodb-atlas').db('makeen').collection('forms').insertOne(set('created', new Date(), form));
                } else {
                    yield app.currentUser.mongoClient('mongodb-atlas').db('makeen').collection('forms').updateOne({ _id: form._id }, { $set: omit([ '_id', 'created' ], form) });
                }
                yield put(downloadForms());
                yield put(saveFormSuccess());
            } catch(err) {
                console.error('Failed to connect database', err);
            }
        }
    );
}