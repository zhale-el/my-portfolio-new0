import { NavLinks } from "@/constant/constant";
import Link from "next/link";

const MobileNav = () => {
  return (
    <div>
      {/*overlay  */}
      <div className="fixed inset-0 transform transition-all right-0 duration-500 z-[100002] bg-black opacity-70 w-full h-screen"></div>
      {/* navlinks */}
      <div className="text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-[100050] right-0">
        {NavLinks.map((link) => {
          return (
            <Link href={link.url} key={link.id}>
              <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
      {/* cross icon */}
    </div>
  );
};

export default MobileNav;
