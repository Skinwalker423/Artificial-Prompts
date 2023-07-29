"use client";

import React, { FormEventHandler, useState } from "react";
import PromtCard from "./PromtCard";

const Feed = () => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    e
  ) => {
    e.preventDefault();
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
        />
      </form>
    </section>
  );
};

export default Feed;
