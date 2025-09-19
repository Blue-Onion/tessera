import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative container mx-auto">
      <section className="py-32 text-center">
        <div className='space-y-6 mx-auto'>
          <h1 className='text-4xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title'>Your Story, Tessera Seamlessly Animated

          </h1>
          <p className='mx-auto max-w-xs md:max-w-2xl text-muted-foreground md:text-xl'>
            Bring your ideas to life through elegant animation, seamless storytelling, and intelligent design.
          </p>
          <div className="flex items-center flex-col md:flex-row justify-center gap-4">
            <Button>Start Now</Button>
            <Link href={"/https://github.com/Blue-Onion/tessera"}>
              <Button>Learn More</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
