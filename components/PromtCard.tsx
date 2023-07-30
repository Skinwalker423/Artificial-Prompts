"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { PromptCardProps } from "@types";

const PromtCard = ({
  post,
  handleTagClick,
}: PromptCardProps) => {
  console.log("post", post);

  const [copiedPrompt, setCopiedPrompt] = useState<
    string | null
  >(null);

  const handleCopy = () => {
    setCopiedPrompt(post.prompt);
    navigator.clipboard.writeText(post.prompt);
  };

  return (
    <div className='prompt_card' key={post._id}>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
          <Image
            src={post?.creator?.image}
            alt='creator image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />
          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold'>
              {post?.creator.username}
            </h3>
            <p className='font-inter text-sm text-gray-500'>
              {post?.creator.email}
            </p>
          </div>
        </div>
        <div onClick={handleCopy} className=''>
          <Image
            src={
              copiedPrompt === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={12}
            height={12}
            alt='copy prompt'
          />
        </div>
      </div>
      <p className='my-4 font-satoshi text-sm text-gray-700'>
        {post.prompt}
      </p>
      <p
        onClick={() =>
          handleTagClick && handleTagClick(post.tag)
        }
        className='font-inter text-sm blue-gradient cursor-pointer'
      >
        {post.tag}
      </p>
    </div>
  );
};

export default PromtCard;
