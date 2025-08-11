import { Button } from './ui/button'

export default function Navbar() {
  return (
    <header className='h-14 border-b border-muted-foreground/20 flex items-center justify-end px-5'>
      <nav>
        <ul className='flex items-center gap-4 text-muted-foreground'>
          {['me', 'projects'].map((label, i) => (
            <li key={i}>
              <Button variant='ghost' asChild>
                <a href={`#${label}`}>{label}</a>
              </Button>
            </li>
          ))}
          <li>
            <Button>
              <a href='#contacts'>contact me</a>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
