"use client";

import { setCookie } from "cookies-next";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { FC, PropsWithChildren, useEffect } from "react";

interface Props extends PropsWithChildren {
  session: Session | null;
}

export const SessionUpdater: FC<Props> = (props) => {
  const { children } = props;
  const { data } = useSession();

  useEffect(() => {
    /* if (data?.jwt) setCookie("token", data.jwt); */
  }, [data]);

  return children;
};
