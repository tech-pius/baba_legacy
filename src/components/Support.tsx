import { Coffee, Copy, Check, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
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

  const shareToSocial = (platform: string) => {
    const url = window.location.href;
    const text = "Honoring Raila Amolo Odinga - A Legacy of Courage and Democracy";
    
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };
    
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
    toast.success(`Opening ${platform} share dialog...`);
  };

  return (
    <section id="support" className="py-20 md:py-32 bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 animate-float">
            <Coffee className="w-10 h-10 text-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 animate-fade-in-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Support This Tribute
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 animate-fade-in font-inter">
            If you appreciate this memorial website honoring Raila Odinga's legacy, consider buying me a coffee. Your support helps maintain and improve this tribute.
          </p>

          {/* Share Section */}
          <div className="mb-8 animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Share2 className="w-5 h-5 text-muted-foreground" />
              <p className="text-sm text-muted-foreground font-inter">Share this memorial</p>
            </div>
            <div className="flex justify-center gap-3">
              <Button
                onClick={() => shareToSocial('facebook')}
                variant="outline"
                size="icon"
                className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => shareToSocial('twitter')}
                variant="outline"
                size="icon"
                className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => shareToSocial('linkedin')}
                variant="outline"
                size="icon"
                className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="bg-gradient-card backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border shadow-elevated animate-scale-in">
            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-4 font-inter">Send via M-Pesa:</p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="px-6 py-4 bg-card rounded-lg border border-primary/30">
                  <p className="text-3xl font-bold text-primary tracking-wider font-playfair">
                    {mpesaNumber}
                  </p>
                </div>
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  size="lg"
                  className="border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all font-inter"
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
                <p className="text-lg font-inter">Every contribution is greatly appreciated</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border animate-fade-in-up">
            <p className="text-sm text-muted-foreground font-inter">
              This tribute website was created to honor the memory and legacy of Raila Amolo Odinga, 
              a true champion of Kenyan democracy. Thank you for visiting and keeping his memory alive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
