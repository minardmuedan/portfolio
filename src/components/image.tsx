import { useState } from 'react'
import { Blurhash } from 'react-blurhash'

type Props = { height: number; width: number; blurHash: string } & React.ImgHTMLAttributes<HTMLImageElement>

export default function Image({ width, height, className, blurHash, ...props }: Props) {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div style={{ aspectRatio: width / height }} className={`relative  bg-accent overflow-hidden ${className}`}>
      <Blurhash hash={blurHash} resolutionX={32} resolutionY={32} punch={1} height='100%' width='100%' />

      <img
        {...props}
        loading='lazy'
        onLoad={() => setIsLoading(true)}
        className={`w-full bg-background absolute object-cover inset-0 transition-opacity ease-out ${
          isLoading ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}
