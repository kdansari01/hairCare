import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
export const NavbarItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/shop",
    name: "Shop",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/contact",
    name: "Contact",
  },
  {
    path: "/blog",
    name: "Blog",
  },
  {
    path: "/user",
    icon: <BsFillPersonFill style={{ fontSize: 30 }} />,
  },
  {
    path: "/cart",
    icon: <AiOutlineShoppingCart style={{ fontSize: 30 }} />,
  },
];
