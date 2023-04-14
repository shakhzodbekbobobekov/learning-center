import { HeaderProps } from "./header.props";

const Header = ({...props}: HeaderProps): JSX.Element => {
  return <div {...props} >header </div>;
};

export default Header;
