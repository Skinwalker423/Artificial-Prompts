"use client";

import React, {
  FormEventHandler,
  useState,
  useEffect,
} from "react";
import PromtCard from "./PromtCard";
import Prompt from "@models/prompt";
import { PromptProps } from "./PromtCard";

interface PromptCardListProps {
  data: PromptProps[];
  handleTagClick: () => void;
}

const PromptCardList = ({
  data,
  handleTagClick,
}: PromptCardListProps) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data?.map((prompt) => {
        return (
          <PromtCard
            key={prompt.id}
            post={prompt}
            handleTagClick={handleTagClick}
          />
        );
      })}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      const prompts: any = await fetch("/api/prompt");

      const data = prompts.json();
      console.log("fetching prompts", data);
      setData(data);
    };

    fetchPrompts();
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    e
  ) => {
    e.preventDefault();
    const searchFeed = async () => {
      const response = await fetch("/api/prompt");
    };
  };

  return (
    <section className='feed'>
      <form
        onSubmit={handleSubmit}
        className='relative w-full flex-center'
      >
        <input
          type='text'
          placeholder='search for a tag or username'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          required
          className='search_input peer'
        />
      </form>

      <PromptCardList
        data={data}
        handleTagClick={() => {}}
      />
    </section>
  );
};

export default Feed;
