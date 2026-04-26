"use client";

import { useRouter } from "next/navigation";
import { Cafe } from "@/types/cafe";

interface Props {
  cafe: Cafe;
}

export default function CafeModal({ cafe }: Props) {
  const router = useRouter();

  const handleClose = () => {
    router.push("/", { scroll: false });
  };

  return (
    <div role="dialog" aria-modal="true" aria-label={cafe.title}>
      <button onClick={handleClose} aria-label="Close">
        ✕
      </button>
      <h1>{cafe.title}</h1>
      <p>{cafe.content.text}</p>
    </div>
  );
}
