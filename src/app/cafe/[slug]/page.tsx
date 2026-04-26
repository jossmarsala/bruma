import { getCafeBySlug, getPublishedCafes } from "@/lib/cafes";
import { notFound } from "next/navigation";
import CafeModal from "@/components/bruma/CafeModal";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getPublishedCafes().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const cafe = await getCafeBySlug(params.slug);
  if (!cafe) return {};
  return { title: `${cafe.title} – Bruma` };
}

export default async function CafePage({ params }: Props) {
  const cafe = await getCafeBySlug(params.slug);
  if (!cafe) notFound();

  return <CafeModal cafe={cafe} />;
}
