import { Button, Input } from '@/shared/ui'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const AuthSignInForm = () => {
  const { t } = useTranslation("auth")
  

  return (
    <form className="space-y-4 mt-8">
      <Input type="email" id="email" label={t("sign-in.email")} />
      <Input type="password" id="password"  label={t("sign-in.password")} />

      <div className="flex justify-between items-center">
        {/* <RememberMe /> */}
        <a href="#" className="text-sm text-blue-500">{t("sign-in.forgot-password")}</a>
      </div>

      <Button variant="primary" className="w-full">{t("label.sign-in", { ns: "common"})}</Button>
  </form>
  )
}
