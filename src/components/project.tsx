import { Button, buttonVariants } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import Image from './image'

type ProjectPropsType = {
  title: string
  description: string
  thumbnail: {
    src: string
    blurHash: string
  }
  stacks: string[]
  skillAndDeliverables: string[]
  images: { src: string; blurHash: string; h: number }[]
  className?: string
}

export default function Project({ ...props }: ProjectPropsType) {
  return (
    <div className={cn('flex flex-col lg:flex-row justify-between gap-10 border p-5 items-center rounded-xl', props.className)}>
      <Image
        height={396}
        width={592}
        blurHash={props.thumbnail.blurHash}
        src={`project-images/${props.thumbnail.src}/1200.png 1200w`}
        srcSet={`
          project-images/${props.thumbnail.src}/592.png 592w,
          project-images/${props.thumbnail.src}/858.png 858w,
          project-images/${props.thumbnail.src}/1200.png 1200w `}
        sizes='(min-width: 640px) 400px, calc(100vw - 74px)'
        className='w-full sm:max-w-[25rem]'
      />

      <div>
        <h4 className='font-semibold mb-2'>{props.title}</h4>
        <p className='text-sm text-muted-foreground max-w-2xl line-clamp-4'>{props.description}</p>

        <ProjectDialog {...props} />
      </div>
    </div>
  )
}

export function ProjectDialog({ title, description, stacks, skillAndDeliverables, images }: ProjectPropsType) {
  const techUsed = [
    { title: 'Tech Stacks', value: stacks },
    { title: 'Skills and Deliverables', value: skillAndDeliverables },
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='mt-5'>view more</Button>
      </DialogTrigger>
      <DialogContent className=' max-w-[95%] border-0 grid grid-cols-1 md:grid-cols-3 gap-4 lg:max-w-5xl'>
        <DialogHeader className='md:sticky md:top-0 h-fit'>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>

          {techUsed.map(({ title, value }) => (
            <div className='mt-10'>
              <p className='mb-2 text-sm text-muted-foreground'>{title} :</p>
              <ul className='flex flex-wrap gap-1 justify-center sm:justify-start'>
                {value.map((name, i) => (
                  <li key={i} className={buttonVariants({ variant: 'secondary' })}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </DialogHeader>

        <div className='col-span-2'>
          <ul className='space-y-2 *:rounded'>
            {images.map(({ src, blurHash, h }, i) => (
              <li key={i} className='rounded-md overflow-hidden'>
                <Image
                  key={i}
                  width={644}
                  height={h}
                  blurHash={blurHash}
                  src={`/project-images/${src}/1180.png`}
                  sizes='(min-width: 1180px) 644px, (min-width: 780px) calc(57.63vw - 25px), calc(95vw - 80px)'
                  srcSet={`
                    /project-images/${src}/256.png 256w,
                    /project-images/${src}/425.png 425w,
                    /project-images/${src}/545.png 545w,
                    /project-images/${src}/644.png 644w,
                    `}
                  alt={src}
                />
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
