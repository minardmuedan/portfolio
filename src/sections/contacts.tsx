import { Button } from '@/components/ui/button'
import SectionTitle from '@/components/ui/section-title'
import { SendIcon } from 'lucide-react'

export default function ContactsSection() {
  return (
    <section id='contacts'>
      <SectionTitle className='mb-10'>☎️ Contacts</SectionTitle>

      <div className='flex flex-col items-center justify-center gap-4'>
        <p className='text-2xl md:text-3xl text-center font-bold'>minardmuedan@gmail.com</p>
        <Button data-aos='zoom-in' asChild>
          <a href='mailto:minardmuedan@gmail.com'>
            Contact Me <SendIcon />
          </a>
        </Button>
      </div>
    </section>
  )
}
