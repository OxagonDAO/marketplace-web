'use client';

import { I18nextProvider } from 'react-i18next';
import { createInstance, Resource } from 'i18next';
import { FC, ReactNode } from 'react';
import { initTranslations } from './init';

type Props = {
  children: ReactNode,
  locale: string,
  namespaces: string[],
  resources: Resource
}

export const TranslationsProvider: FC<Props> =(props) => {
  const {
    children,
    locale,
    namespaces,
    resources
  } = props

  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}