import React, { ReactNode } from "react";
import "@/styles/globals.css";
import { Metadata } from "next";

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
        <div className='main'>
          <div className='gradient' />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
