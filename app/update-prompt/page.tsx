"use client";

import React, {
  FormEvent,
  useState,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";
import { Post } from "@types";
import { Metadata } from "next";

interface SearchParamsProps {
  searchParams: {
    id: string;
  };
}

const UpdatePrompt = ({
  searchParams,
}: SearchParamsProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  } as Post);

  const router = useRouter();

  const id = searchParams.id;

  useEffect(() => {
    const fetchPrompt = async (promptId: string) => {
      const prompts: any = await fetch(
        `/api/prompt/${promptId}`
      );

      const data = await prompts.json();

      if (!data) {
        setError("could not find prompt. Check promptId.");
      } else {
        setPost(data);
      }
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
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error("problem with modifying prompt", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (error && <h1>{error}</h1>)
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
