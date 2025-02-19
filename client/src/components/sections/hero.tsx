import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Transform any text into speech <br className="hidden sm:inline" />
          with our powerful browser extension
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Listen to articles, documents, and any selected text in your preferred voice and language. 
          Perfect for multitasking and accessibility.
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener">
            Install Now - It's Free
          </a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="/donate">Support Development</a>
        </Button>
      </div>
    </section>
  );
}
