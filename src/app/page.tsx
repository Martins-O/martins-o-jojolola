import Hero from '@/components/sections/Hero'
import BriefAbout from '@/components/sections/BriefAbout'
import FeaturedSkills from '@/components/sections/FeaturedSkills'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import CallToAction from '@/components/sections/CallToAction'

export default function Home() {
  return (
    <main id="main" className="min-h-screen" tabIndex={-1}>
      <Hero />
      <BriefAbout />
      <FeaturedSkills />
      <FeaturedProjects />
      <CallToAction />
    </main>
  )
}
