import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bitcoin } from "lucide-react";

export default function Donate() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-[800px]">
        <h1 className="text-3xl font-bold mb-4">Support VoiceReader</h1>
        <p className="text-muted-foreground mb-8">
          Help us continue developing and improving VoiceReader. Your support enables us to add new features
          and maintain the extension for everyone.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>One-time Donation</CardTitle>
              <CardDescription>Support us with a single contribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline">$5</Button>
                <Button variant="outline">$10</Button>
                <Button variant="outline">$20</Button>
                <Button variant="default">Custom</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Sponsor</CardTitle>
              <CardDescription>Become a recurring supporter</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline">$3/mo</Button>
                <Button variant="outline">$5/mo</Button>
                <Button variant="outline">$10/mo</Button>
                <Button variant="default">Custom</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bitcoin className="h-5 w-5" />
                <CardTitle>Bitcoin Donation</CardTitle>
              </div>
              <CardDescription>Support us with cryptocurrency</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="break-all text-sm bg-muted p-3 rounded-md">
                  19jaeG7fWaLKUHA4wB3AGH4tipTBRZ2y63
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    navigator.clipboard.writeText('19jaeG7fWaLKUHA4wB3AGH4tipTBRZ2y63');
                  }}
                >
                  Copy Address
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}