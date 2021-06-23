import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from '~/store';
import FormsListPage from '~/components/pages/FormsList';
import { ConnectedRouter } from 'connected-react-router';

const store = configureStore();

const App = () =>
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" exact component={FormsListPage} />
                <Route path="/dates/:group" component={FormsListPage} />
            </Switch>
        </ConnectedRouter>
    </Provider>
;

ReactDOM.render(<App />, document.getElementById('app'));
