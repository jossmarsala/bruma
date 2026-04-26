"use client";

import { CafeIndex } from "@/types/cafe";
import CafeCard from "./CafeCard";

interface Props {
  cafes: CafeIndex[];
}

export default function CafeList({ cafes }: Props) {
  return (
    <section>
      {cafes.map((cafe) => (
        <CafeCard key={cafe.slug} cafe={cafe} />
      ))}
    </section>
  );
}
