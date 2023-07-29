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
  return <div>PromtCard</div>;
};

export default PromtCard;
