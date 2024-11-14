"use client";

import { useState } from "react";

export interface SpoilerBlock {
  __component: "blocks.spoiler";
  id: number;
  title: string;
  content: string;
}

export function SpoilerBlock({ block }: { block: SpoilerBlock }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <button>Click here</button>
      <div>{block.content}</div>
    </div>
  );
}
