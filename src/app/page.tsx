import { getPublishedCafes } from "@/lib/cafes";
import CafeList from "@/components/bruma/CafeList";

export default function HomePage() {
  const cafes = getPublishedCafes();

  return (
    <main>
      <CafeList cafes={cafes} />
    </main>
  );
}
