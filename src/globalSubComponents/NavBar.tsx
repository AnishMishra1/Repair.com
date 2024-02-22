// Dependencies
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Accordion,
  AccordionItem,
  Listbox,
  ListboxItem,
  NavbarBrand,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
// Local Files
import "./NavBar.css";
import logo from "../globalAssets/clipart2359735.png";
import { RootState } from "../store/store";
import { updateNavStatus } from "../store/navOpenStatusSlice";

const menuItems = ["Home", "Services", "About", "Contact", "FAQ", "Log In"];

const NavBar = () => {
  const curTab = useSelector((state: RootState) => state.curTab.value);
  const navOpenStatus = useSelector((state: RootState) => state.navOpenStatus.value);
  const dispatch = useDispatch();

  const setIsMenuOpen = () => {
    dispatch(updateNavStatus(!navOpenStatus));
  };

  return (
    <div className="fixed px-[0.4rem] md:px-[2rem] xl:px-[10rem] py-[1rem] w-full z-[500]">
      <Navbar
        isMenuOpen={navOpenStatus}
        onMenuOpenChange={setIsMenuOpen}
        className="dark h-[1rem] bg-white md:bg-transparent nav px-[3rem] py-[1.5rem] md:bg-[#0077B9] hidden md:flex"
        maxWidth="full"
      >
        <NavbarContent justify="start" className="">
          <div className="flex flex-row justify-center items-center gap-x-[0.2rem]">
            <Link to="../Home" className="hidden md:flex">
              <p className="text-white font-bold text-xl w-[12rem]">PLUMBING & REPAIR</p>
            </Link>
            <div className="hbar hidden lg:block"></div>
            <p className="text-black md:text-white font-bold text-xl mx-4 w-[10rem]">WE'RE OPEN</p>
          </div>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Link to="../Auth">
              <Button color="warning" radius="sm" variant="shadow" startContent={<FaPhoneAlt />}>
                (909) 316-5079
              </Button>
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Navbar
        isMenuOpen={navOpenStatus}
        onMenuOpenChange={setIsMenuOpen}
        className="dark h-[10rem] nav md:p-[3rem] rounded-lg bg-white justify-between"
        maxWidth="full"
      >
        <NavbarBrand>
          <Link to="../Home">
            <Image width={80} src={logo} alt="logo" radius="none" className="" />
          </Link>
        </NavbarBrand>
        <NavbarContent className="md:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={navOpenStatus ? "Close menu" : "Open menu"}
            className="flex md:hidden order-3 text-white bg-[#0077b9] h-[2.5rem] w-[3.5rem]"
          />
        </NavbarContent>
        <NavbarContent className="hidden md:flex">
          <NavbarItem>
            <Link
              to="../Home"
              className={curTab === "Home" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
            >
              <div className="flex flex-row gap-x-6">
                <FaLocationPin className="text-red-600" />
                INLAND EMPIRE, CA
              </div>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="../Contact"
              className={curTab === "Contact" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
            >
              Call 562-667-4755
            </Link>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <div className="flex flex-col gap-y-2">
              <Link to="../Auth">
                <Button
                  color="warning"
                  variant="bordered"
                  radius="none"
                  className="px-[3.9rem] bg-[#0077b9] text-white"
                >
                  CALL US NOW
                </Button>
              </Link>
            </div>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default NavBar;
