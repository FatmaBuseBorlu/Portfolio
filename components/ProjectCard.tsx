"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export default function ProjectCard({ title, description, tags, link }: Props) {
  const router = useRouter();

  return (
    <div className="w-full max-w-sm p-4 shadow-lg rounded-xl border border-gray-700 bg-gray-900 hover:shadow-2xl transition">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 text-sm mt-1">{description}</p>

      <div className="flex flex-wrap gap-2 mt-3 text-xs">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-gray-200 text-gray-800 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <Button
        onClick={() => router.push(link)}
        className="mt-4 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded transition"
      >
        View Details
      </Button>
    </div>
  );
}
