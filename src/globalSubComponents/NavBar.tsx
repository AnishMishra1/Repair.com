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
  Divider,
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
    <div className="fixed px-[0.4rem] md:px-[2rem] xl:px-[8rem] py-[1rem] w-full z-[500]">
      <Navbar
        isMenuOpen={navOpenStatus}
        onMenuOpenChange={setIsMenuOpen}
        className="dark h-[1rem] nav md:px-[3rem] py-[1.5rem] bg-[#0077B9]"
        maxWidth="full"
      >
        <NavbarContent justify="start" className="">
          <div className="flex flex-row justify-center items-center gap-x-[0.2rem]">
            <Link to="../Home" className="">
              <p className="text-white font-bold text-md md:text-xl w-[12rem]">PLUMBING & REPAIR</p>
            </Link>
            <div className="hbar lg:block"></div>
            <p className="text-white  font-bold text-md md:text-xl mx-4 w-[10rem]">WE'RE OPEN</p>
          </div>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Link to="../Auth" className="hidden md:flex">
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
        className="dark h-[10rem] nav md:p-[1rem] lg:p-[3rem] rounded-lg bg-white"
        maxWidth="full"
      >
        <NavbarBrand className="">
          <Link to="../Home">
            <Image width={120} src={logo} alt="logo" radius="none" className="" />
          </Link>
        </NavbarBrand>
        <NavbarContent className="md:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={navOpenStatus ? "Close menu" : "Open menu"}
            className="order-3 text-white bg-[#0077b9] h-[2.5rem] w-[3.5rem] border-yellow-500 border-3"
          />
        </NavbarContent>
        <NavbarContent className="hidden md:flex">
          <NavbarItem>
            <Link to="../Home" className="text-2xl text-[#0077b9] font-bold hidden md:flex">
              <div className="flex flex-row gap-x-2 text-2xl">
                <FaLocationPin className="text-red-600 mt-[0.1rem] " />
                INLAND EMPIRE, CA
              </div>
            </Link>
          </NavbarItem>
          <Divider orientation="vertical" className="bg-[#0077b9]" />
          <NavbarItem>
            <Link to="../Contact" className="text-2xl text-[#0077b9] font-bold mr-5 hidden md:flex">
              CALL (909) 316-5079
            </Link>
          </NavbarItem>
          <NavbarItem className="hidden xl:flex">
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
