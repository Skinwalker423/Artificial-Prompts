"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { PromptCardProps } from "@types";

const PromtCard = ({
  post,
  handleTagClick,
  handleEdit,
  handleDelete,
}: PromptCardProps) => {
  console.log("post", post);

  const [copiedPrompt, setCopiedPrompt] = useState<
    string | null
  >(null);
  const pathName = usePathname();
  const { data: session } = useSession();

  const handleCopy = () => {
    setCopiedPrompt(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => {
      setCopiedPrompt("");
    }, 3000);
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
        <div
          onClick={handleCopy}
          className='group relative rounded-full hover:border-black cursor-pointer'
        >
          <Image
            src={
              copiedPrompt === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={12}
            height={12}
            alt='copy prompt'
            className='hover:scale-125'
          />
          <span className='absolute bottom-3 left-3 scale-0 rounded bg-white p-2 text-xs text-black group-hover:scale-100'>
            {copiedPrompt ? "Copied" : "Copy to clipboard"}
          </span>
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
      {session?.user?.email === post.creator.email &&
        pathName === "/profile" && (
          <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
            <p
              onClick={() => handleEdit && handleEdit(post)}
              className='font-inter text-sm green_gradient cursor-pointer'
            >
              Edit
            </p>
            <p
              onClick={() =>
                handleDelete && handleDelete(post)
              }
              className='font-inter text-sm orange_gradient cursor-pointer'
            >
              Delete
            </p>
          </div>
        )}
    </div>
  );
};

export default PromtCard;
