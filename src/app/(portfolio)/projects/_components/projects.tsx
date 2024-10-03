'use client';
import { A, H1, H3, P } from '~/components/typography';
import { ProjectCard } from '~/components/project-card';
import githubData from '../../../../../data/github-data.json';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { FaGithub } from 'react-icons/fa6';
import { SortDesc } from 'lucide-react';
import { useCallback, useRef, useState } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { Footer } from '~/components/navigation/footer';

export function Projects() {
  const allProjects = useRef(
    githubData.data.user.topRepositories.nodes
      .sort((a, b) => b.stargazerCount - a.stargazerCount)
      .filter((repo) => repo.stargazerCount > 0),
  );

  const [filteredProjects, setFilteredProjects] = useState(allProjects.current);
  const [searchQuery, setSearchQuery] = useState('');
  const [sorting, setSorting] = useState('stars');

  const sortProjects = useCallback((sorting: string) => {
    setSorting(sorting);
    switch (sorting) {
      case 'stars':
        setFilteredProjects(
          allProjects.current.sort((a, b) => b.stargazerCount - a.stargazerCount),
        );
        break;
      case 'latest':
        setFilteredProjects(
          allProjects.current.sort(
            (a, b) =>
              new Date(
                b.defaultBranchRef?.target?.history?.edges[0]?.node?.committedDate ?? '',
              ).getTime() -
              new Date(
                a.defaultBranchRef?.target?.history?.edges[0]?.node?.committedDate ?? '',
              ).getTime(),
          ),
        );
        break;
      case 'name':
        setFilteredProjects(
          allProjects.current.sort((a, b) =>
            a.nameWithOwner.split('/')[1].localeCompare(b.nameWithOwner.split('/')[1]),
          ),
        );
        break;
      default:
        break;
    }
  }, []);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchQuery = e.target.value.toLowerCase().trimStart();
      setSearchQuery(searchQuery);
      setFilteredProjects(
        allProjects.current.filter((repo) => {
          return (
            repo.nameWithOwner.toLowerCase().includes(searchQuery) ||
            repo.description?.toLowerCase().includes(searchQuery) ||
            repo.primaryLanguage?.name.includes(searchQuery)
          );
        }),
      );
    },
    [allProjects],
  );

  return (
    <main className="flex justify-center px-4 md:container">
      <section className="mt-10 flex w-full max-w-3xl flex-col">
        <H1>Projects</H1>
        <P>Here are some of the projects I have worked on / contributed to.</P>
        <p className="py-1">
          <A href="https://github.com/zaCKoZAck0" className="text-sm">
            <FaGithub className="mr-2 inline-block flex-shrink-0" />
            View all projects on Github
          </A>
        </p>
        <div className="mt-4 flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="secondary">
                    <SortDesc className="h-6 w-6" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent sideOffset={5} side="top" align="center">
                  Sort By
                </TooltipContent>
              </Tooltip>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>
                <H3 className="text-base font-semibold">Sort By</H3>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={sorting} onValueChange={sortProjects}>
                <DropdownMenuRadioItem value="stars">Stars</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="latest">Contribution Date</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Input
            placeholder="Search projects"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full border-2 border-primary/50 text-xl"
          />
        </div>
        {searchQuery.length > 0 && (
          <P className="text-center text-secondary-foreground">
            Showing results for {`'${searchQuery}'`}
          </P>
        )}
        <div className="mt-4">
          {filteredProjects.length === 0 && (
            <div className="p-10 text-center text-lg font-bold text-secondary-foreground opacity-75 md:text-xl">
              <H3>{'No projects found :('}</H3>
            </div>
          )}
          {filteredProjects.map((repo, index) => {
            return <ProjectCard key={index} {...repo} />;
          })}
        </div>
        <Footer />
      </section>
    </main>
  );
}
