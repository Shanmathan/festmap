import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { styles } from "@components/styles";
import { navLinks } from "@constants";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { logo } from "@assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 bg-white bg-opacity-50 top z-[9999]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <ScrollLink
          to="home"
          smooth={true}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
            setToggle(false);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-slate-900 text-[18px] font-bold cursor-pointer flex">
            Puri Beach
          </p>
        </ScrollLink>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-slate-900" : "text-slate-500"
              } font-poppin font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                setToggle(false);
                setActive(link.title);
              }}
            >
              <ScrollLink to={link.id} smooth={true}>
                {link.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <IconX
              size={28}
              color={"#4B5563"}
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          ) : (
            <IconMenu2
              size={28}
              color={"#4B5563"}
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          )}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6  absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-white`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4 ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-slate-900" : "text-slate-500"
                  } font-poppin font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <ScrollLink
                    to={link.id}
                    smooth={true}
                    onClick={() => setToggle(false)} // Add this line
                  >
                    {link.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
