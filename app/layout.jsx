import React from "react";
import "@styles/globals.css";
import Nav from "@components/Nav";
import AuthProvider from "@components/Provider";
export const metadata = {
  title: "Artifcial Prompts",
  description: "Create and share AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <AuthProvider>
          <div className='main'>
            <div className='gradient' />
          </div>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
