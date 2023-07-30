"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);

  if (!session?.user) {
    router.push("/");
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const userId = session?.user?.id;
      const prompts = await fetch(
        `/api/users/${userId}/posts`
      );

      const data = await prompts.json();
      console.log("fetching prompts", data);
      setPosts(data);
    };

    session?.user?.id && fetchPosts();
  }, []);

  const handleEdit = () => {};
  const handleDelete = async () => {};

  return (
    <Profile
      name='My'
      desc='Welcome to your profile page'
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default ProfilePage;
