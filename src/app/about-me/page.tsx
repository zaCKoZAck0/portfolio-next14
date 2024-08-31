import { Metadata } from "next";
import { Introduction } from "./_components/introduction";
import { InterestsAndGoals } from "./_components/interests-and-goals";
import { Recommendations } from "./_components/recommendations";

export const metadata: Metadata = {
  title: "About Me | zackozack",
  description:
    "I am a fullstack software engineer who loves to build things for the web.",
};

export default function AboutMe() {
  return (
    <main className="flex justify-center container">
      <section className="flex flex-col h-[calc(100vh-48px)] w-full max-w-3xl">
        <Introduction />
        <InterestsAndGoals />
        <Recommendations />
      </section>
    </main>
  );
}
