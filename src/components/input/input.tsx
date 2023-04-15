import { InputProps } from "./input.props";
import cn from "classnames";
import styles from "./input.module.css";

const Input = ({ className, children, ...props }: InputProps): JSX.Element => {
  return <input  className={cn(styles.input, className)} {...props} />;
};

export default Input;
