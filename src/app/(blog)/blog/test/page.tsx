import { Sora } from 'next/font/google';
import { cn } from '~/lib/utils';
import { BashShell, Output } from '../[slug]/_components/code';
import { Aside } from '../[slug]/_components/aside';
import { BlogImage } from '../[slug]/_components/img';
import '../../blog.css';

const sora = Sora({ subsets: ['latin'] });

export default function BlogPage() {
  return (
    <main className="flex min-h-screen justify-center md:container">
      <section className="flex w-full max-w-3xl translate-y-[calc(100vh/5)] flex-col p-4 md:translate-y-[calc(100vh/4)]">
        <div id="blog" className={cn('my-4 text-sm text-muted-foreground', sora.className)}>
          <p>
            We all use Git on a daily basis, but have you ever wondered, how does git works under
            the hood? <b>In this blog, we are going to explore the internals of Git.</b>
          </p>
          <p>
            This blog is going to be a long one, so please bear with me and follow along. I promise
            it will be worth it.
          </p>
          <h2>{"What's inside the .git folder?"}</h2>
          <p>
            When you initialize a new empty git repository with <code>git init</code>{' '}
            <a href="https://git-scm.com/docs/git-init">command</a>, a new folder named{' '}
            <code>.git</code> is created in the root directory of the project.{' '}
            <b>This folder contains the following files and directories:</b>
          </p>
          <BashShell
            code={`
            git init
            `}
            highlight={['init']}
          />
          <Output
            code={`
            Initialized empty Git repository in /path/to/your/project/.git/
            `}
          />
          <BashShell
            code={`
            ls -a .git
            `}
            highlight={['ls']}
          />
          <Output
            code={`
            .  ..  config  description  HEAD  hooks  info  objects  refs
            `}
          />
          <p>
            Here, the four most important entries are: the <code>HEAD</code> file, it{' '}
            <b>points to the branch you currently have checked out</b> using{' '}
            <code>git checkout</code>. The <code>objects/</code> directory{' '}
            <b>{`stores all the content for your repository in form of "objects"`}</b>. The{' '}
            <code>refs/</code> <b>act as pointers to specific commits in your repository</b>, making
            it easier to manage and navigate your project’s history, and the <code>index</code> file
            is where Git <b>stores your staging area information</b>. Read more here{' '}
            <a href="https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain#ch10-git-internals">
              Git Internals - Plumbing and Porcelain
            </a>
            .
          </p>

          <h2>What are git objects?</h2>
          <p>
            Git is a <b>content-addressable filesystem</b>. It means that at the core of Git is a
            simple {`"key-value"`} data store. Git stores everything in the form of objects. An
            object is identified by a 40-character long hash, which is used to reference the object.
          </p>
          <p>
            To check how git stores objects, use can create a new file with some content and then
            use the command <code>git hash-object</code> command to create a new object.
          </p>
          <BashShell
            code={`
            echo "hello world" > filename.txt
git hash-object -w filename.txt
            `}
            highlight={['echo', 'hash-object']}
          />
          <Output
            code={`
            80993781b54ed1b81e47a31e6427940c1a9deafb
            `}
          />
          <p>
            It will return you a 40-character long hash similar to{' '}
            <b>80993781b54ed1b81e47a31e6427940c1a9deafb</b>, and to check how git stores this object
            in the <code>.git/objects</code> folder, we can look at the contents of the{' '}
            <code>.git/objects</code> directory.
          </p>
          <BashShell
            code={`
            find .git/objects -type f
            `}
            highlight={['objects']}
          />
          <Output
            code={`
            .git/objects/80/993781b54ed1b81e47a31e6427940c1a9deafb
            `}
          />
          <p>
            The <code>.git/objects</code> directory contains a single file. If you look closely,{' '}
            <b>the first two characters of our previous hash are used as the directory name</b> i.e.{' '}
            <b>80/</b>, and the rest of the hash is used as the file name.
          </p>
          <Aside type="info">
            <h4>Objects folder structure</h4>
            <p>
              The objects folder creates a directory structure based on the first two characters of
              the hash. This is done to prevent having too many files in a single directory, as{' '}
              <b>
                many file systems have performance issues or limits on the number of files that can
                be stored in a single directory.
              </b>
            </p>
          </Aside>
          <p>
            Once you have contents in your objects database, you can examine the contents with{' '}
            <code>git cat-file</code>
          </p>
          <BashShell
            code={`
            git cat-file -p 80993781b54ed1b81e47a31e6427940c1a9deafb
            `}
            highlight={['cat-file', '80993781b54ed1b81e47a31e6427940c1a9deafb']}
          />
          <Output
            code={`
            hello world
            `}
          />
          <p>
            Git uses <b>SHA-1 hash</b> to calculate the hash of the object. The hash is calculated
            based on the content of the object. If the content of the object changes, the hash will
            also change. This is how Git ensures the integrity of the data.{' '}
            <b>
              We can have same file name but different content and Git will store them as two
              different objects
            </b>
            .
          </p>
          <BashShell
            code={`
            echo "changed contents" > filename.txt
git hash-object -w filename.txt
            `}
            highlight={['echo', 'filename.txt']}
          />
          <Output
            code={`
            3b18e512dba79e4c8300dd08aeb37f8e728b8dad
            `}
          />
          <p>
            Now if we check the contents of the objects directory, we will see two files with
            different hashes.
          </p>
          <BashShell
            code={`
            find .git/objects -type f
            `}
            highlight={['objects']}
          />
          <Output
            code={`
            .git/objects/80/993781b54ed1b81e47a31e6427940c1a9deafb
.git/objects/3b/18e512dba79e4c8300dd08aeb37f8e728b8dad
            `}
          />
          <p>
            The <b>first object</b> contains the content <b>hello world</b> and the{' '}
            <b>second object</b> contains the content <b>changed contents</b>, you can again verify
            this using the <code>cat-file</code> command.
          </p>
          <BashShell
            code={`
            git cat-file -p 3b18e512dba79e4c8300dd08aeb37f8e728b8dad
            `}
            highlight={['cat-file', '3b18e512dba79e4c8300dd08aeb37f8e728b8dad']}
          />
          <Output
            code={`
            changed contents
            `}
          />
          <p>
            To save space, Git uses <b>Zlib compression</b> to compress the objects before storing
            them in the objects directory. Your files are stored as <code>blob</code> type in the
            objects directory, it only contains the file contents, not the file name or location.
          </p>
          <p>
            There are four types of objects in Git: <b>blob</b>, <b>tree</b>, <b>commit</b>, and{' '}
            <b>tag</b>. Each object has a specific purpose and is used to store different types of
            data. You can see the type of object using the <code>cat-file -t</code> command.
          </p>
          <BashShell
            code={`
            git cat-file -t 80993781b54ed1b81e47a31e6427940c1a9deafb
            `}
            highlight={['cat-file', '80993781b54ed1b81e47a31e6427940c1a9deafb']}
          />
          <Output
            code={`
            blob
            `}
          />
          <h3>Tree Objects</h3>
          <p>
            The <b>tree object</b> is used to store the directory structure of your project. It
            contains the file names, permissions, and the hash of the <code>blob</code> objects.
          </p>
          <p>
            The tree object contains reference of the <code>blob</code> objects and other{' '}
            <code>tree</code> objects associated with {"it's"} sub directories. It is a recursive
            data structure that represents the directory structure of your project.
          </p>
          <BlogImage
            src="https://utfs.io/f/0fJmkDdxISZBbU5f4s8sJf5mhq3RAulKMoWDUeIZLC2Gyczn"
            alt="Tree Object Structure"
          />
          <BashShell
            code={`
            git cat-file -p master^{tree}
            `}
            highlight={['cat-file', 'master', '^{tree}']}
          />
          <Output
            code={`
            100644 blob 80993781b54ed1b81e47a31e6427940c1a9deafb    .gitignore
100644 blob 3b18e512dba79e4c8300dd08aeb37f8e728b8dad    readme.md
040000 tree 99f1a6d12cb4b6f19c8655fca46c3ecf317074e0    src
            `}
          />
          <p>
            The <code>{'master^{tree}'}</code> syntax specifies the tree object that is pointed to
            by the last commit on your master branch. Notice that{' '}
            <b>the {`"src"`} subdirectory isn’t a blob but a pointer to another tree</b>.
          </p>
          <Aside type="warning">
            <p>
              For Windows, enclose the whole expression in quotes{' '}
              <code>{`git cat-file -p "master^{tree}"`}</code>.
            </p>
          </Aside>
          <h3>Commit Objects</h3>
        </div>
      </section>
    </main>
  );
}
