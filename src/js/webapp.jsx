import React from "react";
import ReactDOM from "react-dom";

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import * as Components from './components';
import reducers from './reducers';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware, logger)
)

const webapp = () => { return(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Components.Header />
                <Route exact path="/" component={Components.Home} />
                <Route path="/log" component={Components.Log} />
                <Components.Footer />
            </div>
        </ConnectedRouter>
    </Provider>
)};

ReactDOM.render(webapp(), document.getElementById("webapp"));
