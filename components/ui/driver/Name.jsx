import Link from 'next/link'
import Icon from '../icon/'
import { Typography } from '../../Typography'

export const Name = (props) => {
    const { driver } = props
    return (
        <div className="flex flex-col mx-7 my-5 md:mx-0 mt-0 lg:mt-12">
            <Typography type="subWhite" size="sm">
                {driver.team_name}
            </Typography>
            <div className="flex items-center">
                <Typography type="primarywhite" size="xl">
                    {driver.name}
                </Typography>
            </div>
            <div className="hidden md:flex items-center gap-x-4 mt-4">
                {driver.socialmedia.length >= 1 &&
                    driver.socialmedia.map((item) => {
                        return (
                            <Link href={item.url} passHref={true} key={item.id}>
                                <a target="_blank">
                                    <Icon type={item.icon} />
                                </a>
                            </Link>
                        )
                    })}
            </div>
        </div>
    )
}
