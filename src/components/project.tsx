import { Button, buttonVariants } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

type ProjectDialogPropsType = {
  title: string
  description: string
  stacks: string[]
  skillAndDeliverables: string[]
  images: { src: string }[]
}

export function ProjectDialog({ title, description, stacks, skillAndDeliverables, images }: ProjectDialogPropsType) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='mt-5'>view more</Button>
      </DialogTrigger>
      <DialogContent className='grid grid-cols-3 gap-4 md:max-w-2xl lg:max-w-5xl'>
        <DialogHeader className='sticky top-0 h-fit'>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>

          <div className='mt-10'>
            <p className='mb-2 text-sm text-muted-foreground'>Tech stacks :</p>
            <ul className='flex flex-wrap gap-1'>
              {stacks.map((stack, i) => (
                <li key={i} className={buttonVariants({ variant: 'secondary' })}>
                  {stack}
                </li>
              ))}
            </ul>
          </div>

          <div className='mt-10'>
            <p className='mb-2 text-sm text-muted-foreground'>Skills and deliverables :</p>
            <ul className='flex flex-wrap gap-1'>
              {skillAndDeliverables.map((skill, i) => (
                <li key={i} className={buttonVariants({ variant: 'secondary' })}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </DialogHeader>

        <div className='col-span-2'>
          <ul className='space-y-2 *:rounded'>
            {images.map(({ src }, i) => (
              <li key={i}>
                <img src={`/project-images/${src}`} alt='' className='rounded-md' />
              </li>
            ))}
          </ul>

          <div className='border-t mt-5 w-full pt-5'>
            <p className='mb-5 font-medium text-muted-foreground'>More by Minard P.</p>

            <div className='w-50'>
              <div className='bg-red-200 mt-2 w-full aspect-square'></div>
              <p className='mt-2'>Lumina Vision a Gallery browsing website</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
