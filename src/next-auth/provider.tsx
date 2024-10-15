"use client";

import { Session } from "next-auth";
import { SessionProvider as AuthProvider } from "next-auth/react";
import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  session: Session | null;
}

export const SessionProvider: FC<Props> = (props) => {
  const { session, children } = props;

  return <AuthProvider session={session}>{children}</AuthProvider>;
};
