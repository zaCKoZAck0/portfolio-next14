import under_the_hood_git_internals from './under-the-hood-git-internals';

interface TextSection {
  type: 'text';
  content: string;
}

interface HeadingSection {
  type: 'heading';
  level: 'h2' | 'h3' | 'h4';
  content: string;
}

interface CodeSection {
  type: 'code';
  codeType: 'output' | 'shell' | 'code';
  code: string;
  language?: string;
  title: string;
  highlight?: string[];
}

interface ImageSection {
  type: 'image';
  src: string;
  alt: string;
  content: string;
}

interface AsideSection {
  type: 'aside';
  tag: 'info' | 'warning' | 'tip';
  content: string;
}

type BlogSection = TextSection | HeadingSection | CodeSection | ImageSection | AsideSection;

export interface Blog {
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  sections: BlogSection[];
}

type BlogStore = {
  [key: string]: Blog;
};

export const blogs: BlogStore = {
  'under-the-hood-git-internals': under_the_hood_git_internals,
};
