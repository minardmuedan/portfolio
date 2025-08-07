import Project from '@/components/project'
import SectionTitle from '@/components/ui/section-title'

export default function ProjectsSection() {
  return (
    <section id='projects-section'>
      <SectionTitle className='text-xl font-semibold mb-10'>📚 Projects</SectionTitle>

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
            className='flex-col lg:flex-row-reverse'
          />
        </li>
      </ul>

      <p className='text-center text-muted-foreground text-sm mt-10'>some of my works were confidential</p>
    </section>
  )
}
