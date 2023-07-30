"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  if (!session?.user) {
    router.push("/");
  }

  return (
    <Profile
      name='My'
      desc='Welcome to your profile page'
      data={[]}
      handleEdit={() => {}}
      handleDelete={() => {}}
    />
  );
};

export default ProfilePage;
