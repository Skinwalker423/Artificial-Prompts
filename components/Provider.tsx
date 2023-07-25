import React from "react";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

const Provider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null | undefined;
}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};

export default Provider;
