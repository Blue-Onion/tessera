"use client"

import Link from "next/link"
import { Button } from "./ui/button"

const Hero = () => {
  return (
    <div className='space-y-6 flex flex-col items-center'>
          <h1 className='text-4xl  font-bold md:text-6xl max lg:text-7xl max-w-5xl xl:text-8xl gradient-title'>
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
  )
}

export default Hero