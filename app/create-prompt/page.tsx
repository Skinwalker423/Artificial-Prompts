"use client";

import React, { useState } from "react";
import { UseSessionOptions } from "next-auth/react";
import { useRouter } from "next/router";
import Form from "@components/Form";

const CreatePrompt = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ post: "", tag: "" });

  return <Form />;
};

export default CreatePrompt;
