export default function TechStacks() {
  const techStacks = [
    { name: 'figma', className: 'h-9' },
    { name: 'html5' },
    { name: 'css3' },
    { name: 'tailwind', className: 'h-8' },
    { name: 'typescript', className: 'h-9' },
    { name: 'react', className: 'h-9' },
    { name: 'nextjs', className: 'h-5' },
    { name: 'svelte', className: 'h-10' },
    { name: 'php', className: 'h-8' },
    { name: 'docker', className: 'h-6' },
    { name: 'mysql', className: 'h-9' },
    { name: 'postgres', className: 'h-9' },
    { name: 'sqlite', className: 'h-9' },
  ]

  return (
    <ul className='flex flex-wrap gap-5 justify-center items-center w'>
      {techStacks.map(({ name, className }, i) => (
        <li key={i}>
          <img src={`/icons/${name}.svg`} className={className ?? 'h-10'} />
        </li>
      ))}
    </ul>
  )
}
