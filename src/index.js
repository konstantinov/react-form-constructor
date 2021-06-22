import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from '~/reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from '~/sagas';

import FormsListPage from '~/components/pages/FormsList';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    RootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

const App = () =>
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={FormsListPage} />
            </Switch>
        </BrowserRouter>
    </Provider>
;

ReactDOM.render(<App />, document.getElementById('app'));
