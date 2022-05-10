import useToggle from '../../../hooks/useToggle'
import Link from 'next/link'
import Icon from '../../ui/icon'

const NavLink = ({ title, items, href }) => {
  const [isToggle, setIsToggle] = useToggle()
  return (
    <>
      <li className="relative" onClick={setIsToggle} aria-hidden={true}>
        {href ? (
          <Link href={href}>{title}</Link>
        ) : (
          <div className="flex flex-col">
            <div className="flex gap-x-2 items-center">
              <span>{title}</span>
              <span>{isToggle ? <Icon type="ChevronDown" /> : <Icon type="ChevronRight" />}</span>
            </div>
            {items && isToggle && (
              <ul className="flex flex-col gap-y-3 mt-3 mx-3">
                {items.map((item, key) => (
                  <li key={key} className="text-gray-400 hover:text-gray-300 text-base">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </li>
    </>
  )
}

export default NavLink
