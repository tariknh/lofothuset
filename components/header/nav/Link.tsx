import Link from "next/link";
import { motion } from "framer-motion";

export default function NavLink({
  data,
  isActive,
  setSelectedIndicator,
  onClick,
}: any) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={`relative max-w-fit flex items-center ${
        isActive && "mb-[8px]"
      }`}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      onClick={onClick}
    >
      <motion.div
        animate={isActive ? "open" : "closed"}
        className={` w-full h-[2px] -bottom-1 ${
          isActive && "bg-white"
        }  left-0 absolute`}
      ></motion.div>
      <Link className="tracking-tighter " href={href}>
        {title}
      </Link>
    </motion.div>
  );
}
