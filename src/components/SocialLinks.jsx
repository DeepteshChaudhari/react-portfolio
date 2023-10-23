import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
  const Links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn<FaLinkedin size={20} />
        </>
      ),
      href: "https://www.linkedin.com/in/deeptesh-chaudhari/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github<FaGithub size={20} />
        </>
      ),
      href: "https://github.com/DeepteshChaudhari",
    },
    {
      id: 3,
      child: (
        <>
          Mail<HiOutlineMail size={20} />
        </>
      ),
      href: "mailto:diptesh151097@gmail.com",
    },

    {
      id: 4,
      child: (
        <>
          Resume<BsFillPersonLinesFill size={20} />
        </>
      ),
      href: "https://drive.google.com/file/d/1gYq4omjUqc5YfhJZKD8LuxWhsl7L2QA_/view?usp=share_link",
      download: true,
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {Links.map(({ id, child, href, download, style }) => (
          // eslint-disable-next-line
          <li key={id} className={`bg-gray-500 flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 ${style}`}>
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target='_blank'
              rel="noreferrer">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
