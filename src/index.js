import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from '~/reducers';

import FormsListPage from '~/components/pages/FormsList';

const store = createStore(RootReducer);

const App = () =>
    <Provider store={store}>
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={FormsListPage} />
        </Switch></BrowserRouter>
    </Provider>
;

ReactDOM.render(<App />, document.getElementById('app'));
