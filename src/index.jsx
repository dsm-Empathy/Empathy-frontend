import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter}  from 'react-router-dom';
import { CookiesProvider } from 'react-cookie'
import GlobalStyle from './styles/globalStyles';
import Header from './components/header';
import { Toaster } from 'react-hot-toast';
import { Colors } from './styles/theme/color';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
          <Toaster
              position="top-center"
              reverseOrder={true}
              gutter={8}
              toastOptions={{
                  className: '',
                  duration: 1000,
                  style: {
                      background: Colors.Neutral0,
                      color: Colors.Neutral10,
                  },
              }}
          />
        <Header />
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
