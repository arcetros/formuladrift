import Link from 'next/link'
import Icon from '../../ui/icon'
import { socials } from './socials'

const Icons = ({ name, href }) => {
  return (
    <Link key={name} href={href} passHref={true}>
      <a target="_blank" className="pointer-events-auto">
        <Icon type={name} />
      </a>
    </Link>
  )
}

const SocialsIcon = () => {
  return socials.map(({ name, href }) => {
    return <Icons key={name} name={name} href={href} />
  })
}

export default SocialsIcon
