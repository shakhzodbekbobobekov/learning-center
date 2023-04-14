import { SidebarProps } from "./sidebar.props";

const Sidebar = ({   ...props }: SidebarProps): JSX.Element => {
  return <div {...props}>
    sidebar
  </div>;
};

export default Sidebar;
 