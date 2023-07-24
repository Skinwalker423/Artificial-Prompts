import React from "react";

const page = ({
  params,
}: {
  params: { postId: string };
}) => {
  return <div>Post id {params.postId}</div>;
};

export default page;
