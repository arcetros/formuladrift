import Image from 'next/image'
import Link from 'next/link'

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

const Item = ({ image, col, url }) => {
    return (
        <div className={col}>
            <Link href={url} passHref={true}>
                <a target="_blank">
                    <div className="h-[70px] md:w-4/12 lg:w-full bg-gray-700 filter grayscale hover:grayscale-0">
                        <div className="flex mx-auto relative h-[70px] md:w-4/12 lg:w-1/2">
                            <Image
                                src={`/sponsors/${image}.png`}
                                alt="test"
                                layout="fill"
                                className="object-cover w-full"
                            />
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export const Sponsors = () => {
    return (
        <section className="relative w-full bg-gray-800">
            <div className="max-w-6xl py-4 px-4 md:px-48 mx-auto">
                <div className="grid grid-cols-12 gap-4 mx-auto pt-8">
                    {sponsors.map((item, id) => {
                        return <Item key={id} image={item[0]} col={item[1]} url={item[2]} />
                    })}
                </div>
            </div>
        </section>
    )
}
