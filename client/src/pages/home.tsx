import { Button } from "@/components/ui/button";
import { Hero, Features } from "@/components/sections";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <Features />

      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with ❤️ for the open source community
          </p>
        </div>
      </footer>
    </div>
  );
}