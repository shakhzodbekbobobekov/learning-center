import { AppContext } from "@/context/app.context";
import { useContext } from "react";

const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);

  return (
    <ul>
      {menu.map((c) => (
        <li>{c._id.secondCategory}</li>
      ))}
    </ul>
  );
};

export default Menu;
