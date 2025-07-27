export default function Navbar() {
  return (
    <header className='h-14 border-b border-muted-foreground/20 flex items-center justify-end px-5'>
      <nav>
        <ul className='flex gap-4 text-muted-foreground'>
          {['me', 'projects', 'contact me'].map((label, i) => (
            <li key={i}>{label}</li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
