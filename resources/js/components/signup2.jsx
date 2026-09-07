import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const Signup2 = ({
  heading = "Signup",

  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-wordmark.svg",
    alt: "logo",
    title: "shadcnblocks.com",
  },

  buttonText = "Create Account",
  signupText = "Already a user?",
  signupUrl = "https://shadcnblocks.com",
  className
}) => {
  return (
    <section className={cn("h-screen bg-muted", className)}>
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-6 lg:justify-start">
          {/* Logo */}
          <a href={logo.url}>
            <img
              src={logo.src}
              alt={logo.alt}
              title={logo.title}
              className="h-10 dark:invert" />
          </a>
          <div
            className="flex w-full max-w-sm min-w-sm flex-col items-center gap-y-4 rounded-md border border-muted bg-background px-6 py-8 shadow-md">
            {heading && <h1 className="text-xl font-semibold">{heading}</h1>}
            <div className="flex w-full flex-col gap-2">
              <Label>Email</Label>
              <Input type="email" placeholder="Email" className="text-sm" required />
            </div>
            <div className="flex w-full flex-col gap-2">
              <Label>Password</Label>
              <Input type="password" placeholder="Password" className="text-sm" required />
            </div>
            <div className="flex w-full flex-col gap-2">
              <Label>Confirm Password</Label>
              <Input type="password" placeholder="Password" className="text-sm" required />
            </div>
            <Button type="submit" className="w-full">
              {buttonText}
            </Button>
          </div>
          <div className="flex justify-center gap-1 text-sm text-muted-foreground">
            <p>{signupText}</p>
            <a href={signupUrl} className="font-medium text-primary hover:underline">
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Signup2 };
