import { getCafeBySlug } from "@/lib/cafes";
import { notFound } from "next/navigation";
import CafeModal from "@/components/bruma/CafeModal";

interface Props {
  params: { slug: string };
}

export default async function CafeInterceptedPage({ params }: Props) {
  const cafe = await getCafeBySlug(params.slug);
  if (!cafe) notFound();

  return <CafeModal cafe={cafe} />;
}
