import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from '@routes';
import store from '@store'
import { Provider } from 'react-redux';
import '@styles/style.scss';

const App = () => (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(<App/>, document.getElementById('root'))
