"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";
import { PromptProps } from "@types";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const userId = session?.user?.id;
      const userPosts = await fetch(
        `/api/users/${userId}/posts`
      );

      const data = await userPosts.json();
      console.log("fetching posts", data);
      setPosts(data);
    };

    session?.user?.id && fetchPosts();
  }, []);

  return (
    <Profile
      name={session?.user.name}
      desc='Welcome to your profile page'
      data={posts}
      setPosts={setPosts}
    />
  );
};

export default ProfilePage;
