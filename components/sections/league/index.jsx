import Image from 'next/image'

export const League = () => {
  return (
    <div className="relative max-w-[105rem] lg:max-w-[60rem] xl:max-w-[105rem] w-full flex mx-auto my-12">
      <div className="mx-4 md:mx-12 lg:mx-0 xl:mx-44 w-full">
        <h1 className="font-primary font-bold text-white text-lg lg:text-xl mb-8">DRIFT LEAGUES</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 h-[20rem] md:h-[40rem] lg:h-[20rem] 2xl:h-[26rem]">
          <div className="relative h-full w-full col-span-1">
            <Image src="/leagues/pro.png" layout="fill" className="object-cover " />
          </div>
          <div className="relative h-full w-full col-span-1">
            <Image src="/leagues/prospec.png" layout="fill" className="object-cover" />
          </div>
          <div className="relative h-full w-full col-span-1 ">
            <Image src="/leagues/jp.png" layout="fill" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
