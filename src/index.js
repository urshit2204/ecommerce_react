import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <Auth0Provider
        domain="dev-5tctwlird2pe6qfc.us.auth0.com"
        clientId="qnPNQLqSSLwz7dAg2S1LeiyciJ4Ii7SW"

        redirectUri={window.location.origin}>
            <App />
    </Auth0Provider>,);