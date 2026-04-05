import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { blogPosts } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical notes on AI delivery, workflow design, and shipping useful systems.",
};

export default function BlogPage() {
  return (
    <div className="section-shell pt-24">
      <FadeIn className="max-w-3xl">
        <p className="section-kicker">Blog</p>
        <h1 className="section-title mt-4 max-w-[10ch]">Notes on building AI that businesses can actually use.</h1>
      </FadeIn>

      <div className="mt-14 grid gap-5">
        {blogPosts.map((post, index) => (
          <FadeIn key={post.title} delay={index * 0.05} className="white-panel rounded-[1.8rem] p-8">
            <h2 className="text-2xl font-medium tracking-[-0.03em] text-slate-950">{post.title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{post.summary}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
