import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">VoiceReader</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground/80">
              Home
            </Link>
            <Link href="/donate" className="transition-colors hover:text-foreground/80">
              Support Us
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button asChild variant="default">
            <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener">
              Install Extension
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
