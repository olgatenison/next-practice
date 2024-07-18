import React from "react";

export default function page({ params }: { params: { postid: string } }) {
  return <div>details page with the id: {params.postid}</div>;
}
