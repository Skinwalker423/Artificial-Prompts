import React from "react";

export interface PromptProps {
  id: string;
  creator?: string;
  tag: string;
  prompt: string;
}

export interface PromptCardProps {
  post: PromptProps;
  handleTagClick: () => void;
}

const PromtCard = ({
  post,
  handleTagClick,
}: PromptCardProps) => {
  console.log("post", post);
  return <div key={post.id}>{post.prompt}</div>;
};

export default PromtCard;
