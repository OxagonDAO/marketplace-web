'use client';

import { store } from './index';
import { Provider } from 'react-redux';
/* import { setupListeners } from '@reduxjs/toolkit/dist/query'; */

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

/* setupListeners(store.dispatch); */
