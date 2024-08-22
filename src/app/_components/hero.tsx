import { Logo } from "~/components/navigation/logo";
import { H1, H4 } from "~/components/typography";
import { Button } from "~/components/ui/button";
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <div className="relative flex flex-col gap-12 items-center justify-center">
      <Logo className="text-7xl" />
      <H1 className="text-primary">{"I'm a"} 
        <span className="bg-primary text-primary-foreground px-2 mx-1">
        fullstack Developer.
        </span>
        </H1>
        <div className="flex items-center justify-center gap-4">
            <Button className="rounded-full font-semibold text-xl" size='lg'>
                <H4>
                    Read More
                </H4>
            </Button>
            <Button className="rounded-full font-semibold text-xl group" size='lg' variant='secondary'>
                <H4>
                    Resume
                </H4>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
            </Button>
        </div>
      <div className="absolute size-80 bg-primary rounded-full opacity-15 blur-3xl -z-10" />
    </div>
  );
}