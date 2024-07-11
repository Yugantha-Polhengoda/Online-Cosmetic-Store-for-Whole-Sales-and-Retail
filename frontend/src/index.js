import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CampaignsContextProvider } from './context/CampaignContext';
import { AddstocksContextProvider } from './context/AddstockContext';
import { DiscountsContextProvider } from './context/DiscountContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CampaignsContextProvider>
    <AddstocksContextProvider>
      <DiscountsContextProvider>
    <App />
    </DiscountsContextProvider>
    </AddstocksContextProvider>
    </CampaignsContextProvider>
  </React.StrictMode>

  
)