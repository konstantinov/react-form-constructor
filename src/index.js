import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from '~/store';
import FormsListPage from '~/components/pages/FormsList';
import FormEditPage from '~/components/pages/FormEdit';
import { ConnectedRouter } from 'connected-react-router';

const store = configureStore();

const App = () =>
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" exact component={FormsListPage} />
                <Route path="/dates/:group" component={FormsListPage} />
                <Route path="/edit/:id" component={FormEditPage} />
                <Route path="/create" component={FormEditPage} />
            </Switch>
        </ConnectedRouter>
    </Provider>
;

ReactDOM.render(<App />, document.getElementById('app'));
