import React from "react";

export default function page({
  params,
}: {
  params: {
    commentid: string;
    postid: string;
  };
}) {
  return (
    <div>
      Comment {params.commentid} for blog post апрарарарпа {params.postid}
    </div>
  );
}
