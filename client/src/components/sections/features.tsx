import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mic, Globe, Settings, BookMarked } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Natural Voice Synthesis",
      description: "High-quality text-to-speech with customizable voices and accents",
      icon: Mic
    },
    {
      title: "Multiple Languages",
      description: "Support for 40+ languages with automatic language detection",
      icon: Globe
    },
    {
      title: "Easy Customization",
      description: "Adjust reading speed, pitch, and volume to your preference",
      icon: Settings
    },
    {
      title: "Save Favorites",
      description: "Bookmark your favorite passages for later listening",
      icon: BookMarked
    }
  ];

  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <Card key={i}>
            <CardHeader>
              <feature.icon className="h-6 w-6 mb-2" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
