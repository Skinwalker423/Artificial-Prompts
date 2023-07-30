"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Creator } from "@types";

export interface PromptProps {
  _id: string;
  creator: Creator;
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
  return (
    <div className='prompt_card' key={post._id}>
      <div className='flex justify-between items-start gap-5'>
        <Image
          src={post?.creator?.image}
          alt='creator image'
          width={40}
          height={40}
          className='rounded-full object-contain'
        />
      </div>
    </div>
  );
};

export default PromtCard;
