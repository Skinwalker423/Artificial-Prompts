"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  signIn,
  signOut,
  useSession,
  getProviders,
} from "next-auth/react";
import {
  ProvidersProps,
  DropdownLinksConfigProps,
} from "@types";

const Nav = () => {
  const [providers, setProviders] =
    useState<ProvidersProps | null>(null);
  const [toggleDropdown, setToggleDropdown] =
    useState(false);
  const { data: session } = useSession();

  const isLoggedIn = session;
  const email = session?.user?.email;
  const image = session?.user?.image;

  console.log("is logged in", isLoggedIn);
  console.log("email", email);

  const dropdownLinksConfig: DropdownLinksConfigProps[] = [
    { title: "My Profile", href: "/profile" },
    { title: "Create Prompt", href: "/create-prompt" },
  ];

  useEffect(() => {
    const getAndSetProviders = async () => {
      const response = await getProviders();
      console.log(
        "response for getting providers",
        response
      );
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

      <div className='sm:flex hidden'>
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
                src={image || "/assets/images/logo.svg"}
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
      {/* mobile navigation */}
      <div className='sm:hidden flex relative'>
        {isLoggedIn ? (
          <div className='flex'>
            <Image
              src={image || "/assets/images/logo.svg"}
              width={37}
              height={37}
              alt='avatar image'
              className='rounded-full'
              onClick={() =>
                setToggleDropdown((toogle) => !toogle)
              }
            />
            {toggleDropdown && (
              <div className='dropdown'>
                {dropdownLinksConfig.map(
                  ({ title, href }) => {
                    return (
                      <Link
                        onClick={() =>
                          setToggleDropdown(false)
                        }
                        className='dropdown_link'
                        href={href}
                      >
                        {title}
                      </Link>
                    );
                  }
                )}
                <button
                  className='mt-5 w-full black_btn'
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
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
                      Sign In
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
