import { put, takeLatest } from 'redux-saga/effects';
import { App, Credentials } from 'realm-web';
import { downloadFormsAction, downloadFormsSuccess } from '~/actions/forms';

export function* downloadForms() {
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