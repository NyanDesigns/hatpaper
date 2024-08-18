import Link from "next/link";
//icons
import { AiOutlineUp } from "react-icons/ai";
import { FaDiscord, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiMailSendFill } from "react-icons/ri";

//list of Contacts
const contactList = [
  {
    icon: (
      <RiMailSendFill className="h-[20px] w-[20px] transform text-background transition-transform hover:scale-150 " />
    ),
    href: "https://www.gmail.com",
  },
  {
    icon: (
      <FaInstagram className="h-[20px] w-[20px] transform text-background transition-transform hover:scale-150 " />
    ),
    href: "https://www.instagram.com",
  },
  {
    icon: (
      <FaTiktok className="h-[20px] w-[20px] transform text-background transition-transform hover:scale-150 " />
    ),
    href: "https://www.tiktok.com",
  },
  {
    icon: (
      <FaXTwitter className="h-[20px] w-[20px] transform text-background transition-transform hover:scale-150 " />
    ),
    href: "https://www.twitter.com",
  },
  {
    icon: (
      <FaDiscord className="h-[20px] w-[20px] transform text-background transition-transform hover:scale-150 " />
    ),
    href: "https://www.discord.com",
  },
];

export function Footer() {
  return (
    //footer
    <footer className="flex flex-col min-w-screen">
      {/* contactsBanner */}
      <div className="flex w-full items-center justify-between gap-10 bg-foreground/80 px-6 py-[12px]">
        <p className="text-sm text-background">Connect with us //</p>
        {/* socialLogos */}
        <ul className="flex flex-row items-center justify-between grow">
          {contactList.map((nav, index) => {
            return (
              <li key={index}>
                <Link href={nav.href}>{nav.icon}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* copyrightBanner */}
      <div className="flex items-center justify-between w-full gap-4 px-6 py-3">
        {/* logoContainer */}
        <Link
          href={"/"}
          className="flex flex-col items-center justify-center w-10 h-8 border-white border-[1px]"
        >
          {/* logo */}
          <AiOutlineUp />
        </Link>
        <p className="text-[12px] text-foreground">
          © 2024 Nyan Designs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
