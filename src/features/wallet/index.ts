"use client"

import { walletModel } from "@/entities/wallet";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/types";
import { signIn } from "next-auth/react";


export function useWallet() {
  const dispatch = useAppDispatch();
  const wallet = useAppSelector((state: RootState) => state.wallet);

  const connect = async () => {
    const ethereum = window["ethereum" as any] as any
    if (typeof ethereum !== 'undefined') {
      try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' }) as string[];
        signIn("credentials", {
          address: accounts[0],
          chain: "metamask"
        })
        dispatch(walletModel.connectWallet({ address: accounts[0], provider: "metamask" }));
      } catch (err) {
        console.error('Error connecting to MetaMask', err);
      }
    } else {
      console.error('MetaMask not installed');
    }
  };

  const disconnect = () => {
    dispatch(walletModel.disconnectWallet());
  };

  return { wallet, connect, disconnect };
}
