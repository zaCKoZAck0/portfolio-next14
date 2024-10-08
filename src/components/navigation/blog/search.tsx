'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, Command, Book, Sparkles, Calendar, Trash2 } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { ScrollArea } from '~/components/ui/scroll-area';
import { Dialog, DialogContent } from '~/components/ui/dialog';
import { Badge } from '~/components/ui/badge';
import { cn } from '~/lib/utils';
import { format, differenceInDays } from 'date-fns';
import { H3 } from '~/components/typography';
import { blogs, Blog } from '~/app/(blog)/blog/_blogs';
import { useRouter } from 'next/navigation';

export function BlogSearch() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Blog[]>([]);
  const [recentReads, setRecentReads] = useState<Blog[]>([]);
  const [suggestedBlogs, setSuggestedBlogs] = useState<Blog[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const storedReads = localStorage.getItem('recentReads');
    if (storedReads) {
      setRecentReads(JSON.parse(storedReads));
    }
  }, []);

  useEffect(() => {
    const search = async () => {
      const filtered = Object.values(blogs).filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      );
      setResults(filtered);
    };

    if (searchTerm) {
      search();
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    const getSuggestedBlogs = () => {
      if (recentReads.length === 0) {
        return Object.values(blogs)
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .slice(0, 5);
      }

      const recentTags = recentReads.flatMap((post) => post.tags);
      const tagCounts = recentTags.reduce(
        (acc, tag) => {
          acc[tag] = (acc[tag] || 0) + 1;
          return acc;
        },
        {} as Record<string, number>,
      );

      const sortedBlogs = Object.values(blogs)
        .map((blog) => ({
          ...blog,
          relevance: blog.tags.reduce((sum, tag) => sum + (tagCounts[tag] || 0), 0),
        }))
        .sort((a, b) => b.relevance - a.relevance);

      const similarBlogs = sortedBlogs.filter(
        (blog) => blog.relevance > 0 && blog.title !== recentReads[0].title,
      );
      if (similarBlogs.length >= 5) {
        return similarBlogs.slice(0, 5);
      } else {
        const recentlyUpdated = Object.values(blogs)
          .filter((blog) => !similarBlogs.some((similar) => similar.title === blog.title))
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        return [...similarBlogs, ...recentlyUpdated].slice(0, 5);
      }
    };

    setSuggestedBlogs(getSuggestedBlogs());
  }, [recentReads]);

  const clearRecentReads = () => {
    setRecentReads([]);
    localStorage.removeItem('recentReads');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      handlePostSelection(results[selectedIndex]);
    }
  };

  const handlePostSelection = (post: Blog) => {
    console.log('Selected:', post);
    const updatedRecentReads = [post, ...recentReads.filter((p) => p.title !== post.title)].slice(
      0,
      5,
    );
    setRecentReads(updatedRecentReads);
    localStorage.setItem('recentReads', JSON.stringify(updatedRecentReads));
    router.push(`/blog/${post.slug}`);
    setIsOpen(false);
  };

  const renderPostItem = (blog: Blog, index: number) => {
    const isNew = differenceInDays(new Date(), new Date(blog.created_at)) <= 7;
    const isUpdated =
      differenceInDays(new Date(blog.updated_at), new Date(blog.created_at)) > 0 &&
      differenceInDays(new Date(), new Date(blog.updated_at)) <= 7;

    return (
      <div
        key={blog.title}
        className={cn(
          'mb-2 cursor-pointer space-y-2 rounded-md px-3 py-2 text-sm transition-colors',
          selectedIndex === index
            ? 'bg-accent/25 text-accent-foreground'
            : 'hover:bg-accent/25 hover:text-accent-foreground',
        )}
        onMouseEnter={() => setSelectedIndex(index)}
        onClick={() => handlePostSelection(blog)}
      >
        <H3 className="flex items-center gap-2 text-lg font-normal">
          {blog.title}
          {isNew && (
            <Badge className="border-0 bg-gradient-to-br from-green-400 to-blue-500 text-white">
              New
            </Badge>
          )}
          {isUpdated && (
            <Badge className="border-0 bg-gradient-to-br from-purple-400 to-pink-500 text-white">
              Updated
            </Badge>
          )}
        </H3>
        <div className="mt-1 text-xs text-muted-foreground">{blog.description}</div>
        <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground">
          <Calendar className="size-3" />
          <span>{format(new Date(blog.updated_at), 'MMMM d, yyyy')}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
          <Search className="size-4 shrink-0" />
        </Button>
        <kbd className="pointer-events-none hidden select-none items-center gap-1 rounded border bg-muted px-1.5 py-1 font-mono text-sm font-medium opacity-100 sm:flex">
          <span className="text-sm">⌘</span>K
        </kbd>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-transparent p-0 backdrop-blur-md sm:max-w-[550px]">
          <div className="flex flex-col">
            <div className="flex items-center border-b px-3 py-2">
              <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
              <Input
                ref={inputRef}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search blog posts..."
                className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <ScrollArea className="h-[50vh] overflow-y-auto">
              {searchTerm ? (
                results.length > 0 ? (
                  <div className="p-4 pt-2">
                    {results.map((result, index) => renderPostItem(result, index))}
                  </div>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center p-4 text-center">
                    <Command className="mb-4 h-10 w-10 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground">No blog posts found</p>
                    <p className="text-xs text-muted-foreground">
                      {"Try adjusting your search to find what you're looking for."}
                    </p>
                  </div>
                )
              ) : (
                <div className="p-4 pt-2">
                  {recentReads.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between">
                        <H3 className="mb-2 flex items-center text-sm font-semibold text-muted-foreground">
                          <Book className="mr-1 h-4 w-4" /> Recent Searches
                        </H3>
                        <Button
                          variant="link"
                          size="sm"
                          onClick={clearRecentReads}
                          className="text-xs"
                        >
                          <Trash2 className="mr-1 size-4" />
                          Clear
                        </Button>
                      </div>
                      {recentReads.map((read, index) => renderPostItem(read, index))}
                    </div>
                  )}
                  {suggestedBlogs.length > 0 && (
                    <div className="mt-4">
                      <H3 className="mb-2 flex items-center text-sm font-semibold text-muted-foreground">
                        <Sparkles className="mr-1 h-4 w-4" /> Suggested Blogs
                      </H3>
                      {suggestedBlogs.map((blog, index) =>
                        renderPostItem(blog, index + recentReads.length),
                      )}
                    </div>
                  )}
                </div>
              )}
            </ScrollArea>
            <div className="flex items-center justify-end gap-2 border-t p-2 px-3 text-xs text-muted-foreground">
              <kbd className="rounded bg-muted px-1">↑↓</kbd> to navigate
              <kbd className="rounded bg-muted px-1">ESC</kbd> to close
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
