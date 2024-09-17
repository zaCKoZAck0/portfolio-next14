export function BlogFooter() {
  return (
    <nav className="bg-primary-foreground p-4">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <a href="/rss.xml" className="text-secondary">
            RSS
          </a>
          <a href="https://twitter.com/zackozack" className="text-secondary">
            Twitter
          </a>
        </div>
      </div>
    </nav>
  );
}
