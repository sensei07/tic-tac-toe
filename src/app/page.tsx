import { GamesList } from "@/features/games-list/server";

export default async function Home() {
  return (
    <section className="flex flex-col gap-4 container mx-auto pt-40">
      <h1 className="font-bold text-3xl">Games</h1>
      <GamesList />
    </section>
  );
}
