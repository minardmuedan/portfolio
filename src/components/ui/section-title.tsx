import { cn } from '@/lib/utils'

export default function SectionTitle({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return (
    <h2 data-aos='fade-right' {...props} className={cn('text-lg md:text-xl mb-4 font-semibold text-muted-foreground/80', className)}>
      {children}
    </h2>
  )
}
