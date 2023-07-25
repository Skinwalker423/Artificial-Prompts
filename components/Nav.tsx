"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SetStateAction } from "react";
import {
  signIn,
  signOut,
  useSession,
  getProviders,
} from "next-auth/react";
import { ProvidersProps, ProviderProps } from "@types";
const Nav = () => {
  const [providers, setProviders] =
    useState<ProvidersProps | null>(null);
  const isLoggedIn = true;

  useEffect(() => {
    const getAndSetProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    getAndSetProviders();
  }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link className='flex gap-2 flex-center' href={"/"}>
        <Image
          src={"/assets/images/logo.svg"}
          width={30}
          height={30}
          alt='logo'
          className='object-contain'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>
      {/* mobile navigation */}
      <div className='sm:flex-hidden'>
        {isLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            {" "}
            <Link
              className='black_btn'
              href={"/create-prompt"}
            >
              Create Post
            </Link>
            <button
              onClick={() => signOut()}
              className='outline_btn'
            >
              Sign Out
            </button>
            <Link href={"/profile"}>
              <Image
                src={"/assets/images/logo.svg"}
                width={37}
                height={37}
                alt='avatar image'
                className='rounded-full'
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map(
                ({ id, name }) => {
                  return (
                    <button
                      onClick={() => signIn(id)}
                      type='button'
                      key={name}
                      className='black_btn'
                    >
                      {name}
                    </button>
                  );
                }
              )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;