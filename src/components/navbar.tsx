import { Button, buttonVariants } from './ui/button'

export default function Navbar() {
  const navlinks = [
    { title: '🙋🏻‍♂️ me', href: '#me' },
    { title: '📚 projects', href: '#projects' },
  ]

  return (
    <header className='h-14 border-b border-muted-foreground/20 flex sticky top-0 bg-background/80 backdrop-blur-sm z-50 items-center justify-end px-5 md:px-8 lg:px-10'>
      <nav>
        <ul className='flex items-center gap-4 text-muted-foreground'>
          {navlinks.map(({ title, href }, i) => (
            <li key={i}>
              <Button variant='ghost' asChild>
                <a href={href}>{title}</a>
              </Button>
            </li>
          ))}
          <li>
            <a href='#contacts' className={buttonVariants()}>
              ☎️ contact me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
