import { H1 } from '~/components/typography'
import Link from 'next/link'
import {Button} from '~/components/ui/button'
import {ChevronDown} from 'lucide-react'
import {ProjectCard} from '~/components/project-card'
import githubData from '../../../data/github-data.json'

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