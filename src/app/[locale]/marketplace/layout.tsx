import { initTranslations, TranslationsProvider } from '@/intl'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { FC, PropsWithChildren } from 'react'
type Props = {
  params: { locale: string }
} & PropsWithChildren

const namespaces = ["common", "home", "marketplace"]

const Layout: FC<Props> = async ({ children, params: { locale } }) => {
  const { resources } = await initTranslations(locale, namespaces );
  
  return (
    <TranslationsProvider
      namespaces={namespaces}
      locale={locale}
      resources={resources}
    >
      <Header />
      {children}
      <Footer />
    </TranslationsProvider>
  )
}

export default Layout