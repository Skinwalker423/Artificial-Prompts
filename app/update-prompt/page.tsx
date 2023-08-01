"use client";

import React, {
  FormEvent,
  useState,
  useEffect,
} from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";
import { Post } from "@types";

interface SearchParamsProps {
  searchParams: {
    id: string;
  };
}

const UpdatePrompt = ({
  searchParams,
}: SearchParamsProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  } as Post);

  const { data: session } = useSession() as any;
  const router = useRouter();

  const id = searchParams.id;
  console.log(id);

  useEffect(() => {
    const fetchPrompt = async (promptId: string) => {
      const prompts: any = await fetch(
        `/api/prompt/${promptId}`
      );

      const data = await prompts.json();
      console.log("fetching prompts", data);
      setPost(data);
    };

    fetchPrompt(id);
  }, []);

  const editPrompt = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/prompt/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },

        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log("problem with modifying prompt", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type={"Edit"}
      post={post}
      setPost={setPost}
      isSubmitting={isSubmitting}
      handleSubmit={editPrompt}
    />
  );
};

export default UpdatePrompt;
