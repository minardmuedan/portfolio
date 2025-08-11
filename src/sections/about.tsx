import TechStacks from '@/components/tech-stacks'
import SectionTitle from '@/components/ui/section-title'

export default function AboutSection() {
  return (
    <section id='me'>
      <SectionTitle>🙋🏻‍♂️ About Me?</SectionTitle>
      <p className='max-w-2xl text-muted-foreground text-pretty'>
        I’m a self-taught fullstack developer specializing in Next.js and modern web development stacks. Passionate about building fast,
        responsive, and user-friendly applications, I’m constantly exploring new technologies to refine my skills and deliver high-quality
        digital experiences.
      </p>

      <p className='mt-32 mb-5 text-muted-foreground text-center text-sm'>web tech stacks I've worked on:</p>
      <TechStacks />
    </section>
  )
}
