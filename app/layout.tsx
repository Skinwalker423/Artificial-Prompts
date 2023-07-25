import React, { ReactNode } from "react";
import "@styles/globals.css";
import { Metadata } from "next";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { getServerSession } from "next-auth";
export const metadata: Metadata = {
  title: "Artifcial Prompts",
  description: "Create and share AI prompts",
};

const RootLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
