
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type WalletProvider = "metamask"

type WalletState = {
  address: string | null;
  connected: boolean;
  provider: WalletProvider | null;
}

const initialState: WalletState = {
  address: null,
  connected: false,
  provider: null,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    connectWallet: (state, action: PayloadAction<{ address: string; provider: WalletProvider }>) => {
      state.address = action.payload.address;
      state.provider = action.payload.provider;
      state.connected = true
    },
    disconnectWallet: (state) => {
      state.address = null;
      state.provider = null;
      state.connected = false
    },
  },
});

export const { connectWallet, disconnectWallet } = walletSlice.actions;
export const { name, reducer } = walletSlice
