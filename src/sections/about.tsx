import TechStacks from '@/components/tech-stacks'
import SectionTitle from '@/components/ui/section-title'

export default function AboutSection() {
  return (
    <section id='about-section '>
      <SectionTitle>🙋🏻‍♂️ About Me?</SectionTitle>
      <p className='max-w-2xl text-muted-foreground'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos totam corrupti minus explicabo incidunt. Illo consectetur earum magni,
        laudantium reiciendis quidem odio? Incidunt rem, unde dolorem velit eveniet pariatur? Libero est possimus, esse quaerat quod sed
        culpa obcaecati nesciunt magnam corporis enim totam dolor fugit modi recusandae cumque maiores nemo?
      </p>

      <p className='mt-32 mb-5 text-muted-foreground text-center text-sm'>web tech stacks I've worked on:</p>
      <TechStacks />
    </section>
  )
}
