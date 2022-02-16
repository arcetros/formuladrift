import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
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
          <div className="relative h-[8rem] lg:h-[8rem] lg:w-full">
            <Image
              src={`/sponsors/${image}.png`}
              alt="Sponsors"
              layout="fill"
              className="object-cover w-full relative"
            />
          </div>
        </div>
      </a>
    </Link>
  )
}

export const Sponsors = () => {
  const settings = {
    infinite: true,
    slidesToScroll: 5,
    slidesToShow: 5,
    arrows: false,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section className="relative w-full bg-gray-900">
      <div className="max-h-full mx-auto">
        <Slider {...settings}>
          {sponsors.map((item, id) => {
            return <Item key={id} image={item[0]} col={item[1]} url={item[2]} />
          })}
        </Slider>
      </div>
    </section>
  )
}
