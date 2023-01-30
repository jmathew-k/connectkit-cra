import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css';
import App from './App';

import { WagmiConfig, createClient } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';

const client = createClient(
  getDefaultClient({
    appName: 'ConnectKit CRA demo',
    //infuraId: process.env.REACT_APP_INFURA_ID,
    //alchemyId:  process.env.REACT_APP_ALCHEMY_ID,
    chains: [mainnet, polygon, optimism, arbitrum],
  })
);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="auto">
        <App />
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

