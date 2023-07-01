import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ConanApp } from './ConanApp';
import { store } from './store';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ConanApp />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
