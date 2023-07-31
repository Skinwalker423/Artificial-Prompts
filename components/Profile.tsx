import React from "react";
import { ProfileProps, PromptProps } from "@types";
import PromtCard from "./PromtCard";

const Profile = ({ name, desc, data }: ProfileProps) => {
  console.log("data from api", data);

  const handleEdit = (post: PromptProps) => {};
  const handleDelete = async (post: PromptProps) => {};

  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>
          {name} Profile
        </span>
      </h1>
      <p className='desc text-left'></p>
      <div className='mt-10 prompt_layout'>
        {data.length > 0 &&
          data?.map((post) => {
            return (
              <PromtCard
                key={post._id}
                post={post}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Profile;
