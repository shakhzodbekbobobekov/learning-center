import {  TextAreaProps } from "./text-area.props";
import cn from "classnames";
import styles from "./text-area.module.css";

const Input = ({ className, children, ...props }: TextAreaProps): JSX.Element => {
  return <textarea  className={cn(styles.textArea, className)} {...props} />;
};

export default Input;
