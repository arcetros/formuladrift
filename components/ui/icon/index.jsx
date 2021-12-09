import * as allIcon from './icons'

const Index = (props) => {
  const { UserIcon } = allIcon
  const icons = allIcon
  const { type } = props

  const empty = () => {
    return <UserIcon />
  }

  const Icon = icons[type] ? icons[type] : empty

  return <Icon {...props} />
}

export default Index
