"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Profile from "@components/Profile";

const ProfilePage = () => {
  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const userId = session?.user?.id;
      const userPosts = await fetch(
        `/api/users/${userId}/posts`
      );

      const data = await userPosts.json();

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
