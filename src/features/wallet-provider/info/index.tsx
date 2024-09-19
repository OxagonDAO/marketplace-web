import { useWallet } from "@/features/wallet/model";


export const WalletInfo = () => {
  const { wallet } = useWallet();
  console.log(wallet)

    return wallet.address ? (
      <div className='flex-shrink-0 flex items-center justify-center'>
        <img 
          className='rounded-full'
          src={`https://www.gravatar.com/avatar/${wallet.address}?s=50&d=identicon`} 
          alt="ENS Avatar" 
          width={32} 
          height={32} 
        />
      </div>
    ) : (
      null
    )
  
}
