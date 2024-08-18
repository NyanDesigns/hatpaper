"use client";
// components/Navbar.jsx
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

// Render Element
export default function Navbar() {
  const { setTheme } = useTheme();
  return (
    // navBar
    <nav className="fixed z-50 min-w-full pt-4 px-6 flex items-center justify-between ">
      {/* logoContainer */}
      <Link
        href="https://linktr.ee/nyandesigns"
        className="flex flex-row items-center justify-center"
      >
        <Button className="p-0" variant="nav">
          {/* logoImage */}
          <Image
            src="/logo.svg"
            alt="Logo"
            width={35}
            height={35}
            style={{ width: "auto", height: "auto" }} // Fix CSS error
            priority
          />
        </Button>
      </Link>

      {/* Light/Dark modeToggle */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {/* toggleButton */}
          <Button variant="nav">
            <Sun className="scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="rounded-none" align="end">
          <DropdownMenuItem
            className="rounded-none"
            onClick={() => setTheme("light")}
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            className="rounded-none"
            onClick={() => setTheme("dark")}
          >
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            className="rounded-none"
            onClick={() => setTheme("system")}
          >
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
