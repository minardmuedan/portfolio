import { cn } from '@/lib/utils'

export default function SectionTitle({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return (
    <h3 {...props} className={cn('text-xl mb-4 font-semibold', className)}>
      {children}
    </h3>
  )
}
