"use client";

import React, {
  FormEventHandler,
  useState,
  useEffect,
} from "react";
import PromtCard from "./PromtCard";
import { PromptProps } from "@types";

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
      {data.length > 0 &&
        data?.map((post) => {
          return (
            <PromtCard
              key={post._id}
              post={post}
              handleTagClick={handleTagClick}
            />
          );
        })}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState<PromptProps[]>([]);
  const [filteredData, setFilteredData] = useState<
    PromptProps[]
  >([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      const prompts: any = await fetch("/api/prompt");

      const data = await prompts.json();

      setData(data);
    };

    fetchPrompts();
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    e
  ) => {
    e.preventDefault();
    const filteredData = data.filter(
      (post) =>
        post.prompt.includes(searchText) ||
        post.creator.username.includes(searchText) ||
        post.tag.includes(searchText)
    );

    setFilteredData(filteredData);
  };

  const handleTagClick = (tag: string) => {
    setSearchText(tag);
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
          onChange={(e) => {
            setSearchText(e.target.value);
            const filteredData = data.filter(
              (post) =>
                post.prompt
                  .toLowerCase()
                  .includes(searchText.toLowerCase()) ||
                post.creator.username
                  .toLowerCase()
                  .includes(searchText) ||
                post.tag
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
            );

            setFilteredData(filteredData);
          }}
          required
          className='search_input peer'
        />
      </form>

      <PromptCardList
        data={searchText ? filteredData : data}
        handleTagClick={handleTagClick as () => void}
      />
    </section>
  );
};

export default Feed;
