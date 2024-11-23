"use client";

import { SignIn, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "../../../redux-store/userSlice";
import { AppDispatch } from "../../../redux-store/store";

export default function Page() {
  const { user } = useUser();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("User  details:", user); // Log the user details
    if (user) {
      dispatch(
        setUser({
          id: user.id,
          name: user.fullName || "",
          email: user.primaryEmailAddress
            ? user.primaryEmailAddress.emailAddress
            : "",
        })
      );
    }
  }, [user, dispatch]);


  return (
    <div className="flex items-center justify-center h-[calc(100vh-96px)]">
      <SignIn />
    </div>
  );
}
4;
