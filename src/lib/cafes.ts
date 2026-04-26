import { Cafe, CafeIndex } from "@/types/cafe";
import cafeIndex from "@/data/cafes/index.json";

export function getCafeIndex(): CafeIndex[] {
  return cafeIndex as CafeIndex[];
}

export function getPublishedCafes(): CafeIndex[] {
  return getCafeIndex().filter((c) => c.published);
}

export async function getCafeBySlug(slug: string): Promise<Cafe | null> {
  try {
    const data = await import(`@/data/cafes/${slug}.json`);
    return data.default as Cafe;
  } catch {
    return null;
  }
}

export async function getAllPublishedCafes(): Promise<Cafe[]> {
  const published = getPublishedCafes();
  const cafes = await Promise.all(published.map((c) => getCafeBySlug(c.slug)));
  return cafes.filter(Boolean) as Cafe[];
}
