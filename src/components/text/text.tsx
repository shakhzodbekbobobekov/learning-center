import { TextPros } from "./text.props";
import styles from "./text.module.css";
import cn from "classnames";

const Text = ({ size = "m", children ,...props }: TextPros): JSX.Element => {
  return (
    <p
      className={cn(styles.p, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.l]: size === "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;
