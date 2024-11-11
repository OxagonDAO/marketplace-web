import { useWeb3React } from '@web3-react/core'
import React, { useEffect, useState } from 'react'

const _symbols:Record<number, string> = {
  0: "",
  1: "ETH",
  137: "POL",
}

export const useBalance = () => {
  const { chainId, account, isActive, provider } = useWeb3React()
  const [balance, setBalance] = useState<string>("0")

  useEffect(() => {
    if(provider && account) {
      provider.getBalance(account).then((d) => {
        const balance = Number(BigInt(d._hex))/1e18
        setBalance(balance.toFixed(balance % 1 === 0 ? 0 : 4))
      })
    }
  }, [provider])

  return {
    amount: balance,
    amountAsNum: Number(balance),
    symbol: _symbols[chainId || 0]
  }
}
