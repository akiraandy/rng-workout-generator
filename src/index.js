import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, compose, applyMiddleware } from 'redux';
import playlistReducer from './store/reducers/playlist';
import { Provider } from 'react-redux';
import createSagaMiddleWare from 'redux-saga';
import { watchMuscleGroups} from './store/sagas/index';

const composeEnhancers = process.env.NODE_ENV ===  'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const sagaMiddleware = createSagaMiddleWare();

const store = createStore(playlistReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(watchMuscleGroups);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
