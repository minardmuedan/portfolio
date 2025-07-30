import Navbar from './components/navbar'
import Project from './components/project'
import TechStacks from './components/tech-stacks'

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
          <p className='max-w-2xl text-muted-foreground'>
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
            <li>
              <Project
                title='Movies & Tv Shows Browsing Website'
                description='This fullstack movie and TV show platform offers a comprehensive browsing experience with fast, optimized images for smooth navigation. Users can explore extensive details about movies and TV shows, including cast members, crew, and storyline information. The platform supports secure user authentication, enabling personalized features such as favoriting movies and TV shows, as well as creating and managing a watchlist for future viewing. While users can read comments from the community, commenting functionality is currently disabled. The site’s intuitive design and performance-focused architecture provide a seamless and engaging way for enthusiasts to discover and organize their favorite entertainment content.'
                thumbnailSrc='movie-thumbnail.png'
                stacks={['NextJS', 'React', 'Tailwind', 'Postgres']}
                skillAndDeliverables={['Authentication', 'UI', 'UX', 'Backend', 'Frontend', 'Image Optimization']}
                images={[
                  { src: 'movie-homepage.png' },
                  { src: 'movie-popular.png' },
                  { src: 'movie-details.png' },
                  { src: 'movie-tv-season-details.png' },
                ]}
              />
            </li>

            <li>
              <Project
                title='Gallery Browsing Website'
                description=' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur voluptas ab iusto ex recusandae at sunt, distinctio
                  quia. Laudantium ab nobis illum, sed et non alias nostrum nesciunt. Necessitatibus voluptatum repellendus culpa vero quae
                  ad odit minus soluta libero sequi nobis quaerat, fuga asperiores exercitationem neque. Possimus id facere eligendi! Fuga
                  atque, excepturi hic nesciunt officia sint sapiente cumque dignissimos.'
                thumbnailSrc='gallery-thumbnail.png'
                stacks={['NextJS', 'React', 'Tailwind', 'Postgres']}
                skillAndDeliverables={['Authentication', 'UI', 'UX', 'Backend', 'Frontend', 'Image Optimization']}
                images={[
                  { src: 'gallery-homepage.png' },
                  { src: 'gallery-gallery.png' },
                  { src: 'gallery-topics.png' },
                  { src: 'gallery-details.png' },
                ]}
                className='flex-row-reverse'
              />
            </li>
          </ul>

          <p className='text-center text-muted-foreground text-sm mt-10'>some of my works were confidential</p>
        </section>
        {/*
      
      
      
      
      
      */}

        <section id='contacts-section'>
          <h3 className='mb-10'>☎️ Contacts</h3>

          <p>minardmuedan@gmail.com</p>
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
