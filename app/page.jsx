import TesseraFaqAccordion from "@/components/accodrin";
import Shimmer from "@/components/shimmer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { features } from "@/data/feature";
import { ArrowRight} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <section className="py-32 text-center min-h-screen">
        <div className='space-y-6 flex flex-col items-center'>
          <h1 className='text-4xl font-bold md:text-6xl max lg:text-7xl max-w-5xl xl:text-8xl gradient-title'>
            Your Story, Tessera Seamlessly Animated
          </h1>
          <p className='mx-auto max-w-xs md:max-w-2xl text-muted-foreground md:text-xl'>
            Bring your ideas to life through elegant animation, seamless storytelling, and intelligent design.
          </p>
          <div className="flex items-center flex-col md:flex-row justify-center gap-4">
            <Button variant={"primary"}>Start Now</Button>
            <Link target="_blank" href={"https://github.com/Blue-Onion/tessera"}>
              <Button variant={"secondary"}>Learn More</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto container text-center">
        {/* Section header */}
        <div className="mb-16">

        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-purple-900/20 bg-muted/40 hover:bg-muted/60 hover:border-purple-800/40 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <CardHeader className="pb-2 text-center flex flex-col gap-3 items-center justify-center">
                <div className="bg-purple-900/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-purple-300 transition-colors duration-300">
                  <feature.icon className="text-[#480CC3] h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </section>
      <section className="mx-auto py-32 container">
        <Shimmer />
      </section>
      <section className="mx-auto py-32 container">
        <div className="text-center">
          <h2 className="text-2xl flex gap-2 items-center justify-center md:text-4xl font-bold">
            <span className="text-[#480CC3]">
              Frequently

            </span>
            <span>
              asked
              question
            </span>

          </h2>
        </div>
        <div className="py-12">
          <TesseraFaqAccordion />
        </div>
      </section>
      <section className="w-full">
       <div className="py-24 mx-auto px-4 bg-gradient-to-b from-[#480CC3] via-[#5A2FBF] to-[#2E1065] rounded-2xl shadow-lg">
  <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
    
    <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text gradient-title sm:text-4xl md:text-5xl">
      Ready to Bring Your Ideas to Life?
    </h2>
    
    <p className="mx-auto max-w-[600px] text-purple-100/90 md:text-xl">
      Join creators, educators, and innovators using <span className="font-semibold text-purple-50 mx-1">Tessera</span> 
      to design stunning animated visualizations — powered by AI and Manim.
    </p>
    
    <Link href={"/dashboard"}>
      <Button
        size="lg"
        variant="primary"
        className="h-11 mt-5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-xl transition-all animate-bounce"
      >
        Start Creating with Tessera <ArrowRight className="ml-2 h-4 w-4"/>
      </Button>
    </Link>
    
  </div>
</div>
      </section>
      
    </div>
  );
}