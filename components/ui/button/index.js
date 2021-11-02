import { ButtonType, ButtonIcon } from "../../themes/";
import Icon from "../icon/";

const Button = ({ type, onHandle, className, children, icon }) => {
  return (
    <div className={[ButtonType[type], className].join(" ")} onClick={onHandle}>
      {icon && <Icon type={icon} />}
      {children}
    </div>
  );
};

export default Button;
