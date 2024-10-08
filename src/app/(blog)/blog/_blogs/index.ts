import React from 'react';
import under_the_hood_git_internals from './under-the-hood-git-internals';
import kafka_a_to_z_the_complete_guide from './kafka-a-to-z-the-complete-guide';

export interface Blog {
  slug: string;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  tags: string[];
  content: React.ReactNode;
}

type BlogStore = {
  [slug: string]: Blog;
};

export const blogs: BlogStore = {
  'under-the-hood-git-internals': under_the_hood_git_internals,
  'kafka-a-to-z': kafka_a_to_z_the_complete_guide,
};
