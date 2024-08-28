import { H1 } from '~/components/typography'
import {ProjectCard} from '~/components/project-card'
import githubData from '../../../data/github-data.json'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects | zackozack',
    description: 'I am a fullstack software engineer who loves to build things for the web.',
  }

export default function Projects(){
    return <main className="flex justify-center container">
    <section className="flex flex-col w-full max-w-3xl mt-10">
        <H1>Projects</H1>
        <div className='mt-4'>
            {
                githubData.data.user.topRepositories.nodes.slice(0,2).map((repo, index) => {
                    return <ProjectCard key={index} {...repo} />
                })
            }
        </div>
        
    </section>
    </main>
}