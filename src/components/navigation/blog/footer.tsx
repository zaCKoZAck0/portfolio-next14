import Link from "next/link"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Github, Twitter, Linkedin, Instagram, Send } from "lucide-react"

export function BlogFooter() {
  return (
    <footer className="bg-card text-card-foreground rounded-xl mt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">About Me</h3>
            <p className="text-sm">
              I'm a passionate web developer creating amazing digital experiences. My blog is where I share my journey,
              insights, and the latest in web tech.
            </p>
          </div>
          
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

