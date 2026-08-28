import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { experience, profile, projects, skillGroups } from './data'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar name={profile.name} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Experience experience={experience} />
        <Skills skillGroups={skillGroups} />
        <Projects projects={projects} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  )
}
