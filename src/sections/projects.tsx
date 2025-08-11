import Project from '@/components/project'
import SectionTitle from '@/components/ui/section-title'

export default function ProjectsSection() {
  return (
    <section id='projects'>
      <SectionTitle className='text-xl font-semibold mb-10'>📚 Projects</SectionTitle>

      <ul className='space-y-10'>
        <li data-aos='fade-left'>
          <Project
            title='Movies & Tv Shows Browsing Website'
            description='This fullstack movie and TV show platform offers a comprehensive browsing experience with fast, optimized images for smooth navigation. Users can explore extensive details about movies and TV shows, including cast members, crew, and storyline information. The platform supports secure user authentication, enabling personalized features such as favoriting movies and TV shows, as well as creating and managing a watchlist for future viewing. While users can read comments from the community, commenting functionality is currently disabled. The site’s intuitive design and performance-focused architecture provide a seamless and engaging way for enthusiasts to discover and organize their favorite entertainment content.'
            thumbnail={{ src: 'movie-thumbnail', blurHash: 'L2AABx+[4T%e.T00Kjwc00=xssR5' }}
            stacks={['NextJS', 'React', 'Tailwind', 'Postgres', 'Drizzle', 'Tanstack']}
            skillAndDeliverables={['Authentication', 'UI', 'UX', 'Backend', 'Frontend', 'Image Optimization']}
            images={[
              { src: 'movie-homepage', blurHash: 'U3AABwDNx.K*%%x@D%tl00JWQ:$fvJR:RS9Z', h: 1437 },
              { src: 'movie-popular', blurHash: 'UBBD4*t2JAOs~XkVt7f+4.nls+nPInnNM{V[', h: 1175 },
              { src: 'movie-details', blurHash: 'U69@6TOr4o9E0z-VxaSd01SOx@$*~UW?RjM{', h: 2288 },
              { src: 'movie-tv-season-details', blurHash: 'U69@6TOr4o9E0z-VxaSd01SOx@$*~UW?RjM{', h: 1399 },
            ]}
            href='https://cinespectare.vercel.app'
          />
        </li>

        <li data-aos='fade-right'>
          <Project
            title='Gallery Browsing Website'
            description='A modern and fully optimized image gallery platform where users can explore high-quality photos through curated collections, trending topics, and detailed photographer profiles. Designed with responsive UI/UX for all devices, it delivers smooth navigation, fast-loading images, and optimized performance. Each image can be previewed in detail, downloaded instantly, and is served with advanced optimization techniques for clarity and speed. The platform ensures a seamless browsing experience with proper loading states, minimal delays, and a clean, modern interface.'
            thumbnail={{ src: 'gallery-thumbnail', blurHash: 'LKOWpW_NInIA$f?cx[$*M_x]RjMx' }}
            stacks={['NextJS', 'React', 'Tailwind']}
            skillAndDeliverables={['Image Optimization', 'UI', 'UX', 'Frontend', 'Responsiveness', 'SEO']}
            images={[
              { src: 'gallery-homepage', blurHash: 'UCQvtJIU-;t8afV@tQof~qxux]RPtR-;sVIU', h: 1985 },
              { src: 'gallery-gallery', blurHash: 'UUKUK3xv_NR*WEjYjZWBI@Riodt7t6ofkCkC', h: 1649 },
              { src: 'gallery-topics', blurHash: 'UJN0;xM|?wt64o%gRkV??^M{MxX9%L-pjrIo', h: 560 },
              { src: 'gallery-details', blurHash: 'UfOgE6ax-;bbt8a{xujZ~qa#WUj?M_t7ofW;', h: 1723 },
            ]}
            href='https://luminavision.vercel.app'
            className='flex-col lg:flex-row-reverse'
          />
        </li>
      </ul>

      <p className='text-center text-muted-foreground text-sm mt-10'>some of my works were confidential</p>
    </section>
  )
}
