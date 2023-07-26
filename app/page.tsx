import React from "react";
import Feed from "@components/Feed";

// export const metadata: Metadata = {
//   title: '',
//   description: ''
// }

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>
          AI Powered Prompts
        </span>
      </h1>
      <p className='desc text-center'>
        One of the most powerful aspects of AI prompts is
        their ability to generate creative content. By
        providing a few simple keywords, you can instruct an
        AI to create a poem, a story, or even a piece of
        music. The possibilities are endless, and only
        limited by your imagination.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
