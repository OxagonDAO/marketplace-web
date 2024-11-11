import { UserProfile, UserTabsProfile } from '@/widgets/user'
import { FC, PropsWithChildren, ReactNode } from 'react'

type Props = {
  params: { locale: string },
  onsale: ReactNode,
  creations: ReactNode,
  likes: ReactNode,
  followers: ReactNode,
  following: ReactNode,
} & PropsWithChildren



const Layout: FC<Props> = async (props) => {
  const {
    creations,
    followers,
    following,
    likes,
    onsale,
    params,
    children
  } = props
    
  return (
    <>
      <section>
        <UserProfile />
      </section>
      <UserTabsProfile
        onSale={onsale}
        creations={creations}
        followers={followers}
        following={following}
        likes={likes}
      />
      {children}
    </>
  )
}

export default Layout