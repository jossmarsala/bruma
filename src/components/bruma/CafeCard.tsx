"use client";

import Link from "next/link";
import { CafeIndex } from "@/types/cafe";

interface Props {
  cafe: CafeIndex;
}

export default function CafeCard({ cafe }: Props) {
  return (
    <Link href={`/cafe/${cafe.slug}`} scroll={false}>
      <article style={{ cursor: "pointer" }}>
        <h2>{cafe.title}</h2>
      </article>
    </Link>
  );
}
