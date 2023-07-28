"use client";

import React, { FormEvent, useState } from "react";
import {
  UseSessionOptions,
  useSession,
} from "next-auth/react";
import { useRouter } from "next/router";
import Form from "@components/Form";

const CreatePrompt = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const { data: session } = useSession();
  // const router = useRouter();

  const createPrompt = async (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <Form
      type={"Create"}
      post={post}
      setPost={setPost}
      isSubmitting={isSubmitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
