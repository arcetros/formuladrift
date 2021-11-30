import { ButtonType } from './themes/'
import Icon from './ui/icon/'

export const Button = ({ type, onHandle, className, children, icon }) => {
    return (
        <div
            className={[ButtonType[type], className].join(' ')}
            onClick={onHandle}
            aria-hidden="true"
        >
            {icon && <Icon type={icon} />}
            {children}
        </div>
    )
}
