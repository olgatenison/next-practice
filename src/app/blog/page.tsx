import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Absolute Title",
  },
};

export default function page() {
  return (
    <div>
      <Link href="/">Home page</Link>
      <h3>
        <Link href="/blog/1">post 1</Link>
      </h3>
      <h3>
        <Link href="/blog/2" replace>
          post 2
        </Link>
      </h3>
      <h3>
        <Link href="/blog/3">post 3</Link>
      </h3>
      <h3>
        <Link href="/blog/4">post 4</Link>
      </h3>
      <h3>
        <Link href="/blog/5">post 5</Link>
      </h3>
      <h3>
        <Link href="/blog/6">post 6</Link>
      </h3>
      <h3>
        <Link href="/blog/7">post 7</Link>
      </h3>
      <h3>
        <Link href="/blog/8">post 8</Link>
      </h3>
    </div>
  );
}
