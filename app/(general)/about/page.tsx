import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Description',
};


export default function About() {
  return (
    <>
      <h2 className="text-6xl">About Page</h2>
    </>
  )
}