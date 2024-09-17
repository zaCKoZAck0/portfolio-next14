import { Blog } from './index';

const blog: Blog = {
  created_at: '2024-09-17',
  updated_at: '2024-09-17',
  title: 'Under the Hood: Git Internals',
  description:
    'A deep dive into the internals of Git, including the object model, the reflog, the index, and the working directory.',
  sections: [
    {
      type: 'heading',
      level: 'h2',
      content: 'Introduction',
    },
    {
      type: 'text',
      content:
        'Git is a distributed version control system that is widely used in the software development industry. It is known for its speed, scalability, and flexibility. Git is a powerful tool that allows developers to track changes in their codebase, collaborate with other developers, and manage their projects effectively.',
    },
    {
      type: 'heading',
      level: 'h3',
      content: 'Object Model',
    },
    {
      type: 'text',
      content:
        'At the core of Git is the object model, which is a key component that allows Git to track changes in a codebase. The object model consists of four main objects: blobs, trees, commits, and tags. These objects are stored in a hidden .git directory in the root of the repository.',
    },
    {
      type: 'code',
      codeType: 'shell',
      title: 'Git Object Model',
      code: ``,
    },
    {
      type: 'heading',
      level: 'h3',
      content: 'Reflog',
    },
    {
      type: 'text',
      content:
        'The reflog is a log that records changes to the Git repository. It stores information about the commits that have been made, the branches that have been checked out, and the changes that have been made to the working directory.The reflog is a log that records changes to the Git repository. It stores information about the commits that have been made,The reflog is a log that records changes to the Git repository. It stores information about the commits that have been made,The reflog is a log that records changes to the Git repository. It stores information about the commits that have been made,The reflog is a log that records changes to the Git repository. It stores information about the commits that have been made,The reflog is a log that records changes to the Git repository. It stores information about the commits that have been made,The reflog is a log that records changes to the Git repository. It stores information about the commits that have been made,The reflog is a log that records changes to the Git repository. It stores information about the commits that have been made,The reflog is a log that records changes to the Git repository. It stores information about the commits that have been made,The reflog is a log that records changes to the Git repository. It stores information about the commits that have been made,The reflog is a log that records changes to the Git repository. It stores information about the commits that have been made,The reflog is a log that records changes to the Git repository. It stores information about the commits that have been made,',
    },
  ],
};

export default blog;
