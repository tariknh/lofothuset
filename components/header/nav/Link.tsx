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
      className="relative flex items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      onClick={onClick}
    >
      <motion.div
        animate={isActive ? "open" : "closed"}
        className={` w-[10px] h-[10px] ${
          isActive && "bg-white"
        } rounded-md -left-5 absolute`}
      ></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}
