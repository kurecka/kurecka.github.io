import * as React from "react"
import { Link } from "gatsby"

import ContentBlock from '../components/ContentBlock'
import Centered from '../components/env/Centered'
import me from '../images/me.jpg'
import publications from '../data/Publications'

const sections = [
    {
        title: 'Publications',
        type: 'citations',
        data: Object.values(publications),
    },
    {
        title: 'Stays abroad & Attended events',
        type: 'events',
        data: [
            {
                'title': 'TU Wien',
                'subtext': 'Erasmus echange',
                'date': 'March - June 2022',
            },
            {
                'title': '55th Czech-Slovak Conference on Graph Theory, Brno',
                'date': '2020',
            },
        ]   
    },
    {
        title: 'Teaching',
        type: 'events',
        // dark: true,
        data: [
            {
                'title': 'Probability in Computer Science (tutoring)',
                'date': 'Fall 2022',
                'subtext': 'FI, Masaryk University',
            },
            {
                'title': 'Complexity \& Computability (tutoring)',
                'date': 'Fall 2021',
                'subtext': 'FI, Masaryk University',
            },
            {
                'title': ' Seminar of Functional Programming (lecturing)',
                'date': 'Spring 2020',
                'subtext': 'FI, Masaryk University',
            },
            {
                'title': 'Algorithms \& Data Structures (tutoring)',
                'date': 'Spring 2020',
                'subtext': 'FI, Masaryk University',
            },
            {
                'title': 'Non-Imperative Programming (tutoring)',
                'date': 'Fall 2019',
                'subtext': 'FI, Masaryk University',
            },
        ]   
    },
    {
        title: 'Awards and honors',
        type: 'events',
        data: [
            {
                'title': '1st place - Czech and Slovak science competition (SVOČ 2022)',
                'subtext': 'Category: Graph Theory and Combinatorics',
                'body': 'Work: Quasirandomness of Permutations',
                'date': 'May 2022',
            },
            {
                'title': 'Dean\'s Award for excellent academic performance',
                'subtext': undefined,
                'date': 'June 2021',
            },
            {
                'title': 'Dean\'s Award for final thesis',
                'subtext': undefined,
                'date': 'June 2021',
            },
        ]   
    },
    {
        title: 'Education',
        type: 'events',
        data: [
            {
                'title': 'Master’s degree in Theoretical Informatics',
                'subtext': 'Faculty of Informatics, Masaryk University',
                'date': '2021 - Present',
            },
            {
                'title': 'Bachelor’s degree in Mathematical Informatics',
                'subtext': 'Faculty of Informatics, Masaryk University',
                'body': <span>Thesis: <span className="font-normal italic">Quasirandomness of Permutations</span>, supervized by prof. Daniel Král</span>,
                'date': '2018 - 2021',
            },
        ]   
    },
    {
        title: 'Work Experience',
        type: 'events',
        dark: true,
        data: [
            {
                'title': 'Scientific computing in Plumed',
                'date': 'Winter 2021 - present',
                'subtext': 'UVT, Masaryk University',
                'body': 'Development of collective variables for molecular metadynamics based on neural networks.'
            },
        ]   
    },
]


function IndexPage() {
    console.log(publications)
    return (
        <main>
            <Centered>
            <section>
            <header className="mt-32 py-med max-w-screen-md">
                <img src={me} className="block mx-auto w-52 rounded-full"></img>
                <div className="mx-auto my-med relative">
                    <h2 className="font-thin">Hi, I'm</h2>
                    <h1 className="font-thin">Martin Kurečka</h1>
                    <div className="font-light absolute right-5 top-4">m.kurecka (at) mail.muni.cz</div>
                </div>
                <p my-1>
                I am a Master student of Theoretical Computer Science at the <Link className="text-link" to="https://www.fi.muni.cz/">Faculty of Informatics, Masaryk University</Link>.
                I finished my Bachelor degree under the supervison of <Link className="text-link" to="https://www.ucw.cz/~kral/index.html.en">Prof. Daniel Král'</Link>.
                My research was focused on combinatorial limits and quasirandom permutations.
                Currently, I am involved in laboratory <Link className="text-link" to="https://formela.fi.muni.cz/">FORMELA</Link>.
                </p>
                <p className="my-1 font-light">
                    
                </p>
            </header>
            </section>
            </Centered>

            {sections.map(
                section => (
                    <div className={(section.dark?'dark':'')}>
                        <Centered>
                            <section>
                            <ContentBlock {...section}></ContentBlock>
                            </section>
                        </Centered>
                    </div>
                )
            )}
        </main>
    )
}

export default IndexPage
