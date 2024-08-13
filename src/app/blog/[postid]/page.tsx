import React from "react";
import { Metadata } from "next";

type Props = {
  params: {
    postid: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `BlogPost ${params.postid}`,
  };
};

export default function Page({ params }: Props) {
  // Используйте Props здесь
  return <div>details page with the id: {params.postid}</div>;
}
