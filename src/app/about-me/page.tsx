import { ChevronDown } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { ImageCarousel } from "~/components/image-carousel";
import { RecommendationCard } from "~/components/recommendation-card";
import { H2, H3, P } from "~/components/typography";
import { Button } from "~/components/ui/button";
import recommendationsData from '../../../data/recommendations.json'
import githubData from '../../../data/github-data.json'
import { ProjectCard } from "~/components/project-card";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Me | zackozack',
    description: 'I am a fullstack software engineer who loves to build things for the web.',
  }

export default function AboutMe(){
    return <main className="flex justify-center container">
    <section className="flex flex-col h-[calc(100vh-48px)] w-full max-w-3xl mt-10">
        <H2>Introduction</H2>
        <table className="mb-10">
            <tbody>
                <tr className="flex md:flex-row flex-col items-center justify-between">
                    <td className="w-fit">
                        <ImageCarousel
                        items={
                            [{
                                id: 1,
                                title: 'zackozack',
                                image: 'https://utfs.io/f/7b6ae0f8-148e-4e57-bd36-14ae0c90887b-e4obn3.gif'
                            },
                            {
                                id: 2,
                                title: 'ayush',
                                image: 'https://utfs.io/f/2c14b502-511f-45f9-9dff-4a83a1cb77b1-wj0x4g.webp'
                            },
                        ]
                        }
                        />
                    </td>
                    <td className="md:pl-10 pt-3 md:pt-0 text-justify text-secondary-foreground">
                        <P>
                            {"Hello! I'm Ayush, also known as ZackoZack, depending on where you know me from. I'm a Fullstack Software Developer based in India 🇮🇳 with a passion for building web applications. I have expertise in Next.js, React, Node.js, and TypeScript, and I'm also well-versed in Java and Spring Boot. Currently, I work as a Software Engineer at Volkswagen Group."}
                        </P>
                    </td>
                </tr>
            </tbody>
        </table>
        <H2>Interests and Goals</H2>
        <div className="mb-10">
            <P className="text-sm">
                {"I'm passionate about web development and dedicated to creating applications that address real-world challenges. I believe open-source software should excel in delivering an outstanding user experience, robust security, and comprehensive accessibility."}
            </P>
            <P className="text-sm">
                {"Here are the top open-source projects I've contributed to and maintain."}
            </P>
            <div>
                {
                    githubData.data.user.topRepositories.nodes.slice(0,2).map((repo, index) => {
                        return <ProjectCard key={index} {...repo} />
                    })
                }
            </div>
            <div className="mb-2 flex justify-center">
            <Link href="/projects">
            <Button variant='ghost' size='sm' className="rounded-full">
                    View All Projects
                    <ChevronDown size={20} className="ml-2" />
            </Button>
            </Link>
        </div>
        <P className="text-sm">
            {"I'm also going to start a blog soon, where I'll share my experiences, insights, and learnings from my journey as a developer."}
        </P>
        </div>
        <H2>Recommendations</H2>
        <div>
            <div>
                <P className="text-sm">
                    {"Here are some of the recommendations I've received from my colleagues and peers. I'm grateful for their kind words and support."}
                </P>
            </div>
            <div className="w-full flex justify-center mb-2 mt-4">
            <a href="https://www.linkedin.com/in/ayush-kumar-yadav/edit/forms/recommendation/write/?profileFormEntryPoint=PROFILE_SECTION&profileUrn=urn%3Ali%3Afsd_profile%3AACoAAC_FOPQBNboYueAWvsHwP66NJxIybljtgys" target="_blank">
                <Button variant='outline' size='lg'>
                <FaLinkedin className="mr-2" size={24} />
                    <H3>Add Recommendation</H3>
                </Button>
            </a>
            </div>
            {
                recommendationsData.recommendations.map((recommendation, index) => {
                    if (recommendation.isPinned) {
                        return <RecommendationCard key={index} {...recommendation} />
                    }
                    else return null;
                })
            }
        </div>
        <div className="mb-2 flex justify-center">
            <a href="https://www.linkedin.com/in/ayush-kumar-yadav/#recommendations" target="_blank">
            <Button variant='ghost' size='sm' className="rounded-full">
                    View All Recommendations
                    <ChevronDown size={20} className="ml-2" />
            </Button>
            </a>
        </div>
        <H2>Photography</H2>
        <P>WIP</P>
    </section>
</main>
}