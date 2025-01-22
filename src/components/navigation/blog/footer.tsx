import { ExternalLinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function BlogFooter() {
  return (
    <footer className="text-card-foreground bg-card rounded-xl mt-36">
      <div className="max-w-7xl py-6 px-6">
        <div className="flex gap-6 items-center">
          <Image className="flex-shrink-0 size-20 border-2 border-orange-200 rounded-full" alt="zackozack" width={100} height={100} src='https://utfs.io/f/7b6ae0f8-148e-4e57-bd36-14ae0c90887b-e4obn3.gif' />
          {/* About Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white font-mono">About Me</h3>
            <p className="text-sm">
              {`Full-stack engineer by day, blogger by night. Sharing knowledge, one line of code at a time.
              Hi, I'm Ayush. Join me at my coding adventures.
              `}
            </p>
          </div>
          
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t text-xs text-muted-foreground text-center flex justify-between">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} zackozack</p>
          <div className="flex items-center gap-2">
          <Link className="flex gap-1 items-center hover:underline underline-offset-2" href="/">Portfolio</Link> |
          <Link className="flex gap-1 items-center hover:underline underline-offset-2" href="/projects">Projects</Link> |
          <a className="flex gap-1 items-center hover:underline underline-offset-2" href="https://github.com/zaCKoZAck0/portfolio-next14">Github repo <ExternalLinkIcon size={12} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
