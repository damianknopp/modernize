import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { client } from './apollo-client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './store';

const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </ApolloProvider>
  );
};

// if (process.env.NODE_ENV !== 'production' && module.hot) {
//   module.hot.accept('./App', renderApp);
// }

renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
