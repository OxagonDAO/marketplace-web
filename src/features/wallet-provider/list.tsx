import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Metamask } from './metamask'

type Props = {/* 
  onSuccess: () => void,
  onError: () => void */
}

export const WalletProviderList: FC<Props> = (props) => {
  /* const { onError, onSuccess } = props
  const { t } = useTranslation("connect-wallet") */

  return (
    <ul className='space-y-4 mt-12 w-max mx-auto'>
      <Metamask />
     
    </ul>
  )
}
