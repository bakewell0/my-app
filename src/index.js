import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import * as serviceWorker from './serviceWorker';
import Router from './router'
import {counter} from './redux/reducers'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(counter,
	applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)

ReactDOM.render(
	 <Provider store={store}>
	 	<Router/>
	 </Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
