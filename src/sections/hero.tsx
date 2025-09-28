export default function HeroSection() {
  return (
    <section id='home' className='flex flex-col items-end justify-end'>
      <div className='h-[50svh] lg:max-h-[400px] w-full'>
        <span className='sr-only'>homepage padding space</span>
      </div>

      <div>
        <p className='text-sm text-start md:text-base'>bonjour👋 I'm</p>
        <h1 className='font-bold text-start text-8xl lg:text-9xl'>Minard Parilla</h1>
        <p className='md:text-lg font-semibold text-start md:text-end'>a Fullstack Web Developer</p>
      </div>
    </section>
  )
}
