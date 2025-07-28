import Navbar from './components/navbar'
import { ProjectDialog } from './components/project'
import TechStacks from './components/tech-stacks'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Textarea } from './components/ui/textarea'

export default function App() {
  return (
    <>
      <Navbar />

      <main className='px-10 space-y-40'>
        <section id='hero-section' className='h-[60dvh] flex items-end justify-end'>
          <div>
            <p>bonjour👋 I'm</p>
            <h1 className='font-bold text-9xl'>Minard Parilla</h1>
            <h3 className='text-lg  font-semibold text-end'>a Fullstack Developer</h3>
          </div>
        </section>

        <section id='about-section'>
          <h3 className='text-xl mb-4 font-semibold'>🙋🏻‍♂️ About Me?</h3>
          <p className='max-w-    text-muted-foreground'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos totam corrupti minus explicabo incidunt. Illo consectetur earum
            magni, laudantium reiciendis quidem odio? Incidunt rem, unde dolorem velit eveniet pariatur? Libero est possimus, esse quaerat
            quod sed culpa obcaecati nesciunt magnam corporis enim totam dolor fugit modi recusandae cumque maiores nemo?
          </p>

          <p className='mt-32 mb-5 text-muted-foreground text-center text-sm'>web tech stacks I've worked on:</p>
          <TechStacks />
        </section>

        <section id='projects-section'>
          <h3 className='text-xl font-semibold mb-10'>📚 Projects</h3>

          <ul className='space-y-10'>
            <li className='flex gap-10  border hover:bg-accent p-5 items-center rounded-xl'>
              <div className='h-72 grid grid-cols-2 aspect-square border gap-1'>
                <div className='overflow-hidden relative bg-red-500'>
                  <img src='/project-images/movie-homepage-768.png' className='rounded object-cover absolute h-full' />
                </div>

                <div className='grid gap-1 grid-cols-1'>
                  <div className='overflow-hidden relative bg-red-500'>
                    <img src='/project-images/movie-popular.png' className='rounded object-cover absolute w-full' />
                  </div>
                  <div className='overflow-hidden relative bg-red-500'>
                    <img src='/project-images/movie-details.png' className='rounded object-cover absolute w-full' />
                  </div>
                </div>
              </div>

              <div>
                <h4 className='font-semibold'>Personal Web Portfolio</h4>
                <p className='text-sm text-muted-foreground max-w-2xl'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur voluptas ab iusto ex recusandae at sunt, distinctio
                  quia. Laudantium ab nobis illum, sed et non alias nostrum nesciunt. Necessitatibus voluptatum repellendus culpa vero quae
                  ad odit minus soluta libero sequi nobis quaerat, fuga asperiores exercitationem neque. Possimus id facere eligendi! Fuga
                  atque, excepturi hic nesciunt officia sint sapiente cumque dignissimos.
                </p>

                <ProjectDialog
                  title='Movies & Tv Shows Browsing Website'
                  description=' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur voluptas ab iusto ex recusandae at sunt, distinctio
                  quia. Laudantium ab nobis illum, sed et non alias nostrum nesciunt. Necessitatibus voluptatum repellendus culpa vero quae
                  ad odit minus soluta libero sequi nobis quaerat, fuga asperiores exercitationem neque. Possimus id facere eligendi! Fuga
                  atque, excepturi hic nesciunt officia sint sapiente cumque dignissimos.'
                  stacks={['NextJS', 'React', 'Tailwind', 'Postgres']}
                  skillAndDeliverables={['Image Optimization', 'Authentication', 'UI', 'UX', 'Backend', 'Frontend']}
                  images={[
                    { src: 'movie-homepage-768.png' },
                    { src: 'movie-popular.png' },
                    { src: 'movie-details.png' },
                    { src: 'movie-tv-season-details.png' },
                  ]}
                />
              </div>
            </li>

            {/* <li className=' rounded-md flex justify-between gap-20'>
              <div>
                <h4>Movie and TV Shows Browsing Website</h4>
                <p className='text-sm text-muted-foreground max-w-2xl'>
                  This is a clean and easy-to-use movie browsing website I built for anyone who enjoys exploring films. It’s designed to be
                  simple and responsive, so it works well on both desktop and mobile. You can browse through movies by category, view
                  posters and trailers, and quickly find something that catches your eye. I kept things front-end only to keep it
                  lightweight and focused purely on the viewing experience—no backend, just smooth and aesthetic movie discovery.
                </p>
              </div>
              <Image
                blurHash='L2Avz#4muDt+00GED4~W00+h9i00'
                srcSet='/project-images/movie-homepage-768.png 768w,
                /project-images/movie-homepage-1024.png 1024w'
                width={256}
                height={384}
                alt='movie-homepage'
                className='w-96'
              />
            </li>

            <li className=' rounded-md flex gap-20'>
              <Image
                blurHash='LLQT1E9F%g-;~q?bxuIU-;D%RPxu'
                srcSet='/project-images/gallery-homepage-768.png 768w,
                /project-images/gallery-homepage-1024.png 1024w'
                width={256}
                height={384}
                alt='gallery-homepage'
                className='w-96'
              />
              <div>
                <h4>Image Gallery Website</h4>
                <p className='text-sm text-muted-foreground max-w-2xl'>
                  A sleek image browsing gallery website designed for users to explore and enjoy a wide range of visual content. It offers a
                  simple, user-friendly interface for seamless browsing, with features like categorized galleries, responsive design for
                  both desktop and mobile, and quick navigation. The focus is on delivering a smooth and aesthetic viewing experience
                  without any backend complexity, allowing users to purely enjoy discovering images.
                </p>
              </div>
            </li> */}
          </ul>

          <p className='text-center text-muted-foreground text-sm mt-10'>some of my works were confidential</p>
        </section>
        {/*
      
      
      
      
      
      */}

        <section id='contacts-section'>
          <h3 className='mb-10'>☎️ Contacts</h3>

          <div className='flex gap-10'>
            <p className='text-sm max-w-2xl text-muted-foreground'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolor tempore commodi eveniet sequi animi reiciendis,
              quidem, sed, veniam vitae corrupti! Minus, ipsa soluta culpa illo, doloremque libero quisquam nostrum ab perspiciatis quidem
              totam est voluptatibus deserunt corrupti vero reiciendis temporibus velit. Enim ut exercitationem a aliquid distinctio,
              doloribus ab!
            </p>

            <div className='w-full max-w-2xl'>
              <p>Get In Touch</p>
              <form className='mt-5 w-full'>
                <Label htmlFor='email'>Your Email:</Label>
                <Input id='email' className='mt-2 mb-6' />

                <Label htmlFor='email'>Subject</Label>
                <Input id='email' className='mt-2 mb-6' />

                <Textarea placeholder='Say what you feel' className='h-40' />

                <Button className='mt-6'>Submit</Button>
              </form>
            </div>
          </div>
        </section>

        <footer className='pb-20 space-y-5 text-center'>
          <p className='text-4xl'>🌸 🌼 🌸</p>
          <p className='text-  '>just because it&#8217;s simple doesn&#8217;t mean it&#8217;s bad</p>
          <p className='text-sm text-muted-foreground'>© 2024 · Minard Parilla | All rights reserved</p>
        </footer>
      </main>
    </>
  )
}
