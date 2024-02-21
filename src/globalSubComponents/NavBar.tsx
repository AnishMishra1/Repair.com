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
    <div className="fixed px-[10rem] py-[1rem] w-full z-[500]">
      <Navbar
        isMenuOpen={navOpenStatus}
        onMenuOpenChange={setIsMenuOpen}
        className="dark  h-[1rem] bg-transparent nav px-[3rem] py-[1.5rem] bg-[#0077B9]"
        maxWidth="full"
      >
        <NavbarContent>
          <div className="flex flex-row justify-center items-center gap-x-[0.2rem]">
            <NavbarMenuToggle
              aria-label={navOpenStatus ? "Close menu" : "Open menu"}
              className="lg:hidden text-white"
            />
            <Link to="../Home">
              <p className="text-white font-bold text-xl w-[12rem]">PLUMBING & REPAIR</p>
            </Link>
            <div className="hbar hidden lg:block"></div>
            <p className="text-white font-bold text-xl mx-4 w-[10rem]">WE'RE OPEN</p>
          </div>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link to="../Auth">
              <Button color="warning" radius="sm" variant="shadow" startContent={<FaPhoneAlt />}>
                (909) 316-5079
              </Button>
            </Link>
          </NavbarItem>
        </NavbarContent>
        {/* <NavbarMenu className="bg-[#28292b] mt-[1rem]">
          {menuItems.map((item, index) => {
            if (item === "Services") {
              return (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Accordion className="p-0" isCompact>
                    <AccordionItem
                      aria-label={item}
                      title={item}
                      classNames={{ title: curTab === item ? "active" : "notActive", content: "text-white" }}
                    >
                      <Listbox aria-label="Services" color="warning">
                        <ListboxItem key="Investment" className="p-0" textValue="Investment">
                          <Link
                            style={{ display: "block", padding: "6px 8px" }}
                            to={"./Investment"}
                            onClick={setIsMenuOpen}
                          >
                            Investment
                          </Link>
                        </ListboxItem>
                        <ListboxItem key="Crypto" className="p-0" textValue="Crypto">
                          <Link
                            style={{ display: "block", padding: "6px 8px" }}
                            to={"./Crypto"}
                            onClick={setIsMenuOpen}
                          >
                            Crypto
                          </Link>
                        </ListboxItem>
                        <ListboxItem key="Options" className="p-0" textValue="Options">
                          <Link
                            style={{ display: "block", padding: "6px 8px" }}
                            to={"./Options"}
                            onClick={setIsMenuOpen}
                          >
                            Options
                          </Link>
                        </ListboxItem>
                        <ListboxItem key="Retirement" className="p-0" textValue="Retirement">
                          <Link
                            style={{ display: "block", padding: "6px 8px" }}
                            to={"./Retirement"}
                            onClick={setIsMenuOpen}
                          >
                            Retirement
                          </Link>
                        </ListboxItem>
                      </Listbox>
                    </AccordionItem>
                  </Accordion>
                </NavbarMenuItem>
              );
            } else {
              return (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    className={curTab === item ? "active" : "notActive"}
                    to={index === 5 ? "../Auth" : `../${item}`}
                    onClick={setIsMenuOpen}
                  >
                    {item}
                  </Link>
                </NavbarMenuItem>
              );
            }
          })}
        </NavbarMenu> */}
      </Navbar>
      <Navbar
        isMenuOpen={navOpenStatus}
        onMenuOpenChange={setIsMenuOpen}
        className="dark h-[10rem] nav p-[3rem] rounded-lg bg-white"
        maxWidth="full"
      >
        <NavbarBrand>
          <Link to="../Home">
            <Image width={120} src={logo} alt="logo" radius="none" className="" />
          </Link>
        </NavbarBrand>
        <NavbarContent>
          <NavbarMenuToggle aria-label={navOpenStatus ? "Close menu" : "Open menu"} className="lg:hidden text-white" />
        </NavbarContent>

        <NavbarContent className="hidden lg:flex" justify="start">
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
        </NavbarContent>
        <NavbarContent justify="end">
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
        <NavbarMenu className="bg-[#28292b] mt-[1rem]">
          {menuItems.map((item, index) => {
            if (item === "Services") {
              return (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Accordion className="p-0" isCompact>
                    <AccordionItem
                      aria-label={item}
                      title={item}
                      classNames={{ title: curTab === item ? "active" : "notActive", content: "text-white" }}
                    >
                      <Listbox aria-label="Services" color="warning">
                        <ListboxItem key="Investment" className="p-0" textValue="Investment">
                          <Link
                            style={{ display: "block", padding: "6px 8px" }}
                            to={"./Investment"}
                            onClick={setIsMenuOpen}
                          >
                            Investment
                          </Link>
                        </ListboxItem>
                        <ListboxItem key="Crypto" className="p-0" textValue="Crypto">
                          <Link
                            style={{ display: "block", padding: "6px 8px" }}
                            to={"./Crypto"}
                            onClick={setIsMenuOpen}
                          >
                            Crypto
                          </Link>
                        </ListboxItem>
                        <ListboxItem key="Options" className="p-0" textValue="Options">
                          <Link
                            style={{ display: "block", padding: "6px 8px" }}
                            to={"./Options"}
                            onClick={setIsMenuOpen}
                          >
                            Options
                          </Link>
                        </ListboxItem>
                        <ListboxItem key="Retirement" className="p-0" textValue="Retirement">
                          <Link
                            style={{ display: "block", padding: "6px 8px" }}
                            to={"./Retirement"}
                            onClick={setIsMenuOpen}
                          >
                            Retirement
                          </Link>
                        </ListboxItem>
                      </Listbox>
                    </AccordionItem>
                  </Accordion>
                </NavbarMenuItem>
              );
            } else {
              return (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    className={curTab === item ? "active" : "notActive"}
                    to={index === 5 ? "../Auth" : `../${item}`}
                    onClick={setIsMenuOpen}
                  >
                    {item}
                  </Link>
                </NavbarMenuItem>
              );
            }
          })}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavBar;
