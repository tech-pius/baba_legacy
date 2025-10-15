import { Coffee, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export const Support = () => {
  const [copied, setCopied] = useState(false);
  const mpesaNumber = "0706748425";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mpesaNumber);
    setCopied(true);
    toast.success("M-Pesa number copied to clipboard!");
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="support" className="py-20 md:py-32 bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 animate-float">
            <Coffee className="w-10 h-10 text-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Support This Tribute
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            If you appreciate this memorial website honoring Raila Odinga's legacy, consider buying me a coffee. Your support helps maintain and improve this tribute.
          </p>

          <div className="bg-gradient-card backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border shadow-elevated animate-scale-in">
            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-4">Send via M-Pesa:</p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="px-6 py-4 bg-card rounded-lg border border-primary/30">
                  <p className="text-3xl font-bold text-primary tracking-wider">
                    {mpesaNumber}
                  </p>
                </div>
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  size="lg"
                  className="border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-5 w-5" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-5 w-5" />
                      Copy Number
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Coffee className="w-5 h-5" />
                <p className="text-lg">Every contribution is greatly appreciated</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border animate-fade-in-up">
            <p className="text-sm text-muted-foreground">
              This tribute website was created to honor the memory and legacy of Raila Amolo Odinga, 
              a true champion of Kenyan democracy. Thank you for visiting and keeping his memory alive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
