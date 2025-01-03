import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/SamadhanGh",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/samadhan-gh/",
  },
  {
    icon: <SiLeetcode />,
    path: "https://leetcode.com/u/samadhan_11/",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
