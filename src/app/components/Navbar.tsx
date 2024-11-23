"use client";

import React from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { ClerkLoading } from "@clerk/nextjs";
import Image from "next/image";
import {
  ClerkLoaded,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
const Navbar = () => {
  return (
    <div className="h-24 items-center flex justify-between">
      <div>
        <Link href="/">NotoriousSocial</Link>
      </div>
      <div className=" space-x-10 hidden md:flex">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/home.png" alt="Homepage" height={18} width={18} />
          <span>HomePage</span>
        </Link>

        <Link href="/contact" className="flex items-center space-x-2">
          <img src="/friends.png" alt="Friends" height={24} width={24} />
          <span>Friends</span>
        </Link>

        <Link href="/stories" className="flex items-center space-x-2">
          <img src="/stories.png" alt="Stories" height={18} width={18} />
          <span>Stories</span>
        </Link>
      </div>
      <div className="rounded-md flex items-center space-x-2 bg-slate-100 p-2">
        <input type="text" placeholder="Search" className=" rounded-md bg-slate-100 w-full outline-none" />
        <img src="/search.png" alt="" width={24} height={24} className="ml-2" />
      </div>
      <div className="flex items-center space-x-2">
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="flex flex-row gap-8 items-center justify-center">
              <div className="cursor-pointer">
                <Image src="/people.png" alt="" width={20} height={20}></Image>
              </div>
              <div className="cursor-pointer">
                <Image
                  src="/messages.png"
                  alt=""
                  width={20}
                  height={20}
                ></Image>
              </div>
              <div className="cursor-pointer">
                <Image
                  src="/notifications.png"
                  alt=""
                  width={20}
                  height={20}
                ></Image>
              </div>
              <div>
                <UserButton />
              </div>
            </div>
          </SignedIn>
          <SignedOut>
            <Image src="/login.png" alt="" width={20} height={20}></Image>
            <Link href="/sign-in">Login/Register</Link>
          </SignedOut>
        </ClerkLoaded>
      </div>
      <div className="block md:hidden">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
