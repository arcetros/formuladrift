import Image from 'next/image'
import Link from 'next/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

let sponsors = [
  ['1', 'col-span-4', 'http://www.ford.com/'],
  ['2', 'col-span-4', 'http://www.bcracing-na.com/'],
  ['3', 'col-span-4', 'https://www.linkecu.com/'],
  ['4', 'col-span-6', 'https://www.mensjournal.com/'],
  ['5', 'col-span-6', 'https://www.toyota.com/'],
  ['6', 'col-span-6', 'https://www.nittotire.com/'],
  ['7', 'col-span-6', 'http://www.falkentire.com/'],
  ['8', 'col-span-6', 'https://www.gtradial-us.com/'],
  ['9', 'col-span-6', 'http://www.drinknos.com/'],
  ['10', 'col-span-4', 'https://www.airforce.com/'],
  ['11', 'col-span-4', 'https://www.royalpurple.com/'],
  ['12', 'col-span-4', 'https://typesauto.com/'],
]

const Item = ({ image, url }) => {
  return (
    <Link href={url} passHref={true}>
      <a target="_blank" className="h-full container">
        <div className="relative filter grayscale-0 lg:grayscale hover:grayscale-0">
          <div className="relative h-[100px] lg:w-full">
            <Image
              src={`/sponsors/${image}.png`}
              alt="Sponsors"
              layout="fill"
              className="object-cover relative"
            />
          </div>
        </div>
      </a>
    </Link>
  )
}

export const Sponsors = () => {
  return (
    <section className="container max-w-[105rem] lg:max-w-[60rem] xl:max-w-[105rem] flex mx-auto my-12 relative w-full bg-gray-900">
      <div className="flex w-full">
        {sponsors.map((item, id) => {
          return <Item key={id} image={item[0]} col={item[1]} url={item[2]} />
        })}
      </div>
    </section>
  )
}
