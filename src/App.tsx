import Navbar from './components/navbar'
import AboutSection from './sections/about'
import ContactsSection from './sections/contacts'
import HeroSection from './sections/hero'
import ProjectsSection from './sections/projects'

export default function App() {
  return (
    <>
      <Navbar />

      <main className='px-4 md:px-6 lg:px-10  *:border-green-500 space-y-40'>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactsSection />

        <footer className='pb-20 space-y-5 text-center'>
          <p className='text-4xl'>🌸 🌼 🌸</p>
          <p className='text-  '>just because it&#8217;s simple doesn&#8217;t mean it&#8217;s bad</p>
          <p className='text-sm text-muted-foreground'>© 2024 · Minard Parilla | All rights reserved</p>
        </footer>
      </main>
    </>
  )
}
