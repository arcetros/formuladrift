import Image from 'next/image'

export const DriverImage = (props) => {
  const { url, name } = props
  return (
    <div className="relative w-full md:w-1/2">
      <div className="h-[350px] md:h-[400px] lg:h-[350px]">
        <Image layout="fill" src={url} alt={name} className="object-cover z-20 w-full" />
      </div>
    </div>
  )
}
